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
        { label: 'Fast Search', href: '/#search' },
        { label: 'Security', href: '/security' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Downloads', href: '/downloads' },
        { label: 'Contact', href: '/contact' },
        { label: 'Support', href: '/support' },
        { label: 'Web App', href: 'https://app.s3panel.com' },
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
    ],
  },
};
