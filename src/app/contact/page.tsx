import RevealAnimation from '@/src/components/animation/reveal-animation';
import S3PanelContactForm from '@/src/components/contact/s3panel-contact-form';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact S3Panel by secure form or email. Messages are delivered to info@hafsa.de and protected by Cloudflare Turnstile.',
  alternates: {
    canonical: '/contact/',
  },
  openGraph: {
    title: 'Contact S3Panel',
    description:
      'Send product, billing, privacy, and storage connection questions to the S3Panel team.',
    url: 'https://s3panel.com/contact/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/secure-download.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel secure contact and support workflow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact S3Panel',
    description:
      'Use the secure contact form for S3Panel support, billing, privacy, and storage connection questions.',
    images: ['/images/s3panel/secure-download.png'],
  },
};

const contactCards = [
  {
    label: 'Form delivery',
    title: 'info@hafsa.de',
    text: 'Messages from the form are delivered to this mailbox.',
    href: 'mailto:info@hafsa.de',
  },
  {
    label: 'Product support',
    title: 'support@s3panel.com',
    text: 'Use this for App Store, billing, sign-in, and storage workflow questions.',
    href: 'mailto:support@s3panel.com',
  },
  {
    label: 'Phone',
    title: '+49 176 61660555',
    text: 'For company contact and urgent operator questions.',
    href: 'tel:+4917661660555',
  },
] as const;

const guidance = [
  'Do not send S3 secret keys, API tokens, or bucket credentials.',
  'Include screenshots or exact error text when a storage connection fails.',
  'Mention whether you are using the web app, macOS app, iPhone, or iPad.',
  'For billing or App Store questions, include the account email used in S3Panel.',
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact S3Panel',
  url: 'https://s3panel.com/contact/',
  description:
    'Contact S3Panel by secure form or email. Messages are delivered to info@hafsa.de and protected by Cloudflare Turnstile.',
  mainEntity: {
    '@type': 'Organization',
    name: 'S3Panel',
    legalName: 'Hafsa GmbH',
    email: 'info@hafsa.de',
    telephone: '+49 176 61660555',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fritz-Reuter-Str. 19',
      postalCode: '21629',
      addressLocality: 'Neu Wulmstorf',
      addressCountry: 'DE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@s3panel.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'general inquiries',
        email: 'info@hafsa.de',
      },
    ],
  },
};

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="m4.5 10.5 3.5 3.25 7.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-background-4 pt-[140px] pb-16 md:pt-[190px] md:pb-24">
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="contact" className="mb-5 border-white/20 bg-white" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Send the S3Panel team a{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    protected message.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[720px] text-white/60">
                  Use the form for product, billing, privacy, App Store, and storage connection
                  questions. Messages are protected against automated spam and delivered to
                  info@hafsa.de.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="#contact-form">Open form</LinkPrimary>
                  <LinkSecondary href="/support">Support notes</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.25}>
              <div className="lg:col-span-6">
                <div className="rounded-[20px] bg-white/10 p-3 ring-8 ring-white/8">
                  <figure className="overflow-hidden rounded-[16px] bg-white p-2">
                    <Image
                      src="/images/s3panel/secure-download.png"
                      alt="S3Panel secure support workflow"
                      width={2048}
                      height={1152}
                      priority
                      loading="eager"
                      fetchPriority="high"
                      className="rounded-xl"
                    />
                  </figure>
                </div>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="rounded-lg border border-white/10 bg-white px-5 py-5 text-background-13 transition-transform duration-500 hover:-translate-y-1"
                >
                  <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-background-13/45">
                    {card.label}
                  </p>
                  <h2 className="font-manrope mt-8 text-[26px] leading-[1.05] font-medium">
                    {card.title}
                  </h2>
                  <p className="font-inter-tight text-tagline-3 mt-3 text-background-13/60">
                    {card.text}
                  </p>
                </a>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-28 py-14 md:scroll-mt-32 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <RevealAnimation delay={0.1}>
              <div className="lg:col-span-5">
                <BadgeDefault text="secure form" className="mb-4" />
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  Tell us what you need, without sharing secrets.
                </h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-5">
                  The form validates a Cloudflare Turnstile token server-side before sending email.
                  Please describe the workflow, platform, or error; keep provider credentials out of
                  the message.
                </p>

                <div className="mt-8 space-y-3">
                  {guidance.map((item) => (
                    <div key={item} className="flex gap-3 rounded-lg bg-background-8 px-5 py-4">
                      <span className="text-background-14">
                        <CheckIcon />
                      </span>
                      <p className="font-inter-tight text-tagline-3 text-background-13/68">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="lg:col-span-7">
                <div className="border-stroke-3/12 rounded-[20px] border bg-white p-5 shadow-[0px_20px_70px_rgba(0,0,0,0.07)] md:p-8">
                  <S3PanelContactForm />
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-8 py-16 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="bg-background-4 rounded-[20px] p-8 text-white md:p-10 lg:col-span-5">
              <BadgeDefault text="operator" className="mb-5 border-white/20 bg-white" />
              <h2 className="font-manrope text-[38px] leading-[1.05] font-medium md:text-[54px]">
                Hafsa GmbH operates S3Panel.
              </h2>
              <p className="font-inter-tight text-tagline-2 mt-5 text-white/55">
                Company details stay visible so users can verify who is responsible for the product
                before connecting storage accounts.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:col-span-7">
              {[
                ['Company', 'Hafsa GmbH'],
                ['Address', 'Fritz-Reuter-Str. 19, 21629 Neu Wulmstorf, Germany'],
                ['General email', 'info@hafsa.de'],
                ['Product support', 'support@s3panel.com'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-white px-6 py-6">
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                    {label}
                  </p>
                  <p className="font-inter-tight text-tagline-2 text-background-13/74 mt-4">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
