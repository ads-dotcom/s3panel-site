import { FooterData } from '../interface';

export const footerData: FooterData = {
  logo: {
    src: '/images/logo/logo-white.svg',
    alt: 'S3Panel',
    href: '/',
  },
  address: {
    label: 'Operator:',
    text: 'Hafsa GmbH\nFritz-Reuter-Str. 19\n21629 Neu Wulmstorf, Germany',
  },
  contact: {
    label: 'Contact:',
    phone: '+49 176 61660555',
    phoneHref: 'tel:+4917661660555',
    email: 'support@s3panel.com',
    emailHref: 'mailto:support@s3panel.com',
  },
  social: [],
  linkGroups: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Providers', href: '/providers' },
        { label: 'Fast Search', href: '/#search' },
        { label: 'Security', href: '/security' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Downloads', href: '/downloads' },
        { label: 'Compare', href: '/compare' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
        { label: 'Support', href: '/support' },
        { label: 'Web App', href: 'https://app.s3panel.com' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Cloudflare R2 Manager', href: '/cloudflare-r2-manager' },
        { label: 'S3 Browser for Mac', href: '/s3-browser-for-mac' },
        { label: 'S3 Client macOS', href: '/s3-client-macos' },
        { label: 'Wasabi S3 Client', href: '/wasabi-s3-client' },
        { label: 'MinIO Browser', href: '/minio-browser' },
        { label: 'Backblaze B2 S3 Client', href: '/backblaze-b2-s3-client' },
      ],
    },
    {
      title: 'Alternatives',
      links: [
        { label: 'Cyberduck Alternative', href: '/compare/cyberduck-alternative' },
        { label: 'Transmit Alternative', href: '/compare/transmit-alternative' },
        { label: 'CloudMounter Alternative', href: '/compare/cloudmounter-alternative' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Imprint', href: '/imprint' },
        { label: 'App Store Privacy', href: '/app-store/privacy' },
      ],
    },
  ],
  bottomBar: {
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Support', href: '/support' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
};
