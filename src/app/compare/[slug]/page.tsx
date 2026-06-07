import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { competitorPages, getCompetitorPage } from '@/src/data/competitors';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type CompareRouteParams = Promise<{
  slug: string;
}>;

export function generateStaticParams() {
  return competitorPages.map((competitor) => ({ slug: competitor.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: CompareRouteParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const competitor = getCompetitorPage(slug);

  if (!competitor) {
    return {
      title: 'Comparison Not Found',
    };
  }

  return {
    title: competitor.metaTitle,
    description: competitor.metaDescription,
    keywords: [
      `S3Panel vs ${competitor.name}`,
      `${competitor.name} alternative`,
      'S3 browser comparison',
      'Cloudflare R2 browser',
      'S3-compatible storage manager',
    ],
    alternates: {
      canonical: `/compare/${competitor.slug}/`,
    },
    openGraph: {
      title: `${competitor.metaTitle} - S3Panel`,
      description: competitor.metaDescription,
      url: `https://s3panel.com/compare/${competitor.slug}/`,
      siteName: 'S3Panel',
      type: 'website',
      images: [
        {
          url: '/images/s3panel/fast-search.png',
          width: 1200,
          height: 675,
          alt: `${competitor.name} and S3Panel comparison`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${competitor.metaTitle} - S3Panel`,
      description: competitor.metaDescription,
      images: ['/images/s3panel/fast-search.png'],
    },
  };
}

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

export default async function CompareDetailPage({ params }: { params: CompareRouteParams }) {
  const { slug } = await params;
  const competitor = getCompetitorPage(slug);

  if (!competitor) {
    notFound();
  }

  const related = competitorPages.filter((item) => item.slug !== competitor.slug).slice(0, 3);

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
            name: 'Compare',
            item: 'https://s3panel.com/compare/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `S3Panel vs ${competitor.name}`,
            item: `https://s3panel.com/compare/${competitor.slug}/`,
          },
        ],
      },
      {
        '@type': 'WebPage',
        name: `S3Panel vs ${competitor.name}`,
        url: `https://s3panel.com/compare/${competitor.slug}/`,
        description: competitor.metaDescription,
        about: [
          {
            '@type': 'SoftwareApplication',
            name: 'S3Panel',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Web, macOS, iOS, iPadOS',
          },
          {
            '@type': 'SoftwareApplication',
            name: competitor.name,
          },
        ],
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
        <div className="absolute inset-x-0 top-0 h-[730px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-7">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="comparison" className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  {competitor.headline}{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    Which one fits your bucket workflow?
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[760px] text-white/60">
                  This page compares public positioning and practical use cases. It is not a claim
                  that {competitor.name} is bad; it explains where S3Panel is a better fit for
                  S3-compatible and Cloudflare R2 bucket management.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/compare">All comparisons</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-5">
                <div className="rounded-[20px] bg-white/10 p-3 ring-8 ring-white/8">
                  <div className="rounded-[16px] bg-white p-6">
                    <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-background-13/45">
                      public source reviewed
                    </p>
                    <h2 className="font-manrope mt-8 text-[38px] leading-[1.05] font-medium text-background-13/90">
                      {competitor.name}
                    </h2>
                    <p className="font-inter-tight text-tagline-2 mt-3 text-background-13/60">
                      {competitor.category}
                    </p>
                    <a
                      href={competitor.sourceUrl}
                      className="font-ibm-plex-mono text-tagline-4 mt-10 inline-flex rounded-full bg-background-8 px-4 py-2 uppercase tracking-[1.1px] text-background-13/60 transition-colors duration-500 hover:bg-background-14 hover:text-white"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Official source
                    </a>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <RevealAnimation delay={0.1}>
              <article className="border-stroke-3/12 bg-background-9 min-h-[500px] rounded-[20px] border p-6">
                <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                  where {competitor.name} fits
                </p>
                <h2 className="font-manrope mt-8 text-[34px] leading-[1.05] font-medium text-background-13/90">
                  Good reasons someone may choose {competitor.name}
                </h2>
                <div className="mt-8 space-y-4">
                  {competitor.bestFor.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-0.5 text-background-14">
                        <CheckIcon />
                      </span>
                      <p className="font-inter-tight text-tagline-3 text-background-13/64">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </RevealAnimation>

            <RevealAnimation delay={0.18}>
              <article className="min-h-[500px] rounded-[20px] bg-background-4 p-6 text-white">
                <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-white/45">
                  where S3Panel fits
                </p>
                <h2 className="font-manrope mt-8 text-[34px] leading-[1.05] font-medium">
                  Better fit when object storage workflows are the product focus
                </h2>
                <div className="mt-8 space-y-4">
                  {competitor.s3PanelFit.map((item) => (
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
        </div>
      </section>

      <section className="bg-background-8 py-14 md:py-20">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="decision notes" className="mb-5" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  The practical difference is workflow shape.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 mt-5 text-background-13/60">
                  If your day is mostly FTP/SFTP, mounted-drive access, or source-code inspection,
                  another tool may be a better fit. If the work is S3/R2 browsing, search, folder
                  stats, private sharing, and account support, S3Panel is designed around that
                  narrower problem.
                </p>
              </RevealAnimation>
            </div>

            <div className="space-y-4 lg:col-span-7">
              {competitor.differences.map((difference, index) => (
                <RevealAnimation key={difference} delay={0.12 + index * 0.08}>
                  <div className="rounded-[18px] bg-white p-6">
                    <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-background-13/45">
                      difference 0{index + 1}
                    </p>
                    <p className="font-inter-tight text-tagline-2 mt-4 text-background-13/68">
                      {difference}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="main-container">
          <div className="rounded-[20px] bg-background-4 p-6 text-white md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-white/45">
                  quick recommendation
                </p>
                <h2 className="font-manrope mt-4 text-[38px] leading-[1.05] font-medium">
                  Choose S3Panel when S3-compatible storage is the daily workspace, not a side
                  protocol.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                <LinkPrimary href="https://app.s3panel.com/sign-up">Try S3Panel</LinkPrimary>
                <LinkSecondary href="/pricing">Pricing</LinkSecondary>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/compare/${item.slug}`}
                className="border-stroke-3/12 rounded-[18px] border bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]"
              >
                <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.2px] text-background-13/42">
                  compare
                </p>
                <h3 className="font-manrope mt-5 text-[26px] leading-[1.05] font-medium text-background-13/90">
                  S3Panel vs {item.name}
                </h3>
                <p className="font-inter-tight text-tagline-3 mt-3 text-background-13/58">
                  {item.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
