import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { featurePillars } from '@/src/data/features';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Detailed S3Panel features for S3/R2 browsing, manifest search, bucket policy, lifecycle rules, versioning, static website hosting, encryption, multipart transfers, quick upload links, metadata editing, and Shortcuts.',
  keywords: [
    'S3Panel features',
    'S3 bucket manager',
    'Cloudflare R2 manager',
    'S3 file search',
    'S3 folder size',
    'presigned S3 links',
    'S3 transfer manager',
    'S3 bucket policy editor',
    'S3 lifecycle rules',
    'S3 versioning manager',
    'S3 static website hosting',
    'S3 server side encryption',
    'multipart S3 upload',
    'S3 metadata editor',
    'S3 file preview',
    'Apple Shortcuts S3',
    'S3-compatible storage',
  ],
  alternates: {
    canonical: '/features/',
  },
  openGraph: {
    title: 'S3Panel Features',
    description:
      'Browse, search, transfer, preview, edit metadata, manage bucket policy/lifecycle/encryption, create quick share links, and safely manage S3-compatible and Cloudflare R2 buckets with S3Panel.',
    url: 'https://s3panel.com/features/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/explorer.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel object explorer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel Features',
    description:
      'Object explorer, manifest search, bucket admin, advanced transfer manager, quick upload links, metadata editor, Shortcuts, and audit-ready controls for S3 and R2.',
    images: ['/images/s3panel/explorer.png'],
  },
};

const proofPoints = [
  [
    'Object work',
    'Browse, inspect, preview, upload, download, copy, move, rename, zip, unzip, and delete.',
  ],
  ['Search and stats', 'Use manifest metadata for object search, folder counts, and total sizes.'],
  ['Bucket admin', 'Manage policy, lifecycle, website hosting, encryption, ACL, and versioning.'],
  ['Transfers', 'Track multipart uploads, schedules, retry context, pause/resume, and history.'],
] as const;

const useCases = [
  {
    title: 'Agencies managing client buckets',
    text: 'Keep each customer connection separate, use least-privilege keys, and find files without switching provider consoles all day.',
  },
  {
    title: 'SaaS teams with large object stores',
    text: 'Inspect uploads, locate generated assets, understand folder growth, and share individual files without making buckets public.',
  },
  {
    title: 'Operations teams cleaning storage',
    text: 'Search by key, review folder totals, copy or move selected objects, and keep action history visible for support work.',
  },
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'S3Panel Features',
  url: 'https://s3panel.com/features/',
  description:
    'Detailed S3Panel features for S3/R2 browsing, manifest search, bucket policy, lifecycle rules, versioning, static website hosting, encryption, multipart transfers, quick upload links, metadata editing, and Shortcuts.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'S3Panel',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, macOS, iOS',
    description:
      'S3Panel is a web and native app workspace for S3-compatible and Cloudflare R2 bucket management.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '4.99',
      url: 'https://s3panel.com/pricing/',
    },
    featureList: featurePillars.map((feature) => feature.title),
  },
  hasPart: {
    '@type': 'ItemList',
    itemListElement: featurePillars.map((feature, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: feature.title,
      url: `https://s3panel.com/features/#${feature.id}`,
      description: feature.summary,
    })),
  },
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-[140px] pb-18 md:pt-[190px] md:pb-26">
        <div className="bg-background-4 absolute inset-x-0 top-0 h-[620px]" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="features" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Everything S3Panel does for{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    serious object storage work.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[720px] text-white/60">
                  S3Panel combines a focused object explorer, manifest-backed search, safe file
                  operations, transfer history, quick upload links, preview, metadata editing,
                  provider coverage, and audit-ready account controls in one workspace.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">
                    Start 3-day trial
                  </LinkPrimary>
                  <LinkSecondary href="/pricing">View pricing</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35}>
              <div className="lg:col-span-6">
                <figure className="overflow-hidden rounded-[18px] bg-white/10 p-2 ring-8 ring-white/8">
                  <Image
                    src="/images/s3panel/explorer.png"
                    alt="S3Panel object storage explorer"
                    width={2048}
                    height={1152}
                    priority
                    loading="eager"
                    fetchPriority="high"
                    className="rounded-xl"
                  />
                </figure>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
              {proofPoints.map(([title, text]) => (
                <div key={title} className="rounded-lg bg-white px-5 py-5">
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 tracking-[1.4px] uppercase">
                    {title}
                  </p>
                  <p className="font-inter-tight text-tagline-3 text-background-13/70 mt-4">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featurePillars.map((feature, index) => (
              <RevealAnimation key={feature.id} delay={0.08 + index * 0.05}>
                <a
                  href={`#${feature.id}`}
                  className="border-stroke-3/12 bg-background-9 group block rounded-[18px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 tracking-[1.4px] uppercase">
                      {feature.label}
                    </span>
                    <span className="bg-background-14 text-background-7 font-ibm-plex-mono text-tagline-4 flex size-10 items-center justify-center rounded-full">
                      {feature.number}
                    </span>
                  </div>
                  <h2 className="font-manrope text-background-13/90 mt-10 text-[30px] leading-[1.05] font-medium">
                    {feature.title}
                  </h2>
                  <p className="font-inter-tight text-tagline-3 text-background-13/60 mt-4">
                    {feature.summary}
                  </p>
                </a>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="main-container space-y-18 md:space-y-24">
          {featurePillars.map((feature, index) => (
            <article
              id={feature.id}
              key={feature.id}
              className="border-stroke-3/12 scroll-mt-32 border-t pt-12 md:pt-16"
            >
              <div
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 ${
                  index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="lg:col-span-5">
                  <RevealAnimation delay={0.1}>
                    <div className="flex items-center gap-3">
                      <span className="bg-background-14 text-background-7 font-ibm-plex-mono text-tagline-4 flex size-10 items-center justify-center rounded-full">
                        {feature.number}
                      </span>
                      <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 tracking-[1.4px] uppercase">
                        {feature.label}
                      </span>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 mt-8 font-medium">
                      {feature.title}
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="font-inter-tight text-tagline-1 text-background-13/60 mt-5">
                      {feature.detail}
                    </p>
                  </RevealAnimation>
                </div>

                <RevealAnimation delay={0.2}>
                  <div className="lg:col-span-7">
                    <figure className="overflow-hidden rounded-[18px] bg-white p-2 shadow-[0px_20px_70px_rgba(0,0,0,0.09)]">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={2048}
                        height={1152}
                        className="rounded-xl"
                        sizes="(max-width: 1024px) 100vw, 760px"
                      />
                    </figure>
                  </div>
                </RevealAnimation>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
                <RevealAnimation delay={0.2}>
                  <div className="bg-background-8 rounded-[18px] p-6 lg:col-span-5">
                    <h3 className="font-manrope text-background-13/90 text-[26px] leading-[1.1] font-medium">
                      What it includes
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {feature.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="bg-background-14 mt-2 size-1.5 shrink-0 rounded-full" />
                          <span className="font-inter-tight text-tagline-3 text-background-13/70">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <div className="border-stroke-3/12 rounded-[18px] border bg-white p-6 lg:col-span-7">
                    <h3 className="font-manrope text-background-13/90 text-[26px] leading-[1.1] font-medium">
                      How teams use it
                    </h3>
                    <div className="mt-6 grid gap-3">
                      {feature.workflow.map((item, stepIndex) => (
                        <div key={item} className="bg-background-8 flex gap-4 rounded-lg px-5 py-4">
                          <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45">
                            {String(stepIndex + 1).padStart(2, '0')}
                          </span>
                          <span className="font-inter-tight text-tagline-3 text-background-13/70">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="main-container">
          <div className="bg-background-4 rounded-[20px] p-8 text-white md:p-14 lg:p-18">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <RevealAnimation delay={0.1}>
                  <BadgeDefault text="use cases" className="mb-4 border-white/12 bg-white/8" />
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 font-medium">
                    Built for teams that live inside object storage.
                  </h2>
                </RevealAnimation>
              </div>
              <div className="grid gap-3 lg:col-span-7">
                {useCases.map((item, index) => (
                  <RevealAnimation key={item.title} delay={0.2 + index * 0.1}>
                    <div className="rounded-lg border border-white/10 bg-white/8 px-5 py-5">
                      <h3 className="font-manrope text-[24px] leading-[1.1] font-medium">
                        {item.title}
                      </h3>
                      <p className="font-inter-tight text-tagline-3 mt-3 text-white/62">
                        {item.text}
                      </p>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <RevealAnimation delay={0.1}>
              <div className="border-background-8 bg-background-7 rounded-xl border-8 p-7 lg:p-10.5">
                <h2 className="font-manrope text-background-13/90 text-[34px] leading-[1.05] font-medium">
                  What S3Panel stores
                </h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-5">
                  S3Panel stores account data, encrypted connection metadata, audit logs, billing
                  state, and manifest records. It does not host or copy customer bucket contents
                  into S3Panel storage.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className="border-background-8 bg-background-7 rounded-xl border-8 p-7 lg:p-10.5">
                <h2 className="font-manrope text-background-13/90 text-[34px] leading-[1.05] font-medium">
                  What customers control
                </h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-5">
                  Customers control the provider account, bucket policy, object contents, and IAM or
                  API credentials. S3Panel works best with dedicated least-privilege keys per
                  environment or client.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-22">
        <div className="main-container text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
              Try the full S3Panel workflow with your own buckets.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto mt-5 max-w-[720px]">
              Start with a 3-day trial, connect a limited-permission storage key, and test the
              explorer, search, folder stats, secure sharing, and operation flows.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkPrimary href="https://app.s3panel.com/sign-up">Start trial</LinkPrimary>
              <LinkSecondary href="/downloads">View downloads</LinkSecondary>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
