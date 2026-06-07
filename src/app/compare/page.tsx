import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { competitorPages } from '@/src/data/competitors';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'S3Panel Comparisons',
  description:
    'Compare S3Panel with Cyberduck, Brows3, CloudMounter, and Transmit for S3-compatible storage, Cloudflare R2, object search, secure sharing, and cross-device workflows.',
  keywords: [
    'S3Panel alternative',
    'S3Panel vs Cyberduck',
    'S3Panel vs Brows3',
    'S3 browser comparison',
    'Cloudflare R2 browser alternative',
  ],
  alternates: {
    canonical: '/compare/',
  },
  openGraph: {
    title: 'S3Panel Comparisons',
    description:
      'Compare S3Panel with popular S3, cloud storage, and Mac file transfer tools.',
    url: 'https://s3panel.com/compare/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/fast-search.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel comparison pages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel Comparisons',
    description:
      'See when S3Panel fits better than broad file transfer, mounted drive, and desktop-only S3 browser tools.',
    images: ['/images/s3panel/fast-search.png'],
  },
};

const comparisonAngles = [
  ['Broad clients', 'Cyberduck and Transmit cover many protocols. S3Panel is narrower and centered on object storage work.'],
  ['Mount tools', 'CloudMounter makes storage feel like a local disk. S3Panel keeps object storage semantics visible.'],
  ['Open-source clients', 'Brows3 emphasizes desktop performance and source availability. S3Panel emphasizes managed web and Apple app workflows.'],
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'S3Panel Comparisons',
  url: 'https://s3panel.com/compare/',
  description:
    'Compare S3Panel with popular S3, cloud storage, and Mac file transfer tools.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: competitorPages.map((competitor, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `S3Panel vs ${competitor.name}`,
      url: `https://s3panel.com/compare/${competitor.slug}/`,
      description: competitor.metaDescription,
    })),
  },
};

export default function ComparePage() {
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
                <BadgeDefault text="comparisons" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Compare S3Panel with{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    S3 browsers, file transfer apps, and mounted drive tools.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[760px] text-white/60">
                  Buyers search for alternatives before they trust a storage tool. These pages make
                  S3Panel&apos;s position clear: focused S3-compatible and Cloudflare R2 workflows
                  across web, macOS, iPhone, and iPad.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/features">Explore S3Panel</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-5">
                <div className="rounded-[20px] bg-white/10 p-3 ring-8 ring-white/8">
                  <div className="rounded-[16px] bg-white p-5">
                    <div className="grid grid-cols-1 gap-3">
                      {comparisonAngles.map(([title, text], index) => (
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

      <section className="py-14 md:py-20">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {competitorPages.map((competitor, index) => (
              <RevealAnimation key={competitor.slug} delay={0.08 + index * 0.06}>
                <Link
                  href={`/compare/${competitor.slug}`}
                  className="border-stroke-3/12 bg-background-9 group flex min-h-[360px] flex-col justify-between rounded-[20px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                        {competitor.category}
                      </span>
                      <span className="flex size-10 items-center justify-center rounded-full bg-background-14 font-ibm-plex-mono text-tagline-4 text-background-7">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="font-manrope mt-12 text-[34px] leading-[1.05] font-medium text-background-13/90">
                      S3Panel vs {competitor.name}
                    </h2>
                    <p className="font-inter-tight text-tagline-2 mt-5 text-background-13/60">
                      {competitor.metaDescription}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-stroke-3/12 pt-4">
                    <span className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.2px] text-background-13/42">
                      read comparison
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
