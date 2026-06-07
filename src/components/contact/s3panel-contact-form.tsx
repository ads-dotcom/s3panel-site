'use client';

import { useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';

const turnstileSiteKey = '0x4AAAAAADgNGbGGEuq_rXAR';

type SubmitState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
};

declare global {
  interface Window {
    turnstile?: {
      reset: () => void;
    };
  }
}

const topics = [
  'Product question',
  'Billing',
  'Storage connection',
  'Security or privacy',
  'App Store support',
  'Partnership',
] as const;

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.2px]"
    >
      {children}
    </label>
  );
}

const inputClass =
  'border-stroke-3/14 bg-background-7 font-inter-tight text-tagline-2 text-background-13/86 placeholder:text-background-13/35 focus:border-background-13/35 block w-full rounded-lg border px-4 py-3.5 outline-none transition-colors';

export default function S3PanelContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<SubmitState>({
    status: 'idle',
    message: 'Messages from this form are delivered to info@hafsa.de.',
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const turnstileToken = String(formData.get('cf-turnstile-response') || '');

    setState({ status: 'submitting', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          topic: formData.get('topic'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          website: formData.get('website'),
          turnstileToken,
        }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        setState({
          status: 'error',
          message: result.message || 'The message could not be sent. Please try again.',
        });
        window.turnstile?.reset();
        return;
      }

      form.reset();
      window.turnstile?.reset();
      setState({
        status: 'success',
        message: result.message || 'Thanks, your message was sent.',
      });
    } catch {
      setState({
        status: 'error',
        message: 'The message could not be sent. Please email info@hafsa.de directly.',
      });
      window.turnstile?.reset();
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <fieldset className="space-y-2">
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={90}
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </fieldset>

        <fieldset className="space-y-2">
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={160}
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </fieldset>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <fieldset className="space-y-2">
          <FieldLabel htmlFor="contact-company">Company</FieldLabel>
          <input
            id="contact-company"
            name="company"
            type="text"
            maxLength={120}
            autoComplete="organization"
            placeholder="Optional"
            className={inputClass}
          />
        </fieldset>

        <fieldset className="space-y-2">
          <FieldLabel htmlFor="contact-topic">Topic</FieldLabel>
          <select id="contact-topic" name="topic" className={inputClass} defaultValue={topics[0]}>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      <fieldset className="space-y-2">
        <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={140}
          placeholder="What should we look at?"
          className={inputClass}
        />
      </fieldset>

      <fieldset className="space-y-2">
        <FieldLabel htmlFor="contact-message">Message</FieldLabel>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={20}
          maxLength={3000}
          rows={7}
          placeholder="Tell us what you need help with. Please do not include S3 secret keys, API tokens, or bucket credentials."
          className={`${inputClass} resize-y leading-relaxed`}
        />
      </fieldset>

      <div className="rounded-lg border border-stroke-3/12 bg-background-8 px-4 py-4">
        <div
          className="cf-turnstile"
          data-sitekey={turnstileSiteKey}
          data-theme="light"
          data-size="normal"
        />
        <p className="font-inter-tight text-tagline-4 text-background-13/48 mt-3">
          Protected by Cloudflare Turnstile. We validate the token on the server before sending.
        </p>
      </div>

      <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
        <p
          className={`font-inter-tight text-tagline-3 ${
            state.status === 'success'
              ? 'text-emerald-700'
              : state.status === 'error'
                ? 'text-red-700'
                : 'text-background-13/55'
          }`}
          aria-live="polite"
        >
          {state.message}
        </p>
        <button
          type="submit"
          disabled={state.status === 'submitting'}
          className="group/btn-primary bg-background-14 hover:border-stroke-3/20 hover:bg-background-14/95 relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-[4px] border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="text-background-7 font-ibm-plex-mono text-tagline-2">
            {state.status === 'submitting' ? 'Sending...' : 'Send message'}
          </span>
          <span className="text-background-7">&gt;</span>
        </button>
      </div>
    </form>
  );
}
