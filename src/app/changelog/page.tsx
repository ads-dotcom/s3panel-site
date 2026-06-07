import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { changelogEntries, latestChangelogEntry } from '@/src/data/changelog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'S3Panel changelog with numbered release notes for web, macOS, iPhone, iPad, S3-compatible storage search, security, and share-link improvements.',
  keywords: [
    'S3Panel changelog',
    'S3Panel release notes',
    'S3 bucket manager updates',
    'Cloudflare R2 manager changelog',
    'macOS S3 browser release notes',
    'iOS S3 browser updates',
  ],
  alternates: {
    canonical: '/changelog/',
  },
  openGraph: {
    title: 'S3Panel Changelog',
    description:
      'Numbered S3Panel release notes covering web, macOS, iPhone, iPad, search, storage operations, and security improvements.',
    url: 'https://s3panel.com/changelog/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/explorer.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel changelog and release history',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel Changelog',
    description:
      'Follow S3Panel release notes for S3/R2 search, bucket management, native apps, and secure sharing.',
    images: ['/images/s3panel/explorer.png'],
  },
};

const entriesNewestFirst = [...changelogEntries].reverse();
const platformCounts = changelogEntries.reduce<Record<string, number>>((acc, entry) => {
  entry.platform.forEach((platform) => {
    acc[platform] = (acc[platform] ?? 0) + 1;
  });
  return acc;
}, {});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'S3Panel Changelog',
  url: 'https://s3panel.com/changelog/',
  description:
    'Numbered release notes for S3Panel web, macOS, iOS, S3-compatible storage, Cloudflare R2, search, and sharing updates.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: entriesNewestFirst.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Release ${entry.release}: ${entry.title}`,
      description: entry.summary,
      datePublished: entry.date,
    })),
  },
};

export default function ChangelogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-[140px] pb-18 md:pt-[190px] md:pb-26">
        <div className="absolute inset-x-0 top-0 h-[760px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-7">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="changelog" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Numbered release notes for{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    S3Panel web, Mac, iPhone, and iPad.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[780px] text-white/60">
                  This changelog summarizes product work in the current six-month release window
                  using the real recorded S3Panel development history: storage operations, S3/R2
                  search, App Store releases, security controls, share links, billing, and native
                  app polish.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/downloads">Download apps</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35}>
              <div className="lg:col-span-5">
                <div className="rounded-[22px] bg-white/10 p-3 ring-8 ring-white/8">
                  <div className="rounded-[18px] bg-white p-6">
                    <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                      Latest
                    </p>
                    <div className="mt-8 flex items-start justify-between gap-5">
                      <div>
                        <p className="font-manrope text-[44px] leading-none font-medium text-background-13">
                          {latestChangelogEntry.release}
                        </p>
                        <p className="font-inter-tight text-tagline-4 mt-2 text-background-13/45">
                          Release number
                        </p>
                      </div>
                      <p className="rounded-full bg-background-4 px-4 py-2 font-ibm-plex-mono text-tagline-4 text-white uppercase tracking-[1.2px]">
                        {latestChangelogEntry.date}
                      </p>
                    </div>
                    <h2 className="font-manrope mt-8 text-[30px] leading-[1.05] font-medium text-background-13/90">
                      {latestChangelogEntry.title}
                    </h2>
                    <p className="font-inter-tight text-tagline-3 mt-4 text-background-13/60">
                      {latestChangelogEntry.summary}
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Stat label="Numbered releases" value={changelogEntries.length.toString()} />
              <Stat label="Web updates" value={(platformCounts.Web ?? 0).toString()} />
              <Stat label="macOS updates" value={(platformCounts.macOS ?? 0).toString()} />
              <Stat label="iOS updates" value={(platformCounts.iOS ?? 0).toString()} />
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-14 md:py-22">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <RevealAnimation delay={0.1}>
                <div className="sticky top-32 rounded-[20px] bg-background-9 p-6">
                  <BadgeDefault text="release index" className="mb-5" />
                  <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 font-medium">
                    Continuous product work, recorded as numbered releases.
                  </h2>
                  <p className="font-inter-tight text-tagline-3 mt-5 text-background-13/60">
                    Entries are numbered from Release 1 upward. Newer releases appear first so App
                    Store users and web users can quickly understand what changed.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {Object.keys(platformCounts).map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-stroke-3/12 bg-white px-3 py-1 font-ibm-plex-mono text-tagline-4 text-background-13/50 uppercase tracking-[1.1px]"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            </aside>

            <div className="lg:col-span-8">
              <div className="space-y-4">
                {entriesNewestFirst.map((entry, index) => (
                  <RevealAnimation key={entry.release} delay={0.04 + Math.min(index, 10) * 0.025}>
                    <article className="border-stroke-3/12 bg-background-9 rounded-[18px] border p-5 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)] md:p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-background-14 text-background-7 flex h-10 min-w-10 items-center justify-center rounded-full px-3 font-ibm-plex-mono text-tagline-4">
                              {entry.release}
                            </span>
                            <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                              Release {entry.release}
                            </span>
                            <span className="font-ibm-plex-mono text-tagline-4 text-background-13/35 uppercase tracking-[1.4px]">
                              {entry.date}
                            </span>
                          </div>
                          <h3 className="font-manrope text-background-13/90 mt-5 text-[28px] leading-[1.08] font-medium">
                            {entry.title}
                          </h3>
                          <p className="font-inter-tight text-tagline-3 mt-3 text-background-13/60">
                            {entry.summary}
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-wrap gap-2 md:justify-end">
                          {entry.platform.map((platform) => (
                            <span
                              key={platform}
                              className="rounded-full bg-white px-3 py-1 font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.1px]"
                            >
                              {platform}
                            </span>
                          ))}
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

      <section className="bg-background-4 py-16 md:py-24">
        <div className="main-container">
          <div className="mx-auto max-w-[860px] text-center text-white">
            <BadgeDefault text="next" className="mb-5 border-white/12 bg-white/8" />
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 font-medium">
              Follow S3Panel releases across web and native apps.
            </h2>
            <p className="font-inter-tight text-tagline-1 mt-5 text-white/60">
              The web app, macOS app, iPhone, and iPad builds share the same product direction:
              clearer storage controls, safer sharing, faster object search, and transparent
              release notes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkPrimary href="https://app.s3panel.com/sign-up">Open S3Panel</LinkPrimary>
              <LinkSecondary href="/contact">Contact support</LinkSecondary>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white px-5 py-5">
      <p className="font-manrope text-[36px] leading-none font-medium text-background-13">{value}</p>
      <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 mt-3 uppercase tracking-[1.4px]">
        {label}
      </p>
    </div>
  );
}
