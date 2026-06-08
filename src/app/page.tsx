import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { featurePillars, homeFeatureHighlights } from '@/src/data/features';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
import type { SimpleIcon } from 'simple-icons';

type Provider = {
  name: string;
  product: string;
  label: string;
  color: string;
  href: string;
  icon?: SimpleIcon;
  mark?: 's3' | 'custom';
};

const providers: Provider[] = [
  {
    name: 'Amazon S3',
    product: 'AWS object storage',
    label: 'Native S3 API',
    mark: 's3',
    color: '#ff9900',
    href: '/providers/amazon-s3',
  },
  {
    name: 'Cloudflare R2',
    product: 'Zero egress object storage',
    label: 'R2 buckets',
    icon: siCloudflare,
    color: `#${siCloudflare.hex}`,
    href: '/providers/cloudflare-r2',
  },
  {
    name: 'Hetzner',
    product: 'Object Storage',
    label: 'S3-compatible',
    icon: siHetzner,
    color: `#${siHetzner.hex}`,
    href: '/providers/hetzner-object-storage',
  },
  {
    name: 'MinIO',
    product: 'Self-hosted object storage',
    label: 'S3-compatible',
    icon: siMinio,
    color: `#${siMinio.hex}`,
    href: '/providers/minio',
  },
  {
    name: 'Wasabi',
    product: 'Hot cloud storage',
    label: 'S3-compatible',
    icon: siWasabi,
    color: `#${siWasabi.hex}`,
    href: '/providers/wasabi',
  },
  {
    name: 'DigitalOcean',
    product: 'Spaces buckets',
    label: 'S3-compatible',
    icon: siDigitalocean,
    color: `#${siDigitalocean.hex}`,
    href: '/providers/digitalocean-spaces',
  },
  {
    name: 'Backblaze',
    product: 'B2 Cloud Storage',
    label: 'S3-compatible',
    icon: siBackblaze,
    color: `#${siBackblaze.hex}`,
    href: '/providers/backblaze-b2',
  },
  {
    name: 'Scaleway',
    product: 'Object Storage',
    label: 'S3-compatible',
    icon: siScaleway,
    color: `#${siScaleway.hex}`,
    href: '/providers/scaleway-object-storage',
  },
  {
    name: 'Akamai',
    product: 'Object Storage',
    label: 'S3-compatible',
    icon: siAkamai,
    color: `#${siAkamai.hex}`,
    href: '/providers/akamai-object-storage',
  },
  {
    name: 'Custom endpoint',
    product: 'Any S3-compatible API',
    label: 'Bring your URL',
    mark: 'custom',
    color: '#111827',
    href: '/providers/custom-s3-endpoint',
  },
];

const operationFeatureIds = new Set<string>([
  'transfer-manager',
  'quick-upload-links',
  'file-preview',
  'metadata-editor',
]);

export const metadata: Metadata = {
  title: 'S3Panel - Fast S3 and R2 bucket manager',
  description:
    'Browse, search, preview, transfer, edit metadata, create quick share links, and safely manage huge S3-compatible and Cloudflare R2 buckets from a focused web and native workspace.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'S3Panel - Fast S3 and R2 bucket manager',
    description:
      'Control S3-compatible and Cloudflare R2 buckets with object browsing, manifest search, transfer history, quick upload links, metadata editing, secure sharing, and safe operations.',
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
      'A focused workspace for browsing, searching, transfers, quick links, metadata editing, preview, and safely managing S3 and R2 buckets.',
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
        'S3Panel is a web and native app workspace for browsing, searching, transfers, quick upload links, preview, metadata editing, and safely managing S3-compatible and Cloudflare R2 buckets.',
      featureList: featurePillars.map((feature) => feature.title),
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

function ProviderLogo({ provider }: { provider: Provider }) {
  if (provider.icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 fill-current"
        style={{ color: provider.color }}
        aria-hidden
      >
        <path d={provider.icon.path} />
      </svg>
    );
  }

  if (provider.mark === 's3') {
    return (
      <svg className="h-14 w-14" viewBox="0 0 56 56" fill="none" aria-hidden>
        <rect width="56" height="56" rx="14" fill="#FF9900" />
        <path
          d="M17 18.5c0-3.3 5-6 11-6s11 2.7 11 6v18.8c0 3.3-5 6-11 6s-11-2.7-11-6V18.5Z"
          fill="white"
          opacity=".22"
        />
        <path
          d="M17 18.5c0 3.3 5 6 11 6s11-2.7 11-6M17 28c0 3.3 5 6 11 6s11-2.7 11-6"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text
          x="28"
          y="39"
          fill="white"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="15"
          fontWeight="700"
        >
          S3
        </text>
      </svg>
    );
  }

  return (
    <span
      className="font-ibm-plex-mono flex h-14 w-14 items-center justify-center rounded-[14px] text-[20px] font-semibold text-white"
      style={{ backgroundColor: provider.color }}
    >
      {'{}'}
    </span>
  );
}

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Link
      href={provider.href}
      className="group border-stroke-3/12 block rounded-[20px] border bg-white p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_24px_70px_rgba(3,7,18,0.16)]"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="bg-background-8 flex size-17 shrink-0 items-center justify-center rounded-[18px] shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
          <ProviderLogo provider={provider} />
        </span>
        <span className="bg-background-8 font-ibm-plex-mono text-background-13/45 rounded-full px-3 py-1 text-[10px] tracking-[1px] uppercase">
          {provider.label}
        </span>
      </div>

      <div className="mt-10">
        <h3 className="font-manrope text-background-13/90 text-[28px] leading-[1.04] font-medium">
          {provider.name}
        </h3>
        <p className="font-inter-tight text-tagline-3 text-background-13/55 mt-2">
          {provider.product}
        </p>
      </div>

      <div className="bg-stroke-3/12 mt-8 h-px" aria-hidden />
      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="font-ibm-plex-mono text-tagline-4 text-background-13/42 tracking-[1.2px] uppercase">
          ready
        </span>
        <span className="bg-background-13/20 size-2 rounded-full transition-colors duration-500 group-hover:bg-emerald-400" />
      </div>
    </Link>
  );
}

function ProviderStrip({ provider }: { provider: Provider }) {
  return (
    <Link
      href={provider.href}
      className="flex min-h-20 items-center gap-4 rounded-lg border border-white/10 bg-white/8 px-5 py-4 text-white transition-colors duration-500 hover:bg-white/14"
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-white">
        <ProviderLogo provider={provider} />
      </span>
      <span className="font-inter-tight text-tagline-3 text-white/78">{provider.name}</span>
    </Link>
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
        <div className="bg-background-7/82 absolute inset-0" aria-hidden />

        <div className="main-container relative space-y-14">
          <div className="mx-auto max-w-[980px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="S3 and Cloudflare R2 manager" />
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-manrope-heading-3 text-background-13/90 md:text-manrope-heading-2 lg:text-manrope-heading-1 font-medium">
                Control huge S3 and R2 buckets{' '}
                <span className="text-is-heading-3 text-background-13/80 md:text-is-heading-2 lg:text-is-heading-1 font-normal italic">
                  without losing your workflow
                </span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-background-13/60 mx-auto max-w-[720px] font-normal">
                S3Panel gives developers, agencies, and operations teams a modern web and macOS
                workspace for browsing, searching, transfer tracking, quick upload links, preview,
                metadata editing, and managing large object storage buckets.
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

      <section
        id="integrations"
        className="bg-background-4 scroll-mt-28 py-16 md:scroll-mt-32 md:py-24 lg:py-30"
      >
        <div className="main-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="text-white lg:col-span-7">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="storage providers" className="mb-5 border-white/20 bg-white" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Connect the storage stack{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    your team already trusts.
                  </span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 mt-6 max-w-[720px] text-white/58">
                  S3Panel uses familiar S3-compatible connection details, so teams can manage AWS
                  S3, Cloudflare R2, and compatible object storage providers without moving files
                  into a new storage system.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.25}>
              <div className="grid grid-cols-3 gap-3 lg:col-span-5">
                {[
                  ['10+', 'providers'],
                  ['S3', 'compatible'],
                  ['0', 'file migration'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-white/8 px-4 py-5 text-white"
                  >
                    <p className="font-manrope text-[34px] leading-none font-medium">{value}</p>
                    <p className="font-ibm-plex-mono text-tagline-4 mt-3 tracking-[1.1px] text-white/45 uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.35}>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {providers.map((provider) => (
                <ProviderCard key={provider.name} provider={provider} />
              ))}
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.45}>
            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
              {providers.slice(0, 5).map((provider) => (
                <ProviderStrip key={`strip-${provider.name}`} provider={provider} />
              ))}
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[18px] border border-white/10 bg-white/8 px-6 py-6 text-white md:flex-row md:items-center">
              <p className="font-inter-tight text-tagline-2 max-w-[760px] text-white/62">
                Use dedicated provider credentials, keep permissions narrow, and switch between
                buckets from one focused S3Panel workspace.
              </p>
              <LinkSecondary href="/security" className="shrink-0">
                Security model
              </LinkSecondary>
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
                  operate safely, track transfers, preview files, edit metadata, share private
                  files, connect providers, and keep account controls clear.
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
                      <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 tracking-[1.4px] uppercase">
                        {feature.label}
                      </span>
                      <span className="bg-background-14 text-background-7 font-ibm-plex-mono text-tagline-4 flex size-10 items-center justify-center rounded-full">
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
            {featurePillars
              .filter((card) => operationFeatureIds.has(card.id))
              .map((card, index) => (
                <RevealAnimation key={card.title} delay={0.1 + index * 0.1}>
                  <article className="bg-background-8 rounded-[20px] p-8 md:p-10">
                    <span className="border-stroke-1/12 text-background-13/60 font-ibm-plex-mono text-tagline-4 inline-flex rounded-[4px] border bg-white px-3 py-1 tracking-[1.4px] uppercase">
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
                  <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium text-white/90">
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
                        index === 1 ? 'bg-background-4 text-white' : 'text-background-13 bg-white'
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
