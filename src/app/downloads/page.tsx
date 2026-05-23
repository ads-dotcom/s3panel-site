import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'S3Panel web, macOS, Windows, iOS, and Android availability.',
};

const platforms = [
  { name: 'Web App', status: 'Available now', href: 'https://app.s3panel.com', badge: 'WEB', icon: 'browser' },
  { name: 'macOS', status: 'App Store preparation', href: '#', badge: 'MAC', icon: 'mac' },
  { name: 'Windows', status: 'Planned', href: '#', badge: 'WIN', icon: 'windows' },
  { name: 'iOS', status: 'Planned', href: '#', badge: 'IOS', icon: 'ios' },
  { name: 'Android', status: 'Planned', href: '#', badge: 'AND', icon: 'android' },
];

function PlatformIcon({ icon }: { icon: string }) {
  const common = 'h-10 w-10';
  if (icon === 'browser') {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="6" y="8" width="28" height="23" rx="5" stroke="currentColor" strokeWidth="2.4" />
        <path d="M7 15h26" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="12" cy="11.5" r="1.3" fill="currentColor" />
        <circle cx="17" cy="11.5" r="1.3" fill="currentColor" />
      </svg>
    );
  }
  if (icon === 'mac') {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="8" y="7" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="2.4" />
        <path d="M16 33h8M20 27v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === 'windows') {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M8 11.5l10-1.4v9.8H8v-8.4ZM22 9.7l10-1.4v11.6H22V9.7ZM8 23h10v8.7L8 30.3V23ZM22 23h10v10.5l-10-1.4V23Z" fill="currentColor" />
      </svg>
    );
  }
  if (icon === 'ios') {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="13" y="5" width="14" height="30" rx="5" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="20" cy="31" r="1.4" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M13 17h14v12a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V17Z" stroke="currentColor" strokeWidth="2.4" />
      <path d="M15 14l-3-5M25 14l3-5M12 23H8M32 23h-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

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
                <span className="inline-flex size-14 items-center justify-center rounded-xl bg-white/12">
                  <PlatformIcon icon={platform.icon} />
                </span>
                <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[1.4px] opacity-60">
                  {platform.badge} / {platform.status}
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
