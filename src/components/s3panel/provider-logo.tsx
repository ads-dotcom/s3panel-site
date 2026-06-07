import {
  siAkamai,
  siBackblaze,
  siCloudflare,
  siDigitalocean,
  siHetzner,
  siMinio,
  siScaleway,
  siWasabi,
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

const providerIcons: Record<string, SimpleIcon> = {
  'cloudflare-r2': siCloudflare,
  minio: siMinio,
  wasabi: siWasabi,
  'digitalocean-spaces': siDigitalocean,
  'backblaze-b2': siBackblaze,
  'hetzner-object-storage': siHetzner,
  'scaleway-object-storage': siScaleway,
  'akamai-object-storage': siAkamai,
};

type ProviderLogoProps = {
  slug: string;
  label: string;
  color: string;
  className?: string;
};

export function ProviderLogo({ slug, label, color, className = 'h-12 w-12' }: ProviderLogoProps) {
  const icon = providerIcons[slug];

  if (icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={`${className} fill-current`}
        style={{ color }}
        role="img"
        aria-label={`${label} logo`}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  if (slug === 'amazon-s3') {
    return (
      <svg className={className} viewBox="0 0 56 56" fill="none" role="img" aria-label="Amazon S3">
        <rect width="56" height="56" rx="14" fill="#FF9900" />
        <path
          d="M17 18.5c0-3.3 5-6 11-6s11 2.7 11 6v18.8c0 3.3-5 6-11 6s-11-2.7-11-6V18.5Z"
          fill="white"
          opacity=".22"
        />
        <path
          d="M17 18.5c0 3.3 5 6 11 6s11-2.7 11-6M17 28c0 3.3 5 6 11 6s11-2.7 11-6"
          stroke="white"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <text
          x="28"
          y="39"
          fill="white"
          fontFamily="Arial, sans-serif"
          fontSize="15"
          fontWeight="700"
          textAnchor="middle"
        >
          S3
        </text>
      </svg>
    );
  }

  return (
    <span
      className={`${className} flex items-center justify-center rounded-[14px] font-ibm-plex-mono text-[20px] font-semibold text-white`}
      style={{ backgroundColor: color }}
      aria-label={`${label} endpoint`}
      role="img"
    >
      {'{}'}
    </span>
  );
}
