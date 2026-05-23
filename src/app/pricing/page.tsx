import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkSecondary } from '@/src/components/shared/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'S3Panel Pro pricing for web and app access.',
};

const plans = [
  ['Monthly', 'EUR 4.99', '3-day trial, cancel anytime.'],
  ['Yearly', 'EUR 49.99', 'Around 20% lower than monthly billing.'],
  ['Lifetime', 'EUR 99.99', 'One-time access for one account.'],
] as const;

const features = [
  'Unlimited S3-compatible connections',
  'Cloudflare R2, Hetzner, MinIO, Wasabi, and custom endpoints',
  'Manifest-backed file search',
  'Folder object counts and total sizes',
  'Upload, download, copy, move, rename, zip, and unzip operations',
  'Presigned links and secure downloads',
  'Admin users, roles, subscription, and audit event screens',
];

export default function PricingPage() {
  return (
    <section className="bg-background-7 pt-[140px] pb-20 md:pt-[190px] md:pb-28">
      <div className="main-container">
        <div className="mx-auto max-w-[980px] text-center">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="pricing" className="mb-5" />
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
              Simple S3Panel Pro pricing.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto mt-5 max-w-[720px]">
              Start with a 3-day demo. Use S3Panel from the web today, with native apps prepared
              for release.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="bg-background-8 mt-14 rounded-[20px] p-6 md:p-10 lg:p-14">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {plans.map(([name, price, text], index) => (
                <article
                  key={name}
                  className={`rounded-lg p-7 ${
                    index === 1 ? 'bg-background-4 text-white' : 'bg-white text-background-13'
                  }`}
                >
                  <p className="font-inter-tight text-tagline-2 opacity-70">{name}</p>
                  <h2 className="font-instrument-serif mt-8 text-[54px] leading-none font-normal">
                    {price}
                  </h2>
                  <p className="font-inter-tight text-tagline-2 mt-4 opacity-70">{text}</p>
                  <div className="mt-8">
                    <LinkSecondary href="https://app.s3panel.com/sign-up">Start trial</LinkSecondary>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-lg bg-white px-5 py-4 text-background-13/70">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
