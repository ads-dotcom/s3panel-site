import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ProviderLogo } from '@/src/components/s3panel/provider-logo';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { seoIntentPages, type SeoIntentPage as SeoIntentPageData } from '@/src/data/seo-intent';
import Link from 'next/link';

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

function ProductCard({ page }: { page: SeoIntentPageData }) {
  return (
    <div className="rounded-[20px] bg-white/10 p-3 ring-8 ring-white/8">
      <div className="rounded-[16px] bg-white p-5 md:p-6">
        <div className="flex items-start justify-between gap-5">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-[22px] bg-background-8">
            {page.providerSlug ? (
              <ProviderLogo
                slug={page.providerSlug}
                label={page.provider}
                color={page.color}
                className="h-14 w-14"
              />
            ) : (
              <span
                className="flex size-14 items-center justify-center rounded-[16px] font-ibm-plex-mono text-[18px] font-semibold text-white"
                style={{ backgroundColor: page.color }}
              >
                {page.provider.slice(0, 2).toUpperCase()}
              </span>
            )}
          </span>
          <span className="rounded-full bg-background-8 px-3 py-1 font-ibm-plex-mono text-[10px] uppercase tracking-[1px] text-background-13/50">
            {page.provider}
          </span>
        </div>
        <h2 className="font-manrope mt-12 text-[36px] leading-[1.05] font-medium text-background-13/90">
          {page.title}
        </h2>
        <p className="font-inter-tight text-tagline-3 mt-4 text-background-13/62">
          {page.audience}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {['Browse', 'Search', 'Share', 'Admin'].map((item) => (
            <div key={item} className="rounded-lg bg-background-8 px-4 py-4">
              <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.2px] text-background-13/45">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComparisonSection({ page }: { page: SeoIntentPageData }) {
  if (!page.comparison) return null;

  return (
    <section className="bg-background-8 py-14 md:py-20">
      <div className="main-container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <RevealAnimation delay={0.1}>
            <article className="border-stroke-3/12 bg-background-9 min-h-[430px] rounded-[20px] border p-6">
              <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                where {page.comparison.competitor} fits
              </p>
              <h2 className="font-manrope mt-8 text-[34px] leading-[1.05] font-medium text-background-13/90">
                Good reasons someone may choose {page.comparison.competitor}
              </h2>
              <div className="mt-8 space-y-4">
                {page.comparison.bestFor.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 text-background-14">
                      <CheckIcon />
                    </span>
                    <p className="font-inter-tight text-tagline-3 text-background-13/64">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <article className="min-h-[430px] rounded-[20px] bg-background-4 p-6 text-white">
              <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-white/45">
                where S3Panel fits
              </p>
              <h2 className="font-manrope mt-8 text-[34px] leading-[1.05] font-medium">
                Better fit when object storage workflows are the product focus
              </h2>
              <div className="mt-8 space-y-4">
                {page.comparison.s3PanelFit.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 text-white">
                      <CheckIcon />
                    </span>
                    <p className="font-inter-tight text-tagline-3 text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.25}>
          <div className="mt-5 rounded-[20px] bg-white p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {page.comparison.differences.map((difference, index) => (
                <div key={difference} className="rounded-[18px] bg-background-8 p-5">
                  <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-background-13/45">
                    difference 0{index + 1}
                  </p>
                  <p className="font-inter-tight text-tagline-3 mt-4 text-background-13/68">
                    {difference}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={page.comparison.sourceUrl}
              className="font-ibm-plex-mono text-tagline-4 mt-6 inline-flex rounded-full bg-background-14 px-4 py-2 uppercase tracking-[1.1px] text-white transition-colors duration-500 hover:bg-background-4"
              rel="noopener noreferrer"
              target="_blank"
            >
              Official {page.comparison.competitor} source
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}

export function SeoIntentPage({ page }: { page: SeoIntentPageData }) {
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
            name: page.title,
            item: `https://s3panel.com${page.path}`,
          },
        ],
      },
      {
        '@type': 'WebPage',
        name: page.title,
        url: `https://s3panel.com${page.path}`,
        description: page.metaDescription,
        isPartOf: {
          '@id': 'https://s3panel.com/#website',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-[140px] pb-16 md:pt-[190px] md:pb-24">
        <div className="absolute inset-x-0 top-0 h-[760px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-7">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text={page.eyebrow} className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  {page.headline}{' '}
                  <span className="font-instrument-serif text-white/50 italic">{page.italic}</span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[760px] text-white/60">
                  {page.description}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">{page.primaryCta}</LinkPrimary>
                  <LinkSecondary href="/features">Explore features</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-5">
                <ProductCard page={page} />
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-4">
              {page.highlights.map((highlight) => (
                <div key={highlight} className="rounded-lg bg-white px-5 py-5">
                  <span
                    className="mb-4 block size-2 rounded-full"
                    style={{ backgroundColor: page.color }}
                    aria-hidden
                  />
                  <p className="font-inter-tight text-tagline-3 text-background-13/70">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {[
              ['Search intent', page.audience],
              ['How it works', page.workflow.join(' ')],
              ['Best fit', page.description],
            ].map(([title, text], index) => (
              <RevealAnimation key={title} delay={0.1 + index * 0.08}>
                <article className="border-stroke-3/12 bg-background-9 min-h-[300px] rounded-[20px] border p-6">
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                    0{index + 1}
                  </p>
                  <h2 className="font-manrope mt-8 text-[32px] leading-[1.05] font-medium text-background-13/90">
                    {title}
                  </h2>
                  <p className="font-inter-tight text-tagline-3 mt-6 text-background-13/64">
                    {text}
                  </p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-4 py-16 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="text-white lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="workflow" className="mb-5 border-white/20 bg-white" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 font-medium">
                  What users are trying to solve when they search for {page.title}.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 mt-6 text-white/58">
                  S3Panel keeps the recurring pieces of object storage work visible: connection
                  setup, daily file operations, security boundaries, and the tradeoffs against
                  broader file-transfer tools.
                </p>
              </RevealAnimation>
            </div>

            <div className="grid gap-4 lg:col-span-7">
              {page.proof.map((item, index) => (
                <RevealAnimation key={item.title} delay={0.12 + index * 0.08}>
                  <div className="rounded-[18px] border border-white/10 bg-white/8 p-6 text-white">
                    <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-white/45">
                      {item.title}
                    </p>
                    <p className="font-inter-tight text-tagline-2 mt-4 text-white/68">
                      {item.text}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComparisonSection page={page} />

      <section className="py-14 md:py-20">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="faq" className="mb-5" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  Questions before choosing S3Panel.
                </h2>
              </RevealAnimation>
            </div>

            <div className="space-y-4 lg:col-span-7">
              {page.faq.map((item, index) => (
                <RevealAnimation key={item.question} delay={0.12 + index * 0.08}>
                  <article className="border-stroke-3/12 rounded-[18px] border bg-white p-6">
                    <h3 className="font-manrope text-[24px] leading-[1.15] font-medium text-background-13/90">
                      {item.question}
                    </h3>
                    <p className="font-inter-tight text-tagline-3 mt-3 text-background-13/62">
                      {item.answer}
                    </p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>

          <RevealAnimation delay={0.4}>
            <div className="mt-12 rounded-[20px] bg-background-4 p-6 text-white md:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-white/45">
                    next step
                  </p>
                  <h2 className="font-manrope mt-4 text-[38px] leading-[1.05] font-medium">
                    Try S3Panel when object storage is the daily workspace, not a side protocol.
                  </h2>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start trial</LinkPrimary>
                  <LinkSecondary href="/downloads">Download apps</LinkSecondary>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {page.related.map((relatedKey) => {
              const related = seoIntentPages[relatedKey];
              return (
                <Link
                  key={related.key}
                  href={related.path}
                  className="border-stroke-3/12 rounded-[18px] border bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]"
                >
                  <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.2px] text-background-13/42">
                    related
                  </p>
                  <h3 className="font-manrope mt-5 text-[26px] leading-[1.05] font-medium text-background-13/90">
                    {related.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-3 mt-3 text-background-13/58">
                    {related.metaDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
