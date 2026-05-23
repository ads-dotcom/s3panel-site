import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary, LinkSecondary } from '@/src/components/shared/ui/button';
import type { ReactNode } from 'react';

export function DocumentPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-background-7 pt-[140px] pb-20 md:pt-[190px] md:pb-28">
      <div className="main-container">
        <div className="mx-auto max-w-[980px]">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text={eyebrow} className="mb-5" />
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
              {title}
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-1 text-background-13/60 mt-5 max-w-[760px]">
              {description}
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="border-stroke-3/12 bg-background-9 mt-12 rounded-[20px] border p-6 md:p-10">
              <div className="prose-s3panel">{children}</div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkPrimary href="https://app.s3panel.com/sign-up">Start trial</LinkPrimary>
              <LinkSecondary href="/">Back home</LinkSecondary>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
