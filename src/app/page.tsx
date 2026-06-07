import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { featurePillars, homeFeatureHighlights } from '@/src/data/features';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  siAkamai,
  siBackblaze,
  siCloudflare,
  siDigitalocean,
  siHetzner,
  siMinio,
  siScaleway,
  siWasabi,
} from 'simple-icons';

const providers = [
  { name: 'AWS S3', mark: 'S3', color: '#ff9900' },
  { name: 'Cloudflare R2', icon: siCloudflare, color: `#${siCloudflare.hex}` },
  { name: 'Hetzner Object Storage', icon: siHetzner, color: `#${siHetzner.hex}` },
  { name: 'MinIO', icon: siMinio, color: `#${siMinio.hex}` },
  { name: 'Wasabi', icon: siWasabi, color: `#${siWasabi.hex}` },
  { name: 'DigitalOcean Spaces', icon: siDigitalocean, color: `#${siDigitalocean.hex}` },
  { name: 'Backblaze B2', icon: siBackblaze, color: `#${siBackblaze.hex}` },
  { name: 'Scaleway', icon: siScaleway, color: `#${siScaleway.hex}` },
  { name: 'Akamai Object Storage', icon: siAkamai, color: `#${siAkamai.hex}` },
  { name: 'Custom S3 endpoint', mark: '{}', color: '#111827' },
];

export const metadata: Metadata = {
  title: 'S3Panel - Fast S3 and R2 bucket manager',
  description:
    'Browse, search, share, and safely manage huge S3-compatible and Cloudflare R2 buckets from a focused web and native workspace.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'S3Panel - Fast S3 and R2 bucket manager',
    description:
      'Control S3-compatible and Cloudflare R2 buckets with object browsing, manifest search, folder stats, secure sharing, and safe operations.',
    url: 'https://s3panel.com/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/explorer.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel object explorer for S3 and Cloudflare R2 buckets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel - Fast S3 and R2 bucket manager',
    description:
      'A focused workspace for browsing, searching, sharing, and safely managing S3 and R2 buckets.',
    images: ['/images/s3panel/explorer.png'],
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://s3panel.com/#organization',
      name: 'S3Panel',
      url: 'https://s3panel.com/',
      logo: 'https://s3panel.com/images/s3panel/app-icon.png',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://s3panel.com/#website',
      name: 'S3Panel',
      url: 'https://s3panel.com/',
      publisher: {
        '@id': 'https://s3panel.com/#organization',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://s3panel.com/#software',
      name: 'S3Panel',
      url: 'https://s3panel.com/',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web, macOS, iOS',
      description:
        'S3Panel is a web and native app workspace for browsing, searching, sharing, and safely managing S3-compatible and Cloudflare R2 buckets.',
      image: 'https://s3panel.com/images/s3panel/explorer.png',
      offers: {
        '@type': 'Offer',
        price: '4.99',
        priceCurrency: 'EUR',
        url: 'https://s3panel.com/pricing/',
      },
    },
  ],
};

function ProviderBadge({ provider }: { provider: (typeof providers)[number] }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white"
        style={{ backgroundColor: provider.color }}
      >
        {'icon' in provider && provider.icon ? (
          <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
            <path d={provider.icon.path} />
          </svg>
        ) : (
          provider.mark
        )}
      </span>
      <span className="font-inter-tight text-tagline-3 text-background-13/80 text-left">
        {provider.name}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <section className="relative min-h-screen overflow-hidden pt-[120px] pb-18 md:pt-[165px] lg:pt-[205px]">
        <figure className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/images/s3panel/explorer.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            className="size-full object-cover object-top opacity-18"
          />
        </figure>
        <div className="absolute inset-0 bg-background-7/82" aria-hidden />

        <div className="main-container relative space-y-14">
          <div className="mx-auto max-w-[980px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="S3 and Cloudflare R2 manager" />
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-manrope-heading-3 text-background-13/90 font-medium md:text-manrope-heading-2 lg:text-manrope-heading-1">
                Control huge S3 and R2 buckets{' '}
                <span className="text-is-heading-3 text-background-13/80 font-normal italic md:text-is-heading-2 lg:text-is-heading-1">
                  without losing your workflow
                </span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-background-13/60 mx-auto max-w-[720px] font-normal">
                S3Panel gives developers, agencies, and operations teams a modern web and macOS
                workspace for browsing, searching, sharing, and managing large object storage
                buckets.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                <LinkSecondary href="/downloads">View downloads</LinkSecondary>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <figure className="overflow-hidden rounded-[18px] ring-8 ring-white/50 backdrop-blur-[47px]">
              <Image
                src="/images/s3panel/explorer.png"
                alt="S3Panel object explorer for S3 and R2 buckets"
                width={2048}
                height={1152}
                className="shadow-4 size-full rounded-xl object-cover"
                sizes="(max-width: 1290px) 100vw, 1290px"
              />
            </figure>
          </RevealAnimation>
        </div>
      </section>

      <section id="integrations" className="py-12 sm:pt-20 md:py-20 lg:py-22 xl:py-25">
        <div className="main-container space-y-8 text-center">
          <RevealAnimation delay={0.1}>
            <p className="font-ibm-plex-mono text-tagline-4 text-background-13/50 tracking-[1.6px] uppercase">
              Connect the storage provider you already use
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {providers.map((provider) => (
                <div
                  key={provider.name}
                  className="border-stroke-3/12 bg-background-9 rounded-lg border px-4 py-4"
                >
                  <ProviderBadge provider={provider} />
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section id="features" className="py-12 md:py-20 lg:py-28 xl:py-36 2xl:py-44">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="features" className="mb-4" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  The core pieces of{' '}
                  <span className="font-instrument-serif text-background-13/50 italic">
                    daily S3 work.
                  </span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-5">
                  Start with the workflows that matter most: browse objects, search large buckets,
                  operate safely, share private files, connect providers, and keep account controls
                  clear.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 inline-flex">
                  <LinkPrimary href="/features">Explore all features</LinkPrimary>
                </div>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-8">
              {homeFeatureHighlights.map((feature, index) => (
                <RevealAnimation key={feature.id} delay={0.1 + index * 0.08}>
                  <a
                    href={`/features/#${feature.id}`}
                    className="border-stroke-3/12 bg-background-9 group block min-h-[240px] rounded-[18px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                        {feature.label}
                      </span>
                      <span className="bg-background-14 text-background-7 flex size-10 items-center justify-center rounded-full font-ibm-plex-mono text-tagline-4">
                        {feature.number}
                      </span>
                    </div>
                    <h3 className="font-manrope text-background-13/90 mt-12 text-[29px] leading-[1.05] font-medium">
                      {feature.title}
                    </h3>
                    <p className="font-inter-tight text-tagline-3 text-background-13/60 mt-4">
                      {feature.summary}
                    </p>
                  </a>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="overflow-hidden py-13 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="manifest search" className="mb-4" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Search and folder sizes for{' '}
                  <span className="font-instrument-serif text-background-13/50 italic">
                    buckets S3 cannot summarize.
                  </span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-5">
                  Object storage is fast, but it does not give you instant folder totals or a native
                  grep-like search. S3Panel indexes object metadata so large buckets become easier
                  to explore.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-10 inline-block">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Try fast search</LinkPrimary>
                </div>
              </RevealAnimation>
            </div>
            <div className="grid gap-5 lg:col-span-7">
              <RevealAnimation delay={0.2}>
                <figure className="overflow-hidden rounded-[18px] bg-white p-2 shadow-[0px_20px_70px_rgba(0,0,0,0.10)]">
                  <Image
                    src="/images/s3panel/fast-search.png"
                    alt="S3Panel fast search"
                    width={2048}
                    height={1152}
                    loading="eager"
                    className="rounded-xl"
                  />
                </figure>
              </RevealAnimation>
              <div className="grid gap-5 md:grid-cols-2">
                <RevealAnimation delay={0.3}>
                  <figure className="overflow-hidden rounded-[18px] bg-white p-2 shadow-[0px_20px_70px_rgba(0,0,0,0.08)]">
                    <Image
                      src="/images/s3panel/folder-stats.png"
                      alt="Folder size statistics"
                      width={2048}
                      height={1152}
                      loading="eager"
                      className="rounded-xl"
                    />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <figure className="overflow-hidden rounded-[18px] bg-white p-2 shadow-[0px_20px_70px_rgba(0,0,0,0.08)]">
                    <Image
                      src="/images/s3panel/secure-download.png"
                    alt="Secure presigned downloads"
                    width={2048}
                    height={1152}
                    loading="eager"
                    className="rounded-xl"
                  />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-13 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="operations" />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium max-md:leading-[1.2]">
                Built for daily storage operations{' '}
                <span className="font-instrument-serif text-background-13/50 italic">
                  at SaaS scale.
                </span>
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featurePillars.slice(1, 5).map((card, index) => (
              <RevealAnimation key={card.title} delay={0.1 + index * 0.1}>
                <article className="bg-background-8 rounded-[20px] p-8 md:p-10">
                  <span className="border-stroke-1/12 text-background-13/60 inline-flex rounded-[4px] border bg-white px-3 py-1 font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px]">
                    {card.label}
                  </span>
                  <h3 className="font-manrope text-background-13/90 mt-8 text-[34px] leading-[1.02] font-medium">
                    {card.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-4">
                    {card.detail}
                  </p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="bg-background-8 py-16 md:py-24 lg:py-32">
        <div className="main-container">
          <div className="bg-background-4 rounded-[20px] p-8 md:p-14 lg:p-18">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <RevealAnimation delay={0.1}>
                  <BadgeDefault text="security" className="mb-4" />
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="font-manrope text-manrope-heading-4 text-white/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                    Your buckets stay with your provider.
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="font-inter-tight text-tagline-2 mt-5 text-white/55">
                    S3Panel stores account data, encrypted connection metadata, audit logs, and
                    manifest records. It does not host customer bucket contents.
                  </p>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <div className="mt-8 inline-flex">
                    <LinkPrimary href="/security">Read security model</LinkPrimary>
                  </div>
                </RevealAnimation>
              </div>
              <div className="grid gap-3 lg:col-span-6">
                {[
                  'Use least-privilege credentials per connection.',
                  'Read-only keys can browse and search without write operations.',
                  'Downloads use temporary presigned URLs.',
                  'macOS sessions are stored in Keychain where supported.',
                ].map((item, index) => (
                  <RevealAnimation key={item} delay={0.2 + index * 0.1}>
                    <div className="border-stroke-1/10 rounded-lg border bg-white/8 px-5 py-4 text-white/80">
                      {item}
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-13 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
        <div className="main-container">
          <div className="space-y-8 md:space-y-16">
            <div className="text-center">
              <RevealAnimation delay={0.1}>
                <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]">
                  One Pro plan with{' '}
                  <span className="font-instrument-serif text-background-13/40 italic">
                    a 3-day trial.
                  </span>
                </h2>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.2}>
              <div className="bg-background-8 rounded-[20px] p-6 md:p-10 lg:p-14">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                  {[
                    ['Monthly', 'EUR 4.99', 'Flexible monthly access.'],
                    ['Yearly', 'EUR 49.99', 'Best for teams using S3Panel all year.'],
                    ['Lifetime', 'EUR 99.99', 'One-time access for one account.'],
                  ].map(([name, price, text], index) => (
                    <article
                      key={name}
                      className={`rounded-lg p-7 ${
                        index === 1 ? 'bg-background-4 text-white' : 'bg-white text-background-13'
                      }`}
                    >
                      <p className="font-inter-tight text-tagline-2 opacity-70">{name}</p>
                      <h3 className="font-instrument-serif mt-8 text-[54px] leading-none font-normal">
                        {price}
                      </h3>
                      <p className="font-inter-tight text-tagline-2 mt-4 opacity-70">{text}</p>
                      <div className="mt-8">
                        <LinkSecondary href="https://app.s3panel.com/sign-up">
                          Start trial
                        </LinkSecondary>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="py-13 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
        <div className="main-container">
          <div className="bg-background-4 rounded-[20px] p-8 text-white md:p-12 lg:p-16">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <RevealAnimation delay={0.1}>
                  <BadgeDefault text="downloads" className="mb-4 border-white/12 bg-white/8" />
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                    Download the live Apple apps or open S3Panel in the browser.
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="font-inter-tight text-tagline-2 mt-5 max-w-[760px] text-white/55">
                    macOS, iPhone, and iPad are live on the App Store. Windows and Android are
                    planned next, with the full platform status kept on the downloads page.
                  </p>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.4}>
                <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                  <LinkPrimary href="/downloads">Open downloads</LinkPrimary>
                  <LinkSecondary href="https://app.s3panel.com" target="_blank">
                    Launch web app
                  </LinkSecondary>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
