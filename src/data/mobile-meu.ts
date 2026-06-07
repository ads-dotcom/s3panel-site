import { MobileMenuData } from '../interface';

export const mobileMenuData: MobileMenuData[] = [
  {
    id: 'product',
    title: 'Product',
    submenu: [
      { id: 'features', label: 'Features', href: '/features' },
      { id: 'search', label: 'Fast Search', href: '/#search' },
      { id: 'security', label: 'Security', href: '/security' },
      { id: 'integrations', label: 'Integrations', href: '/#integrations' },
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
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
      { id: 'downloads', label: 'Downloads', href: '/downloads' },
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
