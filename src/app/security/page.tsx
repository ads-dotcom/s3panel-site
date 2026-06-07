import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Security',
  description:
    'How S3Panel handles bucket access, customer data boundaries, credentials, temporary links, audit records, and account controls.',
  alternates: {
    canonical: '/security/',
  },
  openGraph: {
    title: 'S3Panel Security',
    description:
      'S3Panel is a control surface for S3-compatible storage. Customer bucket contents stay with the storage provider.',
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
    title: 'S3Panel Security',
    description:
      'Understand S3Panel data boundaries, credential handling, temporary links, and audit-ready storage operations.',
    images: ['/images/s3panel/secure-download.png'],
  },
};

const securityPrinciples = [
  {
    number: '01',
    label: 'Data boundary',
    title: 'Customer objects stay in your storage provider',
    text: 'S3Panel does not host customer bucket contents. Your files remain in AWS S3, Cloudflare R2, MinIO, Wasabi, Hetzner, or the S3-compatible provider you connect.',
  },
  {
    number: '02',
    label: 'Credentials',
    title: 'Use dedicated least-privilege storage keys',
    text: 'S3Panel works best with credentials created specifically for the buckets and actions your team needs. Read-only keys can still browse and search without write actions.',
  },
  {
    number: '03',
    label: 'Actions',
    title: 'Permission-aware operations reduce surprises',
    text: 'Upload, download, copy, move, rename, zip, unzip, and delete actions follow the permissions granted by the connected provider account.',
  },
  {
    number: '04',
    label: 'Sharing',
    title: 'Temporary links instead of public buckets',
    text: 'S3Panel supports private bucket workflows with temporary presigned links, so sharing a file does not require changing bucket-wide access.',
  },
] as const;

const dataBoundary = [
  ['S3Panel stores', 'Account data, encrypted connection metadata, audit events, billing state, and manifest records used for search and folder stats.'],
  ['Your provider stores', 'Original bucket contents, object bytes, bucket policies, provider-side logs, object ownership, and provider billing.'],
  ['You control', 'Storage account permissions, IAM or API keys, bucket policies, object lifecycle rules, credential rotation, and account deletion decisions.'],
] as const;

const controls = [
  {
    title: 'Least-privilege access',
    text: 'Create separate credentials per customer, environment, or workflow. Grant read-only access where browsing and search are enough.',
  },
  {
    title: 'Private sharing',
    text: 'Use temporary presigned URLs for selected files and revoke shared access when the workflow is finished.',
  },
  {
    title: 'Visible operation feedback',
    text: 'File operations show task states and provider errors so teams can understand what happened without switching tools.',
  },
  {
    title: 'Account control',
    text: 'Users can manage billing access and account deletion without deleting customer-owned objects in external buckets.',
  },
] as const;

const checklist = [
  'Create dedicated storage keys for S3Panel instead of reusing admin keys.',
  'Use read-only credentials for teammates who only need browse, search, and download workflows.',
  'Scope credentials to the exact buckets or prefixes that need S3Panel access.',
  'Rotate provider credentials if a key may have been exposed.',
  'Keep destructive operations limited to users who really need write permissions.',
  'Review active share links and revoke temporary access when files no longer need to be shared.',
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'S3Panel Security',
  url: 'https://s3panel.com/security/',
  description:
    'How S3Panel handles bucket access, customer data boundaries, credentials, temporary links, audit records, and account controls.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'S3Panel',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, macOS, iOS, iPadOS',
    description:
      'S3Panel is a control surface for S3-compatible storage. Customer bucket contents stay with the storage provider.',
  },
};

function ShieldIcon() {
  return (
    <svg className="h-11 w-11" viewBox="0 0 44 44" fill="none" aria-hidden>
      <path
        d="M22 6.5 34 11v10.5c0 8-5 13.5-12 16-7-2.5-12-8-12-16V11l12-4.5Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="m16.5 22 4 4 8-9"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg className="h-11 w-11" viewBox="0 0 44 44" fill="none" aria-hidden>
      <circle cx="16" cy="22" r="6" stroke="currentColor" strokeWidth="2.6" />
      <path
        d="M22 22h15M31 22v5M36 22v4"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
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
        <div className="absolute inset-x-0 top-0 h-[740px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="security" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  A clear security model for{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    S3 and R2 operations.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[720px] text-white/60">
                  S3Panel is built as a control surface for object storage. Your bucket contents
                  stay with your provider while S3Panel helps teams browse, search, share, and act
                  through permission-aware workflows.
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
                    <div className="grid grid-cols-1 gap-3">
                      {dataBoundary.map(([title, text], index) => (
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

          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              ['Control surface', 'S3Panel does not become the system of record for customer files.'],
              ['Provider owned', 'Bucket contents, policies, and object lifecycle stay in your provider.'],
              ['Permission aware', 'Available actions follow the connected credential scope.'],
            ].map(([title, text], index) => (
              <RevealAnimation key={title} delay={0.1 + index * 0.1}>
                <div className="rounded-lg bg-white px-5 py-5">
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                    {title}
                  </p>
                  <p className="font-inter-tight text-tagline-3 text-background-13/70 mt-4">{text}</p>
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
              <BadgeDefault text="security principles" className="mb-4" />
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                The important boundaries are visible before your team acts.
              </h2>
            </div>
            <p className="font-inter-tight text-tagline-2 text-background-13/60 lg:col-span-5 lg:pt-12">
              Security in an object storage tool is mostly about boundaries: where files live, which
              credentials can act, how sharing happens, and what can be reviewed later.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {securityPrinciples.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.08 + index * 0.05}>
                <article className="border-stroke-3/12 bg-background-9 rounded-[20px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]">
                  <div className="flex items-center justify-between gap-5">
                    <span className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                      {item.label}
                    </span>
                    <span className="bg-background-14 text-background-7 flex size-10 items-center justify-center rounded-full font-ibm-plex-mono text-tagline-4">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-manrope text-background-13/90 mt-10 text-[32px] leading-[1.04] font-medium">
                    {item.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-3 text-background-13/60 mt-4">
                    {item.text}
                  </p>
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
                <div className="text-white/80">
                  <KeyIcon />
                </div>
                <h2 className="font-manrope mt-9 text-[38px] leading-[1.05] font-medium md:text-[54px]">
                  Bring only the access S3Panel needs.
                </h2>
                <p className="font-inter-tight text-tagline-2 mt-5 text-white/55">
                  Create provider-side credentials for S3Panel and keep their scope small. If a
                  teammate only needs to browse and search, a read-only key is often enough.
                </p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 gap-4 lg:col-span-7">
              {controls.map((item, index) => (
                <RevealAnimation key={item.title} delay={0.1 + index * 0.1}>
                  <div className="rounded-lg bg-white px-6 py-6">
                    <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                      {item.title}
                    </p>
                    <p className="font-inter-tight text-tagline-2 text-background-13/70 mt-4">
                      {item.text}
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
                <BadgeDefault text="private sharing" className="mb-4" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  Share selected files without turning buckets public.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 text-background-13/60 mt-5">
                  Temporary presigned links let teams share individual objects while keeping bucket
                  policies private by default. The share workflow is designed for a selected file,
                  a defined access window, and a clear revocation point.
                </p>
              </RevealAnimation>
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
                  <BadgeDefault text="security checklist" className="mb-4 border-white/12 bg-white/8" />
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <div className="text-white/80">
                    <ShieldIcon />
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <h2 className="font-manrope mt-8 text-[38px] leading-[1.05] font-medium md:text-[54px]">
                    A practical setup checklist for safer bucket work.
                  </h2>
                </RevealAnimation>
              </div>

              <div className="grid gap-3 lg:col-span-7">
                {checklist.map((item, index) => (
                  <RevealAnimation key={item} delay={0.1 + index * 0.06}>
                    <div className="rounded-lg border border-white/10 bg-white/8 px-5 py-4 text-white/78">
                      {item}
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-22">
        <div className="main-container text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
              Start with a limited-permission key and test the full workflow.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto mt-5 max-w-[720px]">
              Connect a non-production bucket first, confirm the operations your credentials allow,
              and then add production access only when the permission model is right.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkPrimary href="https://app.s3panel.com/sign-up">Start trial</LinkPrimary>
              <LinkSecondary href="/features">Explore features</LinkSecondary>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
