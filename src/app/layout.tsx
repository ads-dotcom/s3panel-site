import { ReactNode } from 'react';
import type { Metadata } from 'next';
import SmoothScrollProvider from '../components/animation/smooth-scroll';
import Footer from '../components/shared/layout/footer/footer';
import Navbar from '../components/shared/layout/navbar/Navbar';
import { fontVariables } from '../utils/font';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://s3panel.com'),
  title: {
    default: 'S3Panel - Fast S3 and R2 bucket manager',
    template: '%s - S3Panel',
  },
  description:
    'S3Panel is a web and macOS workspace for browsing, searching, and safely managing large S3-compatible and Cloudflare R2 buckets.',
  openGraph: {
    title: 'S3Panel',
    description:
      'Browse, search, and manage huge S3 and Cloudflare R2 buckets without storing customer files on S3Panel.',
    url: 'https://s3panel.com',
    siteName: 'S3Panel',
    type: 'website',
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
