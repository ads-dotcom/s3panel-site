import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'S3Panel Security and Trust Center',
  description:
    'S3Panel security model for S3 and Cloudflare R2: App Store distribution, Keychain-backed Mac sessions, encrypted saved connections, no hosted file copies, manifest metadata indexes, audit logs, and secure share links.',
  keywords: [
    'S3Panel security',
    'S3 credential security',
    'Cloudflare R2 security',
    'S3 Keychain app',
    'S3 audit logs',
    'presigned URL security',
    'object storage privacy',
  ],
  alternates: {
    canonical: '/security/',
  },
  openGraph: {
    title: 'S3Panel Security and Trust Center',
    description:
      'See how S3Panel handles sensitive S3/R2 access: files stay with your provider, sessions use native secure storage where supported, and sharing uses temporary links.',
    url: 'https://s3panel.com/security/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/secure-download.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel secure object storage workflow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel Security and Trust Center',
    description:
      'A clear trust model for S3/R2 credentials, private buckets, manifest search, audit logs, and secure share links.',
    images: ['/images/s3panel/secure-download.png'],
  },
};

const trustPillars = [
  {
    number: '01',
    label: 'App Store distribution',
    title: 'Native apps distributed through Apple channels',
    text: 'The macOS, iPhone, and iPad apps are distributed through the App Store, so users install and update S3Panel through Apple review and Apple billing flows.',
  },
  {
    number: '02',
    label: 'Native sessions',
    title: 'macOS app sessions use Keychain where supported',
    text: 'The Mac app stores the native S3Panel session token in macOS Keychain where supported. Storage provider secret keys are handled as encrypted saved connection data on the S3Panel backend.',
  },
  {
    number: '03',
    label: 'No hosted file copy',
    title: 'Customer object contents stay with the storage provider',
    text: 'S3Panel is a control surface. Your S3, R2, MinIO, Wasabi, or B2 object bytes remain in the provider you connected unless you explicitly upload, download, copy, move, zip, unzip, or share a selected object.',
  },
  {
    number: '04',
    label: 'Manifest index',
    title: 'Search uses object metadata and manifest records',
    text: 'Large-bucket search and folder sizes are based on object keys, sizes, timestamps, and manifest/index records. The index is designed for discovery and stats, not for hosting full customer file contents.',
  },
  {
    number: '05',
    label: 'Audit logs',
    title: 'Storage actions can be reviewed later',
    text: 'S3Panel records operational events such as uploads, metadata updates, bucket admin changes, and share-link actions so teams can see what happened around important file work.',
  },
  {
    number: '06',
    label: 'Secure share links',
    title: 'Share selected objects with temporary URLs',
    text: 'Presigned links help teams share one object for a limited time without opening the whole bucket or changing provider-side public access settings.',
  },
] as const;

const dataBoundary = [
  {
    title: 'S3Panel stores',
    text: 'Account data, encrypted saved connection metadata, session records, billing state, audit events, share-link records, and manifest/index metadata used for search and folder stats.',
  },
  {
    title: 'Your provider stores',
    text: 'Original bucket contents, object bytes, bucket policies, provider-side access logs, storage classes, lifecycle rules, and provider billing.',
  },
  {
    title: 'You control',
    text: 'IAM/API keys, bucket permissions, object lifecycle, credential rotation, public access settings, and whether a connection is read-only or write-enabled.',
  },
] as const;

const credentialRules = [
  'Use a dedicated S3/R2 credential for S3Panel instead of root or account-wide admin keys.',
  'Start with read-only access when teammates only need browse, search, preview, and download workflows.',
  'Scope write credentials to the exact buckets or prefixes that need uploads, metadata edits, copy, move, or delete actions.',
  'Rotate provider credentials immediately if a key may have been exposed outside your team.',
  'Never send S3 secret keys, R2 tokens, or provider API credentials through support email or contact forms.',
  'Delete a saved connection in S3Panel and rotate the provider key when access should end.',
] as const;

const privateWorkflow = [
  ['Browse', 'Open buckets and prefixes through the credentials you configured.'],
  ['Search', 'Use manifest-backed search across object keys and metadata.'],
  ['Operate', 'Upload, download, metadata edit, copy, move, zip, unzip, or delete only when credentials allow it.'],
  ['Audit', 'Review important storage operations and share-link actions.'],
] as const;

const faq = [
  {
    question: 'Does S3Panel copy my bucket files into S3Panel storage?',
    answer:
      'No. S3Panel does not host customer bucket contents as its own file library. Object contents stay in the connected storage provider unless a user explicitly performs an operation such as upload, download, copy, move, zip, unzip, or share.',
  },
  {
    question: 'What does the manifest index store?',
    answer:
      'The manifest index is based on object metadata such as keys, sizes, timestamps, folder-like prefixes, and search records. It is used for object discovery, folder stats, and large-bucket workflows.',
  },
  {
    question: 'How should I create S3 or R2 credentials for S3Panel?',
    answer:
      'Create dedicated least-privilege credentials in your storage provider. Use read-only credentials where possible and grant write or admin permissions only for the workflows that need them.',
  },
  {
    question: 'How are native Mac sessions stored?',
    answer:
      'The macOS app stores the native S3Panel session token in macOS Keychain where supported. Saved storage connection secrets are encrypted as backend connection data and are not returned to the browser after save.',
  },
  {
    question: 'Can I share a private object without making the bucket public?',
    answer:
      'Yes. S3Panel supports temporary presigned URLs for selected objects so teams can share files while keeping bucket-level public access disabled.',
  },
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://s3panel.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Security',
          item: 'https://s3panel.com/security/',
        },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'S3Panel Security and Trust Center',
      url: 'https://s3panel.com/security/',
      description:
        'S3Panel security model for S3 and Cloudflare R2 credentials, manifest indexes, audit logs, secure share links, and private bucket workflows.',
      isPartOf: {
        '@id': 'https://s3panel.com/#website',
      },
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'S3Panel',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web, macOS, iOS, iPadOS',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

function CheckIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="m4.5 10.5 3.5 3.25 7.5-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 6 38 11.5V23c0 9.2-5.9 15.4-14 19-8.1-3.6-14-9.8-14-19V11.5L24 6Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2.8"
      />
      <path
        d="m17.5 24 4.5 4.25L31.5 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.8"
      />
    </svg>
  );
}

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-[140px] pb-16 md:pt-[190px] md:pb-24">
        <div className="absolute inset-x-0 top-0 h-[760px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="trust center" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Trust is the product feature{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    that matters most.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[720px] text-white/62">
                  S3Panel works with sensitive S3 and Cloudflare R2 access keys, so the security
                  model is intentionally visible: App Store distribution, native secure session
                  storage, encrypted saved connections, private buckets, manifest metadata indexes,
                  audit logs, and temporary share links.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/privacy">Read privacy policy</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-6">
                <div className="rounded-[20px] bg-white/10 p-3 ring-8 ring-white/8">
                  <div className="rounded-[16px] bg-white p-5">
                    <div className="flex items-start justify-between gap-4">
                      <span className="bg-background-8 flex size-18 items-center justify-center rounded-[20px] text-background-14">
                        <ShieldIcon />
                      </span>
                      <span className="font-ibm-plex-mono text-tagline-4 rounded-full bg-emerald-50 px-3 py-1 tracking-[1.2px] text-emerald-700 uppercase">
                        private by design
                      </span>
                    </div>

                    <div className="mt-9 grid grid-cols-1 gap-3">
                      {dataBoundary.map((item, index) => (
                        <div
                          key={item.title}
                          className={`rounded-lg px-5 py-5 ${
                            index === 0
                              ? 'bg-background-4 text-white'
                              : 'bg-background-8 text-background-13'
                          }`}
                        >
                          <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-55">
                            {item.title}
                          </p>
                          <p className="font-inter-tight text-tagline-3 mt-4 opacity-75">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-4">
            {[
              ['App Store', 'Apple-distributed native apps'],
              ['Keychain', 'Mac native session storage'],
              ['No file copy', 'Files stay in your bucket'],
              ['Audit logs', 'Review important actions'],
            ].map(([title, text], index) => (
              <RevealAnimation key={title} delay={0.1 + index * 0.07}>
                <div className="rounded-lg bg-white px-5 py-5">
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 tracking-[1.4px] uppercase">
                    {title}
                  </p>
                  <p className="font-inter-tight text-tagline-3 text-background-13/70 mt-4">
                    {text}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-22 lg:py-30">
        <div className="main-container">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="trust pillars" className="mb-4" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  The messages users need before they trust an S3 client.
                </h2>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.25}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 lg:col-span-5 lg:pt-12">
                S3Panel does not ask users to blindly hand over powerful keys. It explains where
                access is stored, which data is indexed, and how private sharing works.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustPillars.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.08 + index * 0.05}>
                <article className="border-stroke-3/12 bg-background-9 flex min-h-[360px] flex-col justify-between rounded-[20px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]">
                  <div>
                    <div className="flex items-center justify-between gap-5">
                      <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 tracking-[1.4px] uppercase">
                        {item.label}
                      </span>
                      <span className="bg-background-14 text-background-7 flex size-10 items-center justify-center rounded-full font-ibm-plex-mono text-tagline-4">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="font-manrope text-background-13/90 mt-10 text-[31px] leading-[1.04] font-medium">
                      {item.title}
                    </h3>
                    <p className="font-inter-tight text-tagline-3 text-background-13/60 mt-4">
                      {item.text}
                    </p>
                  </div>
                </article>
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
                <BadgeDefault text="credential posture" className="mb-5 border-white/12 bg-white/8" />
                <div className="text-white/82">
                  <ShieldIcon />
                </div>
                <h2 className="font-manrope mt-9 text-[38px] leading-[1.05] font-medium md:text-[54px]">
                  Bring only the access S3Panel needs.
                </h2>
                <p className="font-inter-tight text-tagline-2 mt-5 text-white/58">
                  Create provider-side credentials specifically for S3Panel. Keep read-only,
                  write, and admin-style access separated so the app can only perform the
                  operations your team expects.
                </p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 gap-3 lg:col-span-7">
              {credentialRules.map((item, index) => (
                <RevealAnimation key={item} delay={0.1 + index * 0.06}>
                  <div className="flex gap-4 rounded-lg bg-white px-5 py-4">
                    <span className="text-background-14 mt-0.5">
                      <CheckIcon />
                    </span>
                    <p className="font-inter-tight text-tagline-3 text-background-13/70">
                      {item}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="private workflow" className="mb-4" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  Search and share without making buckets public.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-5">
                  S3Panel is designed for private operational buckets. Users find objects through
                  a manifest-backed index, then share selected files with temporary links instead
                  of changing bucket-level public access.
                </p>
              </RevealAnimation>
              <div className="mt-8 grid grid-cols-1 gap-3">
                {privateWorkflow.map(([title, text], index) => (
                  <RevealAnimation key={title} delay={0.15 + index * 0.06}>
                    <div className="rounded-lg border border-stroke-3/12 bg-white px-5 py-4">
                      <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 tracking-[1.4px] uppercase">
                        {title}
                      </p>
                      <p className="font-inter-tight text-tagline-3 text-background-13/64 mt-2">
                        {text}
                      </p>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>

            <RevealAnimation delay={0.2}>
              <figure className="overflow-hidden rounded-[18px] bg-white p-2 shadow-[0px_20px_70px_rgba(0,0,0,0.09)] lg:col-span-7">
                <Image
                  src="/images/s3panel/secure-download.png"
                  alt="S3Panel secure download and presigned link workflow"
                  width={2048}
                  height={1152}
                  className="rounded-xl"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="main-container">
          <div className="rounded-[20px] bg-background-4 p-8 text-white md:p-12 lg:p-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <RevealAnimation delay={0.1}>
                  <BadgeDefault text="privacy pages" className="mb-4 border-white/12 bg-white/8" />
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="font-manrope text-[38px] leading-[1.05] font-medium md:text-[54px]">
                    Clear policies for people who need to trust the tool.
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="font-inter-tight text-tagline-2 mt-5 text-white/58">
                    The public privacy pages explain account data, saved connections, manifest
                    records, App Store purchases, account deletion, and the customer file boundary.
                  </p>
                </RevealAnimation>
              </div>

              <div className="grid gap-4 lg:col-span-7">
                {[
                  ['Privacy Policy', '/privacy', 'How S3Panel handles account data, connection metadata, credentials, and customer storage boundaries.'],
                  ['App Store Privacy', '/app-store/privacy', 'Native app privacy details for App Store users and Apple purchase workflows.'],
                  ['Support', '/support', 'How to contact support without sharing secret keys or provider credentials.'],
                ].map(([title, href, text], index) => (
                  <RevealAnimation key={title} delay={0.1 + index * 0.08}>
                    <Link
                      href={href}
                      className="group block rounded-lg border border-white/10 bg-white/8 px-6 py-5 transition-colors duration-500 hover:bg-white/14"
                    >
                      <div className="flex items-center justify-between gap-5">
                        <div>
                          <p className="font-manrope text-[26px] leading-tight font-medium">
                            {title}
                          </p>
                          <p className="font-inter-tight text-tagline-3 mt-3 text-white/58">
                            {text}
                          </p>
                        </div>
                        <span
                          className="size-2 rounded-full bg-white/24 transition-colors duration-500 group-hover:bg-emerald-300"
                          aria-hidden
                        />
                      </div>
                    </Link>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-22">
        <div className="main-container">
          <div className="mx-auto max-w-[980px] text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="security faq" className="mb-4" />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                The questions buyers ask before connecting a bucket.
              </h2>
            </RevealAnimation>
          </div>

          <div className="mx-auto mt-10 grid max-w-[980px] grid-cols-1 gap-4">
            {faq.map((item, index) => (
              <RevealAnimation key={item.question} delay={0.08 + index * 0.05}>
                <article className="border-stroke-3/12 bg-background-9 rounded-[18px] border p-6">
                  <h3 className="font-manrope text-background-13/90 text-[28px] leading-[1.08] font-medium">
                    {item.question}
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/62 mt-4">
                    {item.answer}
                  </p>
                </article>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkPrimary href="https://app.s3panel.com/sign-up">Start with a test bucket</LinkPrimary>
              <LinkSecondary href="/blog/use-presigned-urls-safely">
                Read sharing guide
              </LinkSecondary>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
