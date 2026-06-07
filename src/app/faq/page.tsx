import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { seoFaq } from '@/src/data/seo-faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common S3Panel questions about S3-compatible providers, Cloudflare R2, large bucket search, data boundaries, native apps, and credentials.',
  keywords: [
    'S3Panel FAQ',
    'S3 browser FAQ',
    'Cloudflare R2 browser FAQ',
    'S3-compatible storage manager questions',
    'S3Panel security',
  ],
  alternates: {
    canonical: '/faq/',
  },
  openGraph: {
    title: 'S3Panel FAQ',
    description:
      'Common questions about S3Panel, supported providers, object search, security boundaries, and native apps.',
    url: 'https://s3panel.com/faq/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/explorer.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel FAQ',
    description:
      'Answers about providers, bucket data, large bucket search, Mac and iPhone availability, and storage credentials.',
    images: ['/images/s3panel/explorer.png'],
  },
};

const categories = [
  ['Storage support', 'Amazon S3, Cloudflare R2, MinIO, Wasabi, Backblaze B2, DigitalOcean Spaces, Hetzner, Scaleway, Akamai, and custom endpoints.'],
  ['Data boundary', 'S3Panel is a control surface; customer object bytes stay in the connected storage provider.'],
  ['Platform access', 'The web app, macOS app, iPhone, and iPad are live. Windows and Android are planned next.'],
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: seoFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-[140px] pb-16 md:pt-[190px] md:pb-24">
        <div className="absolute inset-x-0 top-0 h-[700px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-7">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="faq" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  Clear answers before users connect{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    real S3 and R2 buckets.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[760px] text-white/60">
                  The FAQ page answers the questions buyers, App Store users, and storage teams ask
                  before trusting an S3-compatible bucket manager with provider credentials.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/contact">Contact support</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-5">
                <div className="rounded-[20px] bg-white/10 p-3 ring-8 ring-white/8">
                  <div className="rounded-[16px] bg-white p-5">
                    <div className="grid grid-cols-1 gap-3">
                      {categories.map(([title, text], index) => (
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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="answers" className="mb-5" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  The short version: keep credentials scoped and files with your provider.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 mt-5 text-background-13/60">
                  S3Panel is built to make repeated object storage work calmer, but your storage
                  account permissions remain the real source of authority.
                </p>
              </RevealAnimation>
            </div>

            <div className="space-y-4 lg:col-span-8">
              {seoFaq.map((item, index) => (
                <RevealAnimation key={item.question} delay={0.08 + index * 0.05}>
                  <article className="border-stroke-3/12 rounded-[18px] border bg-white p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background-14 font-ibm-plex-mono text-tagline-4 text-background-7">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h2 className="font-manrope text-[26px] leading-[1.08] font-medium text-background-13/90">
                          {item.question}
                        </h2>
                        <p className="font-inter-tight text-tagline-2 mt-4 text-background-13/62">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-26">
        <div className="main-container">
          <div className="rounded-[20px] bg-background-4 p-6 text-white md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-white/45">
                  still deciding?
                </p>
                <h2 className="font-manrope mt-4 text-[38px] leading-[1.05] font-medium">
                  Start with a test bucket and a least-privilege key.
                </h2>
                <p className="font-inter-tight text-tagline-2 mt-5 max-w-[760px] text-white/60">
                  That gives you a realistic S3Panel trial without exposing production storage more
                  broadly than needed.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                <LinkPrimary href="https://app.s3panel.com/sign-up">Start trial</LinkPrimary>
                <LinkSecondary href="/security">Security model</LinkSecondary>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
