import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ProviderLogo } from '@/src/components/s3panel/provider-logo';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { providerPages } from '@/src/data/providers';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'S3-Compatible Storage Providers',
  description:
    'Explore S3Panel provider pages for Amazon S3, Cloudflare R2, MinIO, Wasabi, DigitalOcean Spaces, Backblaze B2, Hetzner, Scaleway, Akamai, and custom S3 endpoints.',
  keywords: [
    'S3-compatible storage browser',
    'Amazon S3 browser',
    'Cloudflare R2 browser',
    'MinIO browser',
    'Wasabi bucket manager',
    'S3 endpoint GUI',
  ],
  alternates: {
    canonical: '/providers/',
  },
  openGraph: {
    title: 'S3Panel Storage Providers',
    description:
      'Provider-specific S3Panel guides for S3-compatible bucket browsing, object search, folder stats, and secure sharing.',
    url: 'https://s3panel.com/providers/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/explorer.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel object storage providers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel Storage Providers',
    description:
      'Use S3Panel with Amazon S3, Cloudflare R2, MinIO, Wasabi, Backblaze B2, DigitalOcean Spaces, Hetzner, Scaleway, Akamai, and custom endpoints.',
    images: ['/images/s3panel/explorer.png'],
  },
};

const providerGroups = [
  ['Cloud platforms', 'Amazon S3, Cloudflare R2, Backblaze B2, DigitalOcean Spaces, Wasabi, Akamai, Hetzner, and Scaleway.'],
  ['Self-hosted storage', 'MinIO and private S3-compatible endpoints can use the same object workflow.'],
  ['Search-first work', 'Each provider page focuses on bucket browsing, object search, folder stats, secure sharing, and safe operations.'],
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'S3Panel Storage Providers',
  url: 'https://s3panel.com/providers/',
  description:
    'Provider-specific S3Panel guides for S3-compatible bucket browsing, object search, folder stats, and secure sharing.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: providerPages.map((provider, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: provider.name,
      url: `https://s3panel.com/providers/${provider.slug}/`,
      description: provider.metaDescription,
    })),
  },
};

export default function ProvidersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-[140px] pb-16 md:pt-[190px] md:pb-24">
        <div className="absolute inset-x-0 top-0 h-[710px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-7">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="providers" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  One S3Panel workflow for{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    the storage providers teams already use.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[760px] text-white/60">
                  S3Panel supports S3-compatible providers with focused pages for setup, daily
                  workflows, security boundaries, and long-tail search terms users actually type
                  when they need an S3 or R2 browser.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/features">Explore features</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                  {providerPages.slice(0, 6).map((provider) => (
                    <Link
                      key={provider.slug}
                      href={`/providers/${provider.slug}`}
                      className="flex min-h-24 items-center gap-4 rounded-lg border border-white/10 bg-white/8 p-4 text-white transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:text-background-13"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]">
                        <ProviderLogo
                          slug={provider.slug}
                          label={provider.name}
                          color={provider.color}
                          className="h-8 w-8"
                        />
                      </span>
                      <span className="font-inter-tight text-tagline-3">{provider.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
              {providerGroups.map(([title, text]) => (
                <div key={title} className="rounded-lg bg-white px-5 py-5">
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                    {title}
                  </p>
                  <p className="font-inter-tight text-tagline-3 mt-4 text-background-13/70">
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
          <div className="mx-auto max-w-[850px] text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="provider guides" className="mb-5" />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                Choose a provider and see how S3Panel fits the work.
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {providerPages.map((provider, index) => (
              <RevealAnimation key={provider.slug} delay={0.08 + index * 0.04}>
                <Link
                  href={`/providers/${provider.slug}`}
                  className="border-stroke-3/12 bg-background-9 group flex min-h-[360px] flex-col justify-between rounded-[20px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <span className="flex size-17 shrink-0 items-center justify-center rounded-[18px] bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                        <ProviderLogo
                          slug={provider.slug}
                          label={provider.name}
                          color={provider.color}
                        />
                      </span>
                      <span className="rounded-full bg-background-13/8 px-3 py-1 font-ibm-plex-mono text-[10px] uppercase tracking-[1px] text-background-13/50">
                        {provider.label}
                      </span>
                    </div>
                    <h3 className="font-manrope mt-11 text-[30px] leading-[1.05] font-medium text-background-13/90">
                      {provider.name}
                    </h3>
                    <p className="font-inter-tight text-tagline-3 mt-2 text-background-13/55">
                      {provider.product}
                    </p>
                    <p className="font-inter-tight text-tagline-3 mt-5 text-background-13/64">
                      {provider.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-stroke-3/12 pt-4">
                    <span className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.2px] text-background-13/42">
                      open guide
                    </span>
                    <span
                      className="size-2 rounded-full bg-background-13/20 transition-colors duration-500 group-hover:bg-emerald-400"
                      aria-hidden
                    />
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
