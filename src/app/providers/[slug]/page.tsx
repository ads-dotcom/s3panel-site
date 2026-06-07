import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ProviderLogo } from '@/src/components/s3panel/provider-logo';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import { getProviderPage, providerPages } from '@/src/data/providers';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ProviderRouteParams = Promise<{
  slug: string;
}>;

export function generateStaticParams() {
  return providerPages.map((provider) => ({ slug: provider.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ProviderRouteParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderPage(slug);

  if (!provider) {
    return {
      title: 'Provider Not Found',
    };
  }

  return {
    title: provider.metaTitle,
    description: provider.metaDescription,
    keywords: provider.keywords,
    alternates: {
      canonical: `/providers/${provider.slug}/`,
    },
    openGraph: {
      title: `${provider.metaTitle} - S3Panel`,
      description: provider.metaDescription,
      url: `https://s3panel.com/providers/${provider.slug}/`,
      siteName: 'S3Panel',
      type: 'website',
      images: [
        {
          url: '/images/s3panel/explorer.png',
          width: 1200,
          height: 675,
          alt: `${provider.name} in S3Panel`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${provider.metaTitle} - S3Panel`,
      description: provider.metaDescription,
      images: ['/images/s3panel/explorer.png'],
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

export default async function ProviderPage({ params }: { params: ProviderRouteParams }) {
  const { slug } = await params;
  const provider = getProviderPage(slug);

  if (!provider) {
    notFound();
  }

  const relatedProviders = providerPages
    .filter((item) => item.slug !== provider.slug)
    .slice(0, 3);

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
            name: 'Providers',
            item: 'https://s3panel.com/providers/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: provider.name,
            item: `https://s3panel.com/providers/${provider.slug}/`,
          },
        ],
      },
      {
        '@type': 'WebPage',
        name: `${provider.name} with S3Panel`,
        url: `https://s3panel.com/providers/${provider.slug}/`,
        description: provider.metaDescription,
        isPartOf: {
          '@id': 'https://s3panel.com/#website',
        },
        mainEntity: {
          '@type': 'SoftwareApplication',
          name: 'S3Panel',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web, macOS, iOS, iPadOS',
          description: `S3Panel helps teams manage ${provider.name} buckets with object browsing, search, folder stats, secure sharing, and safe file operations.`,
          offers: {
            '@type': 'Offer',
            price: '4.99',
            priceCurrency: 'EUR',
            url: 'https://s3panel.com/pricing/',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: provider.faq.map((item) => ({
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
        <div className="absolute inset-x-0 top-0 h-[720px] bg-background-4" aria-hidden />
        <div className="main-container relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="text-white lg:col-span-7">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text={provider.label} className="mb-5 border-white/12 bg-white/8" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                  {provider.headline}{' '}
                  <span className="font-instrument-serif text-white/50 italic">
                    Search, inspect, and operate from one place.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-1 mt-6 max-w-[760px] text-white/60">
                  {provider.description} This guide explains setup, daily workflows, and the
                  security boundary for teams using {provider.name} with S3Panel.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkPrimary href="https://app.s3panel.com/sign-up">Start 3-day trial</LinkPrimary>
                  <LinkSecondary href="/providers">All providers</LinkSecondary>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-5">
                <div className="rounded-[20px] bg-white/10 p-3 ring-8 ring-white/8">
                  <div className="rounded-[16px] bg-white p-6">
                    <div className="flex items-start justify-between gap-5">
                      <span className="flex size-20 items-center justify-center rounded-[22px] bg-background-8">
                        <ProviderLogo
                          slug={provider.slug}
                          label={provider.name}
                          color={provider.color}
                          className="h-14 w-14"
                        />
                      </span>
                      <span className="rounded-full bg-background-8 px-3 py-1 font-ibm-plex-mono text-[10px] uppercase tracking-[1px] text-background-13/50">
                        {provider.product}
                      </span>
                    </div>
                    <h2 className="font-manrope mt-12 text-[38px] leading-[1.05] font-medium text-background-13/90">
                      {provider.name}
                    </h2>
                    <p className="font-inter-tight text-tagline-3 mt-4 text-background-13/62">
                      S3Panel uses the provider credentials, endpoints, and bucket permissions you
                      configure. Object contents remain with {provider.name}.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {['Browse', 'Search', 'Share', 'Operate'].map((item) => (
                        <div key={item} className="rounded-lg bg-background-8 px-4 py-4">
                          <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.2px] text-background-13/45">
                            {item}
                          </p>
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
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {[
              ['Connection setup', provider.setup],
              ['Daily workflows', provider.workflows],
              ['Security boundary', provider.security],
            ].map(([title, items], index) => (
              <RevealAnimation key={title as string} delay={0.1 + index * 0.08}>
                <article className="border-stroke-3/12 bg-background-9 min-h-[420px] rounded-[20px] border p-6">
                  <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                    0{index + 1}
                  </p>
                  <h2 className="font-manrope mt-8 text-[32px] leading-[1.05] font-medium text-background-13/90">
                    {title as string}
                  </h2>
                  <div className="mt-8 space-y-4">
                    {(items as string[]).map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="text-background-14 mt-0.5">
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-4 py-16 md:py-24">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="text-white lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="why it matters" className="mb-5 border-white/20 bg-white" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 font-medium">
                  Provider consoles are powerful, but object work often needs a smaller surface.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 mt-6 text-white/58">
                  S3Panel is designed for the repeatable parts of {provider.name} work: finding
                  files, checking folder growth, sharing a private object, and acting on selected
                  objects without changing the whole storage architecture.
                </p>
              </RevealAnimation>
            </div>

            <div className="grid gap-4 lg:col-span-7">
              {[
                ['Keep storage ownership clear', `Original files stay in ${provider.name}. S3Panel is the control surface for browse, search, and selected operations.`],
                ['Make large buckets easier to inspect', 'Manifest-backed search and folder stats help teams avoid blind paging through provider lists.'],
                ['Reduce public-access shortcuts', 'Temporary links let teams share selected files without making buckets or prefixes public by default.'],
              ].map(([title, text], index) => (
                <RevealAnimation key={title} delay={0.12 + index * 0.08}>
                  <div className="rounded-[18px] border border-white/10 bg-white/8 p-6 text-white">
                    <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] text-white/45">
                      {title}
                    </p>
                    <p className="font-inter-tight text-tagline-2 mt-4 text-white/68">{text}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="faq" className="mb-5" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 font-medium">
                  {provider.name} questions, answered clearly.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="font-inter-tight text-tagline-2 mt-5 text-background-13/60">
                  These answers keep the provider page useful for buyers and search engines without
                  hiding the operational limits of S3Panel.
                </p>
              </RevealAnimation>
            </div>

            <div className="space-y-4 lg:col-span-7">
              {provider.faq.map((item, index) => (
                <RevealAnimation key={item.question} delay={0.12 + index * 0.08}>
                  <article className="border-stroke-3/12 rounded-[18px] border bg-white p-6">
                    <h3 className="font-manrope text-[24px] leading-[1.1] font-medium text-background-13/90">
                      {item.question}
                    </h3>
                    <p className="font-inter-tight text-tagline-2 mt-4 text-background-13/62">
                      {item.answer}
                    </p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-26">
        <div className="main-container">
          <div className="rounded-[20px] bg-background-8 p-6 md:p-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-ibm-plex-mono text-tagline-4 text-background-13/45 uppercase tracking-[1.4px]">
                  related providers
                </p>
                <h2 className="font-manrope mt-4 text-[34px] leading-[1.05] font-medium text-background-13/90">
                  More S3-compatible guides
                </h2>
              </div>
              <LinkSecondary href="/providers" className="shrink-0">
                View all providers
              </LinkSecondary>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {relatedProviders.map((related) => (
                <Link
                  key={related.slug}
                  href={`/providers/${related.slug}`}
                  className="rounded-[18px] bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_18px_55px_rgba(13,13,18,0.08)]"
                >
                  <span className="flex size-14 items-center justify-center rounded-[16px] bg-background-8">
                    <ProviderLogo
                      slug={related.slug}
                      label={related.name}
                      color={related.color}
                      className="h-10 w-10"
                    />
                  </span>
                  <h3 className="font-manrope mt-8 text-[26px] leading-[1.05] font-medium text-background-13/90">
                    {related.name}
                  </h3>
                  <p className="font-inter-tight text-tagline-3 mt-3 text-background-13/58">
                    {related.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
