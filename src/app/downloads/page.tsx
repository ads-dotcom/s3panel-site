import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import type { Metadata } from 'next';
import Image from 'next/image';

const appStoreUrl = 'https://apps.apple.com/us/app/s3panel/id6772481838?uo=4';

export const metadata: Metadata = {
  title: 'Downloads',
  description:
    'Open S3Panel on the web, download the live macOS and iOS App Store apps, and see upcoming Windows and Android availability.',
  alternates: {
    canonical: '/downloads/',
  },
  openGraph: {
    title: 'S3Panel Downloads',
    description:
      'Use S3Panel from the web, Mac App Store, and iPhone or iPad. Windows and Android are planned next.',
    url: 'https://s3panel.com/downloads/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/explorer.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel downloads and object storage workspace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel Downloads',
    description:
      'Download S3Panel for macOS and iOS, or open the web app for browser-based S3 and R2 management.',
    images: ['/images/s3panel/explorer.png'],
  },
};

type PlatformIconName = 'browser' | 'mac' | 'ios' | 'windows' | 'android';

type Platform = {
  name: string;
  label: string;
  status: string;
  description: string;
  href?: string;
  cta: string;
  icon: PlatformIconName;
  live: boolean;
  featured?: boolean;
};

const livePlatforms: Platform[] = [
  {
    name: 'Web App',
    label: 'Browser',
    status: 'Live now',
    description:
      'Open S3Panel directly in the browser for S3-compatible and Cloudflare R2 bucket work.',
    href: 'https://app.s3panel.com',
    cta: 'Open web app',
    icon: 'browser',
    live: true,
    featured: true,
  },
  {
    name: 'macOS',
    label: 'Mac App Store',
    status: 'Live on App Store',
    description:
      'Install the native Mac app for a focused desktop workspace with App Store updates.',
    href: appStoreUrl,
    cta: 'Download for Mac',
    icon: 'mac',
    live: true,
  },
  {
    name: 'iPhone and iPad',
    label: 'iOS / iPadOS',
    status: 'Live on App Store',
    description:
      'Use S3Panel on iPhone and iPad when you need to inspect buckets away from the desk.',
    href: appStoreUrl,
    cta: 'Get iOS app',
    icon: 'ios',
    live: true,
  },
];

const plannedPlatforms: Platform[] = [
  {
    name: 'Windows',
    label: 'Desktop',
    status: 'Coming soon',
    description:
      'A Windows build is planned after the live web, macOS, and iOS releases settle.',
    cta: 'Planned',
    icon: 'windows',
    live: false,
  },
  {
    name: 'Android',
    label: 'Mobile',
    status: 'Coming soon',
    description:
      'Android support is planned next so more teams can reach S3Panel from mobile devices.',
    cta: 'Planned',
    icon: 'android',
    live: false,
  },
];

const allPlatforms = [...livePlatforms, ...plannedPlatforms];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'S3Panel',
  url: 'https://s3panel.com/downloads/',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web, macOS, iOS, iPadOS',
  description:
    'S3Panel is available on the web, macOS, iPhone, and iPad for S3-compatible and Cloudflare R2 bucket management.',
  downloadUrl: appStoreUrl,
  installUrl: 'https://app.s3panel.com',
  offers: {
    '@type': 'Offer',
    price: '4.99',
    priceCurrency: 'EUR',
    url: 'https://s3panel.com/pricing/',
  },
};

function PlatformIcon({ icon }: { icon: PlatformIconName }) {
  const common = 'h-11 w-11';

  if (icon === 'browser') {
    return (
      <svg className={common} viewBox="0 0 44 44" fill="none" aria-hidden>
        <rect x="7" y="9" width="30" height="25" rx="5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 17h28" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="14" cy="13" r="1.5" fill="currentColor" />
        <circle cx="20" cy="13" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (icon === 'mac') {
    return (
      <svg className={common} viewBox="0 0 44 44" fill="none" aria-hidden>
        <rect x="8" y="7" width="28" height="22" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M17 35h10M22 29v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="22" cy="12" r="1.3" fill="currentColor" />
      </svg>
    );
  }

  if (icon === 'ios') {
    return (
      <svg className={common} viewBox="0 0 44 44" fill="none" aria-hidden>
        <rect x="13" y="6" width="18" height="32" rx="5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M19 11h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="22" cy="33" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (icon === 'windows') {
    return (
      <svg className={common} viewBox="0 0 44 44" fill="none" aria-hidden>
        <path d="M9 12l11-1.5v10.75H9V12ZM24 10l11-1.5v12.75H24V10ZM9 24h11v9.5L9 32V24ZM24 24h11v11.5L24 34V24Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 44 44" fill="none" aria-hidden>
      <path d="M14 18h16v13a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V18Z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 15l-3-5M28 15l3-5M13 24H9M35 24h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="25" r="1.2" fill="currentColor" />
      <circle cx="26" cy="25" r="1.2" fill="currentColor" />
    </svg>
  );
}

function PlatformCard({ platform }: { platform: Platform }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-5">
        <span className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-55">
          {platform.label}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 font-ibm-plex-mono text-[10px] uppercase tracking-[1px] ${
            platform.live ? 'bg-emerald-300 text-emerald-950' : 'bg-amber-300 text-amber-950'
          }`}
        >
          {platform.status}
        </span>
      </div>

      <span className="mt-11 inline-flex size-16 items-center justify-center rounded-xl bg-white/12">
        <PlatformIcon icon={platform.icon} />
      </span>

      <h2 className="font-manrope mt-10 text-[34px] leading-[1.04] font-medium">
        {platform.name}
      </h2>
      <p className="font-inter-tight text-tagline-3 mt-4 opacity-65">{platform.description}</p>

      <span
        className={`mt-8 inline-flex h-11 items-center justify-center rounded-[4px] px-5 font-ibm-plex-mono text-tagline-3 ${
          platform.live ? 'bg-background-7 text-background-14' : 'bg-background-13/8 text-background-13/45'
        }`}
      >
        {platform.cta}
      </span>
    </>
  );

  const className = `group block min-h-[360px] rounded-[20px] p-6 transition-transform duration-500 ${
    platform.featured
      ? 'bg-background-4 text-white hover:-translate-y-1'
      : platform.live
        ? 'bg-background-9 text-background-13 hover:-translate-y-1 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]'
        : 'bg-background-8 text-background-13'
  }`;

  if (platform.live && platform.href) {
    return (
      <a href={platform.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <div className={className} aria-disabled="true">
      {content}
    </div>
  );
}

export default function DownloadsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-[140px] pb-16 md:pt-[190px] md:pb-24">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="downloads" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Use S3Panel on the web,{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    Mac, iPhone, and iPad.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[720px] text-white/60">
                  The web app, macOS app, and iOS/iPadOS app are live now. Windows and Android are
                  planned next, so the download page stays clear about what users can install today.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href={appStoreUrl} target="_blank">
                    Open App Store
                  </LinkPrimary>
                  <LinkSecondary href="https://app.s3panel.com" target="_blank">
                    Launch web app
                  </LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-6">
                <figure className="overflow-hidden rounded-[18px] bg-white/10 p-2 ring-8 ring-white/8">
                  <Image
                    src="/images/s3panel/explorer.png"
                    alt="S3Panel running from the downloads page"
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

          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
            {livePlatforms.map((platform, index) => (
              <RevealAnimation key={platform.name} delay={0.1 + index * 0.1}>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white px-5 py-5 transition-transform duration-500 hover:-translate-y-1"
                >
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                    {platform.status}
                  </p>
                  <p className="font-inter-tight text-tagline-3 text-background-13/70 mt-4">
                    {platform.name}
                  </p>
                </a>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-22 lg:py-30">
        <div className="main-container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <BadgeDefault text="available versions" className="mb-4" />
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                Download the live apps, or use S3Panel in your browser.
              </h2>
            </div>
            <p className="font-inter-tight text-tagline-2 text-background-13/60 max-w-[520px]">
              App Store updates are handled by Apple. The browser version remains the fastest way
              to start without installing anything.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {allPlatforms.map((platform, index) => (
              <RevealAnimation key={platform.name} delay={0.08 + index * 0.05}>
                <PlatformCard platform={platform} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-8 py-16 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="bg-background-4 rounded-[20px] p-8 text-white md:p-10 lg:col-span-5">
              <BadgeDefault text="app store" className="mb-5 border-white/12 bg-white/8" />
              <h2 className="font-manrope text-[38px] leading-[1.05] font-medium md:text-[54px]">
                macOS and iOS are both live under one S3Panel listing.
              </h2>
              <p className="font-inter-tight text-tagline-2 mt-5 text-white/55">
                The App Store page is the right destination for Mac, iPhone, and iPad users. It
                keeps installs, updates, and subscription handling inside Apple&apos;s system.
              </p>
              <div className="mt-8 inline-flex">
                <LinkPrimary href={appStoreUrl} target="_blank">
                  View App Store listing
                </LinkPrimary>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:col-span-7">
              {[
                ['Web App', 'Best for immediate access from any modern desktop browser.'],
                ['macOS', 'Best for Mac users who want a native desktop entry point.'],
                ['iPhone and iPad', 'Best for checking buckets and files while away from the desk.'],
              ].map(([title, text], index) => (
                <RevealAnimation key={title} delay={0.1 + index * 0.1}>
                  <div className="rounded-lg bg-white px-6 py-6">
                    <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                      {title}
                    </p>
                    <p className="font-inter-tight text-tagline-2 text-background-13/70 mt-4">
                      {text}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
