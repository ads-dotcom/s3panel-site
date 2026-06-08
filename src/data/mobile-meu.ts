import { MobileMenuData } from '../interface';

export const mobileMenuData: MobileMenuData[] = [
  {
    id: 'product',
    title: 'Product',
    submenu: [
      { id: 'features', label: 'Features', href: '/features' },
      { id: 'providers', label: 'Providers', href: '/providers' },
      { id: 'search', label: 'Fast Search', href: '/#search' },
      { id: 'security', label: 'Security', href: '/security' },
      { id: 'compare', label: 'Compare', href: '/compare' },
      { id: 'changelog', label: 'Changelog', href: '/changelog' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
    ],
  },
  {
    id: 'platforms',
    title: 'Platforms',
    submenu: [
      { id: 'web', label: 'Web App', href: 'https://app.s3panel.com' },
      { id: 'macos', label: 'macOS', href: '/downloads' },
      { id: 'windows', label: 'Windows', href: '/downloads' },
      { id: 'mobile', label: 'iOS and Android', href: '/downloads' },
    ],
  },
  {
    id: 'solutions',
    title: 'Solutions',
    submenu: [
      { id: 'cloudflare-r2-manager', label: 'Cloudflare R2 Manager', href: '/cloudflare-r2-manager' },
      { id: 's3-browser-for-mac', label: 'S3 Browser for Mac', href: '/s3-browser-for-mac' },
      { id: 's3-client-macos', label: 'S3 Client macOS', href: '/s3-client-macos' },
      { id: 'wasabi-s3-client', label: 'Wasabi S3 Client', href: '/wasabi-s3-client' },
      { id: 'minio-browser', label: 'MinIO Browser', href: '/minio-browser' },
      { id: 'backblaze-b2-s3-client', label: 'Backblaze B2 S3 Client', href: '/backblaze-b2-s3-client' },
    ],
  },
  {
    id: 'alternatives',
    title: 'Alternatives',
    submenu: [
      { id: 'cyberduck-alternative', label: 'Cyberduck Alternative', href: '/compare/cyberduck-alternative' },
      { id: 'transmit-alternative', label: 'Transmit Alternative', href: '/compare/transmit-alternative' },
      { id: 'cloudmounter-alternative', label: 'CloudMounter Alternative', href: '/compare/cloudmounter-alternative' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about', label: 'About Us', href: '/about' },
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
      { id: 'downloads', label: 'Downloads', href: '/downloads' },
      { id: 'changelog', label: 'Changelog', href: '/changelog' },
      { id: 'support', label: 'Support', href: '/support' },
      { id: 'contact', label: 'Contact', href: '/contact' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    submenu: [
      { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
      { id: 'terms', label: 'Terms of Service', href: '/terms' },
      { id: 'imprint', label: 'Imprint', href: '/imprint' },
      { id: 'login', label: 'Login', href: 'https://app.s3panel.com/sign-in' },
    ],
  },
];
