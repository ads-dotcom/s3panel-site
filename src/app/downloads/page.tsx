import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'S3Panel web, macOS, Windows, iOS, and Android availability.',
};

const platforms = [
  { name: 'Web App', status: 'Available now', href: 'https://app.s3panel.com', badge: 'WEB' },
  { name: 'macOS', status: 'App Store preparation', href: '#', badge: 'MAC' },
  { name: 'Windows', status: 'Planned', href: '#', badge: 'WIN' },
  { name: 'iOS', status: 'Planned', href: '#', badge: 'IOS' },
  { name: 'Android', status: 'Planned', href: '#', badge: 'AND' },
];

export default function DownloadsPage() {
  return (
    <section className="bg-background-7 pt-[140px] pb-20 md:pt-[190px] md:pb-28">
      <div className="main-container">
        <div className="mx-auto max-w-[980px] text-center">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="downloads" className="mb-5" />
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
              Use S3Panel from the web today. macOS is being prepared for App Store release.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto mt-5 max-w-[720px]">
              The web app is available now at app.s3panel.com. The native macOS app is prepared
              for App Store distribution; Windows, iOS, and Android are planned next.
            </p>
          </RevealAnimation>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {platforms.map((platform, index) => (
            <RevealAnimation key={platform.name} delay={0.1 + index * 0.1}>
              <a
                href={platform.href}
                className={`block min-h-[220px] rounded-[20px] p-6 transition-transform duration-500 hover:-translate-y-1 ${
                  index === 0 ? 'bg-background-4 text-white' : 'bg-background-9 text-background-13'
                }`}
              >
                <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-md bg-white/12 px-3 font-ibm-plex-mono text-tagline-4">
                  {platform.badge}
                </span>
                <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-60">
                  {platform.status}
                </p>
                <h2 className="font-manrope mt-16 text-[30px] leading-[1.05] font-medium">
                  {platform.name}
                </h2>
              </a>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
