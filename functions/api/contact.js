const MAX_BODY_BYTES = 16_384;
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const EMAIL_API_BASE = 'https://api.cloudflare.com/client/v4/accounts';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function clean(value, maxLength) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function cleanMultiline(value, maxLength) {
  return String(value || '')
    .replace(/\r\n/g, '\n')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim()
    .slice(0, maxLength);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 160;
}

function getClientIp(request) {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For') ||
    request.headers.get('X-Real-IP') ||
    ''
  );
}

async function validateTurnstile({ env, token, remoteip }) {
  if (!env.TURNSTILE_SECRET_KEY) {
    return { success: false, error: 'captcha_not_configured' };
  }

  if (!token || String(token).length > 2048) {
    return { success: false, error: 'captcha_missing' };
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip,
    }),
  });

  if (!response.ok) {
    return { success: false, error: 'captcha_unavailable' };
  }

  const result = await response.json();
  return result.success ? { success: true } : { success: false, error: 'captcha_failed' };
}

async function sendEmail({ env, submission, request }) {
  const accountId = env.CLOUDFLARE_EMAIL_ACCOUNT_ID;
  const apiToken = env.CLOUDFLARE_EMAIL_API_TOKEN;
  const to = env.CONTACT_EMAIL_TO || 'info@hafsa.de';
  const from = env.CONTACT_EMAIL_FROM || 'support@s3panel.com';

  if (!accountId || !apiToken) {
    return { success: false, error: 'email_not_configured' };
  }

  const receivedAt = new Date().toISOString();
  const ip = getClientIp(request) || 'unknown';
  const userAgent = request.headers.get('User-Agent') || 'unknown';
  const subjectLine = `S3Panel contact: ${submission.topic || submission.subject || 'New message'}`;
  const text = [
    'New S3Panel contact form message',
    '',
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company || '-'}`,
    `Topic: ${submission.topic}`,
    `Subject: ${submission.subject || '-'}`,
    '',
    'Message:',
    submission.message,
    '',
    `Received at: ${receivedAt}`,
    `IP: ${ip}`,
    `User agent: ${userAgent}`,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.55;color:#111827">
      <h2 style="margin:0 0 16px">New S3Panel contact form message</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;margin-bottom:18px">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(submission.name)}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(submission.email)}">${escapeHtml(submission.email)}</a></td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(submission.company || '-')}</td></tr>
        <tr><td><strong>Topic</strong></td><td>${escapeHtml(submission.topic)}</td></tr>
        <tr><td><strong>Subject</strong></td><td>${escapeHtml(submission.subject || '-')}</td></tr>
      </table>
      <div style="white-space:pre-wrap;border-top:1px solid #e5e7eb;padding-top:18px">${escapeHtml(submission.message)}</div>
      <p style="margin-top:22px;color:#6b7280;font-size:12px">
        Received at ${escapeHtml(receivedAt)} from ${escapeHtml(ip)}<br />
        ${escapeHtml(userAgent)}
      </p>
    </div>
  `;

  const response = await fetch(`${EMAIL_API_BASE}/${accountId}/email/sending/send`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      from: { address: from, name: 'S3Panel Contact Form' },
      reply_to: submission.email,
      subject: subjectLine.slice(0, 160),
      html,
      text,
    }),
  });

  const result = await response.json().catch(() => null);
  return response.ok && result?.success
    ? { success: true }
    : { success: false, error: 'email_send_failed' };
}

export async function onRequestPost({ request, env }) {
  const contentLength = Number(request.headers.get('Content-Length') || '0');
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, message: 'Message is too large.' }, 413);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Invalid request.' }, 400);
  }

  if (clean(body.website, 200)) {
    return json({ ok: true, message: 'Thanks, your message was received.' });
  }

  const submission = {
    name: clean(body.name, 90),
    email: clean(body.email, 160).toLowerCase(),
    company: clean(body.company, 120),
    topic: clean(body.topic, 80) || 'General question',
    subject: clean(body.subject, 140),
    message: cleanMultiline(body.message, 3000),
  };

  const errors = [];
  if (submission.name.length < 2) errors.push('name');
  if (!isEmail(submission.email)) errors.push('email');
  if (submission.message.length < 20) errors.push('message');

  if (errors.length) {
    return json({ ok: false, message: 'Please check the highlighted fields.', fields: errors }, 400);
  }

  const captcha = await validateTurnstile({
    env,
    token: body.turnstileToken || body['cf-turnstile-response'],
    remoteip: getClientIp(request),
  });

  if (!captcha.success) {
    return json({ ok: false, message: 'Bot protection failed. Please try again.' }, 400);
  }

  const email = await sendEmail({ env, submission, request });
  if (!email.success) {
    return json(
      {
        ok: false,
        message:
          'The form is online, but email delivery is not configured correctly yet. Please email info@hafsa.de directly.',
      },
      502
    );
  }

  return json({ ok: true, message: 'Thanks, your message was sent to info@hafsa.de.' });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
}
