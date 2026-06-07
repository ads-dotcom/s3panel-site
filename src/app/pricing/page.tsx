import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'S3Panel Pro pricing for web, macOS, iPhone, and iPad access with a 3-day trial, monthly, yearly, and lifetime options.',
  alternates: {
    canonical: '/pricing/',
  },
  openGraph: {
    title: 'S3Panel Pricing',
    description:
      'Choose monthly, yearly, or lifetime S3Panel Pro access for S3-compatible and Cloudflare R2 bucket management.',
    url: 'https://s3panel.com/pricing/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/billing.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel pricing and billing screen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel Pricing',
    description:
      'Simple S3Panel Pro pricing with monthly, yearly, and lifetime options for object storage teams.',
    images: ['/images/s3panel/billing.png'],
  },
};

const signUpUrl = 'https://app.s3panel.com/sign-up';

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 'EUR 4.99',
    cadence: 'per month',
    summary: 'Flexible access when you want to evaluate S3Panel with real buckets.',
    badge: 'Flexible',
    featured: false,
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: 'EUR 49.99',
    cadence: 'per year',
    summary: 'Best fit for teams using S3Panel throughout the year.',
    badge: 'Best value',
    featured: true,
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: 'EUR 99.99',
    cadence: 'one-time',
    summary: 'One-time access for one account without recurring yearly billing.',
    badge: 'One-time',
    featured: false,
  },
] as const;

const includedGroups = [
  {
    label: 'Storage work',
    title: 'Browse and operate across S3-compatible buckets',
    items: [
      'S3-compatible and Cloudflare R2 connections',
      'Object explorer with folders, prefixes, and breadcrumbs',
      'Upload, download, copy, move, rename, zip, and unzip',
      'AWS S3, R2, MinIO, Wasabi, Hetzner, and custom endpoints',
    ],
  },
  {
    label: 'Search and stats',
    title: 'Understand large buckets faster',
    items: [
      'Manifest-backed object name and key search',
      'Folder object counts and total byte sizes',
      'Bucket and prefix statistics',
      'Live content search for selected file types',
    ],
  },
  {
    label: 'Security and admin',
    title: 'Keep access controlled and reviewable',
    items: [
      'Temporary presigned sharing links',
      'Encrypted connection metadata',
      'Permission-aware write actions',
      'Audit logs, subscription state, and account controls',
    ],
  },
] as const;

const billingNotes = [
  ['Trial first', 'Start with a 3-day trial before paid access begins.'],
  ['All live platforms', 'Use the web app, macOS app, iPhone, and iPad with the same S3Panel account.'],
  ['App Store ready', 'Apple handles Mac and iOS installs, updates, and App Store purchase flows.'],
  ['Provider costs separate', 'S3Panel pricing does not include AWS, Cloudflare, or other storage provider bills.'],
] as const;

const faq = [
  {
    question: 'Do the plans include storage provider costs?',
    answer:
      'No. S3Panel is the management workspace. AWS S3, Cloudflare R2, MinIO hosting, bandwidth, requests, and provider storage costs remain separate.',
  },
  {
    question: 'Can I test before paying?',
    answer:
      'Yes. The Pro plan starts with a 3-day trial so you can connect a limited-permission bucket and test real workflows.',
  },
  {
    question: 'Are macOS and iOS included?',
    answer:
      'Yes. The live web app, macOS App Store app, iPhone, and iPad app are part of the S3Panel access story.',
  },
  {
    question: 'What should I connect first?',
    answer:
      'Start with a non-production bucket and a dedicated least-privilege key. Add production access only after the permission model is right.',
  },
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'S3Panel',
  url: 'https://s3panel.com/pricing/',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web, macOS, iOS, iPadOS',
  description:
    'S3Panel Pro provides S3-compatible and Cloudflare R2 bucket management for web, macOS, iPhone, and iPad.',
  offers: plans.map((plan) => ({
    '@type': 'Offer',
    name: `S3Panel Pro ${plan.name}`,
    price: plan.price.replace('EUR ', ''),
    priceCurrency: 'EUR',
    url: 'https://s3panel.com/pricing/',
    description: plan.summary,
  })),
};

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <article
      className={`relative flex min-h-[390px] flex-col justify-between rounded-[20px] p-7 transition-transform duration-500 hover:-translate-y-1 ${
        plan.featured
          ? 'bg-background-4 text-white'
          : 'border-stroke-3/12 bg-background-9 text-background-13 border hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-5">
          <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-55">
            {plan.name}
          </p>
          <span
            className={`rounded-full px-2.5 py-1 font-ibm-plex-mono text-[10px] uppercase tracking-[1px] ${
              plan.featured ? 'bg-emerald-300 text-emerald-950' : 'bg-background-13/8 text-background-13/55'
            }`}
          >
            {plan.badge}
          </span>
        </div>

        <h2 className="font-instrument-serif mt-12 text-[60px] leading-none font-normal md:text-[68px]">
          {plan.price}
        </h2>
        <p className="font-inter-tight text-tagline-2 mt-3 opacity-60">{plan.cadence}</p>
        <p className="font-inter-tight text-tagline-2 mt-7 opacity-70">{plan.summary}</p>
      </div>

      <div className="mt-9">
        {plan.featured ? (
          <LinkPrimary href={signUpUrl}>Start 3-day trial</LinkPrimary>
        ) : (
          <LinkSecondary href={signUpUrl}>Start 3-day trial</LinkSecondary>
        )}
      </div>
    </article>
  );
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-[140px] pb-16 md:pt-[190px] md:pb-24">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="pricing" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  One Pro workspace,{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    three ways to pay.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[720px] text-white/60">
                  Start with a 3-day trial, then choose monthly, yearly, or lifetime access for the
                  same S3Panel Pro feature set across web, macOS, iPhone, and iPad.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href={signUpUrl}>Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/features">Compare features</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-6">
                <div className="rounded-[20px] bg-white/10 p-3 ring-8 ring-white/8">
                  <div className="rounded-[16px] bg-white p-5">
                    <div className="grid grid-cols-1 gap-3">
                      {billingNotes.map(([title, text], index) => (
                        <div
                          key={title}
                          className={`rounded-lg px-5 py-5 ${
                            index === 0 ? 'bg-background-4 text-white' : 'bg-background-8 text-background-13'
                          }`}
                        >
                          <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-55">
                            {title}
                          </p>
                          <p className="font-inter-tight text-tagline-3 mt-4 opacity-75">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-22 lg:py-30">
        <div className="main-container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <BadgeDefault text="plans" className="mb-4" />
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                Choose the payment rhythm that fits your storage work.
              </h2>
            </div>
            <p className="font-inter-tight text-tagline-2 text-background-13/60 max-w-[520px]">
              Every plan unlocks the same Pro capabilities. The difference is billing cadence, not
              feature access.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <RevealAnimation key={plan.id} delay={0.1 + index * 0.08}>
                <PlanCard plan={plan} />
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
                <BadgeDefault text="included" className="mb-5 border-white/12 bg-white/8" />
                <h2 className="font-manrope text-[38px] leading-[1.05] font-medium md:text-[54px]">
                  Pro includes the operational pieces teams expect.
                </h2>
                <p className="font-inter-tight text-tagline-2 mt-5 text-white/55">
                  Pricing is intentionally simple: one Pro workspace, the same feature set, and a
                  trial before paid access begins.
                </p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 gap-4 lg:col-span-7">
              {includedGroups.map((group, index) => (
                <RevealAnimation key={group.title} delay={0.1 + index * 0.1}>
                  <article className="rounded-lg bg-white px-6 py-6">
                    <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                      {group.label}
                    </p>
                    <h3 className="font-manrope text-background-13/90 mt-4 text-[28px] leading-[1.08] font-medium">
                      {group.title}
                    </h3>
                    <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-[6px] bg-background-8 px-4 py-3 font-inter-tight text-tagline-3 text-background-13/68"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {billingNotes.map(([title, text], index) => (
              <RevealAnimation key={title} delay={0.08 + index * 0.05}>
                <div className="border-stroke-3/12 bg-background-9 rounded-[18px] border p-6">
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                    {title}
                  </p>
                  <p className="font-inter-tight text-tagline-2 text-background-13/70 mt-6">{text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="main-container">
          <div className="rounded-[20px] bg-background-4 p-8 text-white md:p-12 lg:p-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <RevealAnimation delay={0.1}>
                  <BadgeDefault text="pricing faq" className="mb-4 border-white/12 bg-white/8" />
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="font-manrope text-[38px] leading-[1.05] font-medium md:text-[54px]">
                    Clear answers before you connect production buckets.
                  </h2>
                </RevealAnimation>
              </div>

              <div className="grid gap-3 lg:col-span-7">
                {faq.map((item, index) => (
                  <RevealAnimation key={item.question} delay={0.1 + index * 0.08}>
                    <div className="rounded-lg border border-white/10 bg-white/8 px-5 py-5">
                      <h3 className="font-manrope text-[24px] leading-[1.1] font-medium">
                        {item.question}
                      </h3>
                      <p className="font-inter-tight text-tagline-3 mt-3 text-white/62">
                        {item.answer}
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
              Start the trial with a limited-permission bucket.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto mt-5 max-w-[720px]">
              Test browsing, search, folder stats, secure sharing, and file operations before
              deciding which billing option fits your workflow.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkPrimary href={signUpUrl}>Start 3-day trial</LinkPrimary>
              <LinkSecondary href="/downloads">View live apps</LinkSecondary>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
