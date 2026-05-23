import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import Image from 'next/image';
import {
  siAkamai,
  siAndroid,
  siApple,
  siBackblaze,
  siCloudflare,
  siDigitalocean,
  siHetzner,
  siMinio,
  siSafari,
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

const services = [
  {
    title: 'Object explorer',
    text: 'Browse buckets, prefixes, folders, and files with a workspace built for large object storage.',
  },
  {
    title: 'Fast manifest search',
    text: 'Build metadata indexes for object names, keys, sizes, timestamps, and folder totals.',
  },
  {
    title: 'Safe file operations',
    text: 'Upload, download, copy, move, rename, zip, unzip, and organize objects when permissions allow it.',
  },
  {
    title: 'Secure sharing',
    text: 'Create temporary presigned links and keep buckets private while sharing selected files.',
  },
  {
    title: 'Permissions and audit',
    text: 'Check ACL support, handle read-only credentials safely, and review storage actions from audit logs.',
  },
  {
    title: 'Native macOS workflow',
    text: 'Browse, preview, search, upload, rename, copy, move, share, and inspect objects from the Mac app.',
  },
  {
    title: 'R2 and custom endpoints',
    text: 'Use Cloudflare R2, Hetzner, MinIO, Wasabi, Backblaze, and compatible S3 endpoints.',
  },
  {
    title: 'Admin and billing',
    text: 'Manage users, plans, lifetime access, subscriptions, events, and app review readiness.',
  },
  {
    title: 'Duplicate and clone',
    text: 'Create same-folder copies without opening a destination dialog, including non-colliding copy names.',
  },
  {
    title: 'Copy to bucket',
    text: 'Copy files or folders into another prefix or compatible bucket when the credential policy allows it.',
  },
  {
    title: 'Move with folder picker',
    text: 'Choose a destination bucket and folder before moving large objects or folder prefixes.',
  },
  {
    title: 'Task feedback',
    text: 'Show clear operation states for upload, copy, move, delete, indexing, and sharing actions.',
  },
  {
    title: 'Share link manager',
    text: 'Create, copy, review, and revoke temporary public links from the web or native Mac workflow.',
  },
  {
    title: 'ZIP workflows',
    text: 'Prepare selected files as ZIP downloads and support archive operations for customer storage.',
  },
  {
    title: 'Object properties',
    text: 'Inspect key, content type, size, ETag, storage class, encryption, and folder metadata.',
  },
  {
    title: 'Bucket browser',
    text: 'Switch buckets quickly and keep bucket-level navigation separate from object-level actions.',
  },
];

const capabilityCards = [
  {
    label: 'Search',
    title: 'Find files without crawling forever',
    text: 'S3Panel stores object metadata in a manifest so repeated name and key searches are fast. Optional live content search scans selected files directly from customer storage.',
  },
  {
    label: 'Stats',
    title: 'Know folder sizes',
    text: 'See folder object counts and total bytes even though S3 itself does not have real folders.',
  },
  {
    label: 'Access',
    title: 'Permission-aware behavior',
    text: 'Read-only credentials can browse and search while write actions fail clearly and safely.',
  },
  {
    label: 'Admin',
    title: 'Users, roles, billing, events',
    text: 'Admin pages manage customers, subscriptions, audit events, and operational visibility.',
  },
];

const platforms = [
  { name: 'Web App', icon: siSafari, status: 'Available now', tag: 'Live', href: 'https://app.s3panel.com' },
  { name: 'macOS', icon: siApple, status: 'TestFlight', tag: 'Beta', href: '/downloads' },
  { name: 'Windows', icon: 'windows', status: 'Planned', tag: 'Soon', href: '/downloads' },
  { name: 'iOS', icon: siApple, status: 'Planned', tag: 'Soon', href: '/downloads' },
  { name: 'Android', icon: siAndroid, status: 'Planned', tag: 'Soon', href: '/downloads' },
];

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

function PlatformMark({ icon }: { icon: string | { path: string } }) {
  const common = 'h-11 w-11';
  if (typeof icon !== 'string') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d={icon.path} />
      </svg>
    );
  }
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
        <rect x="9" y="8" width="26" height="22" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 36h8M22 30v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
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
  if (icon === 'ios') {
    return (
      <svg className={common} viewBox="0 0 44 44" fill="none" aria-hidden>
        <rect x="13" y="6" width="18" height="32" rx="5" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="22" cy="33" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 44 44" fill="none" aria-hidden>
      <path d="M14 18h16v13a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V18Z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 15l-3-5M28 15l3-5M13 24h-4M35 24h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
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
                <LinkSecondary href="#downloads">View downloads</LinkSecondary>
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
        <div className="main-container text-center">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="features" className="mb-4" />
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                One panel for{' '}
                <span className="font-instrument-serif text-background-13/50 italic">
                  serious bucket work.
                </span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60">
                S3Panel focuses on the actions storage teams repeat every day, with safeguards for
                credentials, permissions, and customer data.
              </p>
            </RevealAnimation>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 text-left md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <RevealAnimation key={service.title} delay={0.1 + index * 0.1}>
                <article className="border-stroke-3/12 bg-background-9 min-h-[260px] rounded-[20px] border p-7">
                  <span className="bg-background-14 text-background-7 mb-10 flex size-10 items-center justify-center rounded-full font-ibm-plex-mono text-tagline-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-manrope text-background-13/90 text-[26px] leading-[1.1] font-medium">
                    {service.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-3 text-background-13/60 mt-4">
                    {service.text}
                  </p>
                </article>
              </RevealAnimation>
            ))}
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
            {capabilityCards.map((card, index) => (
              <RevealAnimation key={card.title} delay={0.1 + index * 0.1}>
                <article className="bg-background-8 rounded-[20px] p-8 md:p-10">
                  <span className="border-stroke-1/12 text-background-13/60 inline-flex rounded-[4px] border bg-white px-3 py-1 font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px]">
                    {card.label}
                  </span>
                  <h3 className="font-manrope text-background-13/90 mt-8 text-[34px] leading-[1.02] font-medium">
                    {card.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-4">
                    {card.text}
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

      <section id="downloads" className="py-13 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
        <div className="main-container space-y-10">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="downloads" className="mb-4" />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                Web now. macOS prepared. More native apps next.
              </h2>
            </RevealAnimation>
          </div>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {platforms.map((platform, index) => (
              <RevealAnimation key={platform.name} delay={0.1 + index * 0.1}>
                <a
                  href={platform.href}
                  className={`relative block rounded-[20px] p-6 text-center transition-transform duration-500 hover:-translate-y-1 ${
                    index === 0 ? 'bg-background-4 text-white' : 'bg-background-9 text-background-13'
                  }`}
                >
                  <span
                    className={`absolute top-4 right-4 rounded-full px-2.5 py-1 font-ibm-plex-mono text-[10px] uppercase tracking-[1px] ${
                      platform.tag === 'Soon'
                        ? 'bg-amber-300 text-amber-950'
                        : 'bg-white/14 text-current'
                    }`}
                  >
                    {platform.tag}
                  </span>
                  <span className="mx-auto mb-10 inline-flex rounded-xl bg-white/12 p-3">
                    <PlatformMark icon={platform.icon} />
                  </span>
                  <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-60">
                    {platform.status}
                  </p>
                  <h3 className="font-manrope mt-8 text-[28px] leading-[1.05] font-medium">
                    {platform.name}
                  </h3>
                </a>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
