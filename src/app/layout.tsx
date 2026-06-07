import { ReactNode } from 'react';
import type { Metadata } from 'next';
import SmoothScrollProvider from '../components/animation/smooth-scroll';
import Footer from '../components/shared/layout/footer/footer';
import Navbar from '../components/shared/layout/navbar/Navbar';
import { fontVariables } from '../utils/font';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://s3panel.com'),
  applicationName: 'S3Panel',
  title: {
    default: 'S3Panel - Fast S3 and R2 bucket manager',
    template: '%s - S3Panel',
  },
  description:
    'S3Panel is a web, macOS, iPhone, and iPad workspace for browsing, searching, and safely managing large S3-compatible and Cloudflare R2 buckets.',
  keywords: [
    'S3Panel',
    'S3 browser',
    'S3 bucket manager',
    'Cloudflare R2 browser',
    'S3-compatible storage manager',
    'MinIO browser',
    'Wasabi bucket manager',
    'S3 object search',
  ],
  authors: [{ name: 'Hafsa GmbH', url: 'https://s3panel.com/about/' }],
  creator: 'Hafsa GmbH',
  publisher: 'Hafsa GmbH',
  category: 'Developer Tools',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'S3Panel',
    description:
      'Browse, search, and manage huge S3 and Cloudflare R2 buckets without storing customer files on S3Panel.',
    url: 'https://s3panel.com',
    siteName: 'S3Panel',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/explorer.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel object storage workspace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel - Fast S3 and R2 bucket manager',
    description:
      'Browse, search, share, and safely manage S3-compatible and Cloudflare R2 buckets from web, macOS, iPhone, and iPad.',
    images: ['/images/s3panel/explorer.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/images/s3panel/app-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          <main className="bg-background-7">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
