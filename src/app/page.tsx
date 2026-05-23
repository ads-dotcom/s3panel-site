import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import Image from 'next/image';

const providers = [
  'AWS S3',
  'Cloudflare R2',
  'Hetzner Object Storage',
  'MinIO',
  'Wasabi',
  'DigitalOcean Spaces',
  'Backblaze B2',
  'Scaleway',
  'Linode Object Storage',
  'Custom S3 endpoint',
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
  { name: 'Web App', status: 'Available now', href: 'https://app.s3panel.com' },
  { name: 'macOS', status: 'App Store preparation', href: '/downloads' },
  { name: 'Windows', status: 'Planned', href: '/downloads' },
  { name: 'iOS', status: 'Planned', href: '/downloads' },
  { name: 'Android', status: 'Planned', href: '/downloads' },
];

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
                  key={provider}
                  className="border-stroke-3/12 bg-background-9 rounded-lg border px-4 py-5 text-center"
                >
                  <span className="font-inter-tight text-tagline-3 text-background-13/80">
                    {provider}
                  </span>
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {platforms.map((platform, index) => (
              <RevealAnimation key={platform.name} delay={0.1 + index * 0.1}>
                <a
                  href={platform.href}
                  className={`block rounded-[20px] p-6 transition-transform duration-500 hover:-translate-y-1 ${
                    index === 0 ? 'bg-background-4 text-white' : 'bg-background-9 text-background-13'
                  }`}
                >
                  <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-60">
                    {platform.status}
                  </p>
                  <h3 className="font-manrope mt-12 text-[28px] leading-[1.05] font-medium">
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
