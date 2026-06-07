import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn who operates S3Panel, why the product exists, how it handles object storage boundaries, and how users can reach support.',
  keywords: [
    'about S3Panel',
    'S3Panel company',
    'Hafsa GmbH',
    'S3 bucket manager company',
    'Cloudflare R2 manager',
    'object storage management',
  ],
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About S3Panel',
    description:
      'S3Panel is operated by Hafsa GmbH in Germany and built for clear, focused S3-compatible object storage workflows.',
    url: 'https://s3panel.com/about/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/explorer.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel object storage workspace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About S3Panel',
    description:
      'Who operates S3Panel, what the product is built for, and how it keeps object storage boundaries clear.',
    images: ['/images/s3panel/explorer.png'],
  },
};

const facts = [
  ['Operator', 'Hafsa GmbH'],
  ['Location', 'Neu Wulmstorf, Germany'],
  ['Product focus', 'S3-compatible and Cloudflare R2 bucket management'],
  ['Support', 'support@s3panel.com'],
] as const;

const principles = [
  {
    number: '01',
    label: 'Clarity',
    title: 'Make object storage understandable',
    text: 'S3Panel is designed for people who need to inspect buckets, find files, understand folder growth, and complete common operations without getting lost in provider consoles.',
  },
  {
    number: '02',
    label: 'Boundaries',
    title: 'Keep customer files with the storage provider',
    text: 'S3Panel is a control surface. Original bucket contents remain in AWS S3, Cloudflare R2, MinIO, Wasabi, Hetzner, or the S3-compatible provider the user connects.',
  },
  {
    number: '03',
    label: 'Practicality',
    title: 'Build around real support workflows',
    text: 'The product prioritizes browse, search, download, upload, copy, move, rename, zip, unzip, delete, and temporary sharing workflows that teams repeat every day.',
  },
  {
    number: '04',
    label: 'Trust',
    title: 'Show how to reach the operator',
    text: 'S3Panel keeps company, contact, support, privacy, terms, and imprint information visible so users know who is responsible for the service.',
  },
] as const;

const trustSignals = [
  {
    title: 'Published by a registered operator',
    text: 'S3Panel is operated by Hafsa GmbH, with company address and contact information published in the imprint and support pages.',
  },
  {
    title: 'Clear product data boundary',
    text: 'The app helps manage buckets, but customer object bytes and bucket policies stay with the connected storage provider.',
  },
  {
    title: 'App Store availability',
    text: 'S3Panel is available on the web, macOS, iPhone, and iPad, with App Store distribution for native Apple platforms.',
  },
  {
    title: 'Human support channel',
    text: 'Product, billing, privacy, and storage connection questions can be sent directly to support@s3panel.com.',
  },
] as const;

const timeline = [
  {
    title: 'Built for large bucket work',
    text: 'The first focus is a fast, calm workspace for browsing S3-compatible buckets and Cloudflare R2 storage.',
  },
  {
    title: 'Search and stats added',
    text: 'Manifest-backed search, folder counts, and size visibility make large object stores easier to reason about.',
  },
  {
    title: 'Native apps released',
    text: 'The web app is joined by macOS, iPhone, and iPad apps so teams can use the same product across daily devices.',
  },
] as const;

const commitments = [
  'Keep public company information easy to find.',
  'Explain what S3Panel stores and what remains with the storage provider.',
  'Design destructive actions so users can understand the operation before acting.',
  'Support least-privilege provider credentials instead of encouraging broad admin keys.',
  'Keep pricing and platform availability clear as the product grows.',
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://s3panel.com/#organization',
      name: 'S3Panel',
      legalName: 'Hafsa GmbH',
      url: 'https://s3panel.com/',
      logo: 'https://s3panel.com/images/s3panel/app-icon.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Fritz-Reuter-Str. 19',
        postalCode: '21629',
        addressLocality: 'Neu Wulmstorf',
        addressCountry: 'DE',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@s3panel.com',
        telephone: '+49 176 61660555',
      },
    },
    {
      '@type': 'AboutPage',
      name: 'About S3Panel',
      url: 'https://s3panel.com/about/',
      description:
        'Learn who operates S3Panel, why the product exists, how it handles object storage boundaries, and how users can reach support.',
      mainEntity: {
        '@id': 'https://s3panel.com/#organization',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'S3Panel',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web, macOS, iOS, iPadOS',
      url: 'https://s3panel.com/',
      publisher: {
        '@id': 'https://s3panel.com/#organization',
      },
      description:
        'S3Panel is a web and native app workspace for S3-compatible and Cloudflare R2 bucket management.',
      offers: {
        '@type': 'Offer',
        price: '4.99',
        priceCurrency: 'EUR',
        url: 'https://s3panel.com/pricing/',
      },
    },
  ],
};

function CheckIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden>
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

function TrustIcon() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 7.5 37 12v11.5c0 8.7-5.5 14.4-13 17-7.5-2.6-13-8.3-13-17V12l13-4.5Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M18 24.5 22.2 28.5 30.5 19"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-background-4 pt-[140px] pb-16 md:pt-[190px] md:pb-24">
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="About S3Panel" className="mb-5 border-white/20 bg-white" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  A focused storage product from{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    a visible operator.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[720px] text-white/60">
                  S3Panel is operated by Hafsa GmbH in Germany and built for teams that need a
                  clearer way to browse, search, share, and manage S3-compatible object storage.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/security">Review security</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.25}>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {facts.map(([title, value], index) => (
                    <div
                      key={title}
                      className={`rounded-[18px] px-5 py-6 ${
                        index === 0 ? 'bg-white text-background-13' : 'bg-white/10 text-white'
                      }`}
                    >
                      <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-55">
                        {title}
                      </p>
                      <p className="font-manrope mt-8 text-[25px] leading-[1.08] font-medium">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <figure className="mt-12 overflow-hidden rounded-[18px] bg-white/10 p-2 ring-8 ring-white/8">
              <Image
                src="/images/s3panel/explorer.png"
                alt="S3Panel object storage explorer"
                width={2048}
                height={1152}
                priority
                loading="eager"
                fetchPriority="high"
                className="rounded-xl"
                sizes="(max-width: 1290px) 100vw, 1290px"
              />
            </figure>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-14 md:py-22 lg:py-30">
        <div className="main-container">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <BadgeDefault text="why it exists" className="mb-4" />
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                Object storage is powerful, but daily work should feel calmer.
              </h2>
            </div>
            <p className="font-inter-tight text-tagline-2 text-background-13/60 lg:col-span-5 lg:pt-12">
              S3Panel exists because provider consoles are excellent for infrastructure, but teams
              often need a simpler product surface for files, folders, search, stats, and support
              workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {principles.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.08 + index * 0.05}>
                <article className="border-stroke-3/12 bg-background-9 rounded-[20px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]">
                  <div className="flex items-center justify-between gap-5">
                    <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                      {item.label}
                    </span>
                    <span className="bg-background-14 text-background-7 flex size-10 items-center justify-center rounded-full font-ibm-plex-mono text-tagline-4">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-manrope text-background-13/90 mt-10 text-[32px] leading-[1.04] font-medium">
                    {item.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-3 text-background-13/60 mt-4">
                    {item.text}
                  </p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-8 py-16 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <RevealAnimation delay={0.1}>
              <div className="bg-background-4 rounded-[20px] p-8 text-white md:p-10 lg:col-span-5">
                <BadgeDefault text="trust signals" className="mb-5 border-white/20 bg-white" />
                <div className="text-white/80">
                  <TrustIcon />
                </div>
                <h2 className="font-manrope mt-9 text-[38px] leading-[1.05] font-medium md:text-[54px]">
                  Trust starts with visible boundaries.
                </h2>
                <p className="font-inter-tight text-tagline-2 mt-5 text-white/55">
                  Users should know who operates the product, where their files remain, how support
                  works, and which platforms are available.
                </p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 gap-4 lg:col-span-7">
              {trustSignals.map((item, index) => (
                <RevealAnimation key={item.title} delay={0.1 + index * 0.1}>
                  <div className="rounded-lg bg-white px-6 py-6">
                    <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                      {item.title}
                    </p>
                    <p className="font-inter-tight text-tagline-2 text-background-13/70 mt-4">
                      {item.text}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="operator details" className="mb-4" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  S3Panel is operated by Hafsa GmbH.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-5">
                  Company, support, privacy, terms, and imprint information are linked from the site
                  footer so users can verify the operator before connecting storage accounts.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="/contact">Contact S3Panel</LinkPrimary>
                  <LinkSecondary href="/imprint">View imprint</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.25}>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    ['Company', 'Hafsa GmbH'],
                    ['Address', 'Fritz-Reuter-Str. 19, 21629 Neu Wulmstorf, Germany'],
                    ['Support email', 'support@s3panel.com'],
                    ['Product access', 'Web, macOS, iPhone, and iPad'],
                  ].map(([title, value]) => (
                    <div key={title} className="border-stroke-3/12 rounded-lg border bg-white px-6 py-5">
                      <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                        {title}
                      </p>
                      <p className="font-inter-tight text-tagline-2 text-background-13/75 mt-3">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="main-container">
          <div className="rounded-[20px] bg-background-4 p-8 text-white md:p-12 lg:p-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <RevealAnimation delay={0.1}>
                  <BadgeDefault text="product path" className="mb-4 border-white/20 bg-white" />
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="font-manrope text-[38px] leading-[1.05] font-medium md:text-[54px]">
                    Built in steps around the work users repeat.
                  </h2>
                </RevealAnimation>
              </div>

              <div className="grid gap-3 lg:col-span-7">
                {timeline.map((item, index) => (
                  <RevealAnimation key={item.title} delay={0.1 + index * 0.08}>
                    <article className="rounded-lg border border-white/10 bg-white/8 px-5 py-5">
                      <div className="flex items-start gap-4">
                        <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-background-14 font-ibm-plex-mono text-[11px]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-manrope text-[24px] leading-[1.08] font-medium">
                            {item.title}
                          </h3>
                          <p className="font-inter-tight text-tagline-3 mt-3 text-white/60">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <RevealAnimation delay={0.1}>
              <figure className="overflow-hidden rounded-[18px] bg-white p-2 shadow-[0px_20px_70px_rgba(0,0,0,0.09)] lg:col-span-7">
                <Image
                  src="/images/s3panel/secure-download.png"
                  alt="S3Panel private object sharing workflow"
                  width={2048}
                  height={1152}
                  className="rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 760px"
                />
              </figure>
            </RevealAnimation>

            <div className="lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="commitments" className="mb-4" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  What users should expect from S3Panel.
                </h2>
              </RevealAnimation>
              <div className="mt-7 space-y-3">
                {commitments.map((item, index) => (
                  <RevealAnimation key={item} delay={0.2 + index * 0.06}>
                    <div className="border-stroke-3/12 flex gap-3 rounded-lg border bg-background-9 px-5 py-4">
                      <span className="text-background-14 mt-0.5">
                        <CheckIcon />
                      </span>
                      <p className="font-inter-tight text-tagline-3 text-background-13/70">
                        {item}
                      </p>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-22">
        <div className="main-container text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
              Verify the company, then try S3Panel with a limited-permission bucket.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto mt-5 max-w-[720px]">
              The safest way to evaluate an object storage tool is simple: start with a test bucket,
              use least-privilege credentials, and confirm the workflow before adding production
              access.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkPrimary href="https://app.s3panel.com/sign-up">Start trial</LinkPrimary>
              <LinkSecondary href="/security">Read security model</LinkSecondary>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
