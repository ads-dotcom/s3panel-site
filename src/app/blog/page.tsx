import BlogShowcase from '@/src/components/blog/blog-showcase';
import type { BlogPost } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'S3Panel Guides for S3, R2, Presigned URLs, and Mac Workflows',
  description:
    'Solution guides for Cloudflare R2, S3 buckets, presigned URLs, large bucket search, metadata, MinIO, Wasabi, Backblaze B2, and macOS S3 workflows.',
  keywords: [
    'S3 guides',
    'Cloudflare R2 guide',
    'S3 presigned URL guide',
    'S3 bucket search',
    'S3 client macOS guide',
    'object storage tutorials',
  ],
  alternates: {
    canonical: '/blog/',
  },
  openGraph: {
    title: 'S3Panel Guides for S3 and Cloudflare R2',
    description:
      'Practical solution guides for managing S3-compatible and Cloudflare R2 buckets.',
    url: 'https://s3panel.com/blog/',
    siteName: 'S3Panel',
    type: 'website',
    images: [
      {
        url: '/images/s3panel/fast-search.png',
        width: 1200,
        height: 675,
        alt: 'S3Panel solution guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S3Panel Guides for S3 and Cloudflare R2',
    description:
      'Practical solution guides for S3 buckets, Cloudflare R2, temporary links, search, and Mac workflows.',
    images: ['/images/s3panel/fast-search.png'],
  },
};

export default function BlogPage() {
  const posts = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://s3panel.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: 'https://s3panel.com/blog/',
          },
        ],
      },
      {
        '@type': 'Blog',
        '@id': 'https://s3panel.com/blog/#blog',
        name: 'S3Panel Guides',
        url: 'https://s3panel.com/blog/',
        description:
          'Solution guides for S3-compatible storage, Cloudflare R2, presigned URLs, search, metadata, and Mac workflows.',
        publisher: {
          '@type': 'Organization',
          name: 'Hafsa GmbH',
          url: 'https://s3panel.com/',
        },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `https://s3panel.com/blog/${post.slug}/`,
          datePublished: post.publishDate,
          description: post.description,
          image: `https://s3panel.com${post.thumbnail}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogShowcase />
    </>
  );
}
