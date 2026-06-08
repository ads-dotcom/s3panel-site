import BlogDetailsContent from '@/src/components/blog/blog-details-content';
import RelatedBlogs from '@/src/components/blog/related-blogs';
import type { BlogPost } from '@/src/interface';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type BlogRouteParams = Promise<{
  slug: string;
}>;

const blogFolder = 'src/data/blog';

function getPosts() {
  return getMarkDownData<BlogPost>(blogFolder, true, 'publishDate');
}

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: BlogRouteParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find((item) => item.slug === slug);

  if (!post) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: `${post.title} - S3Panel`,
      description: post.description,
      url: `https://s3panel.com/blog/${post.slug}/`,
      siteName: 'S3Panel',
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [
        {
          url: post.thumbnail,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} - S3Panel`,
      description: post.description,
      images: [post.thumbnail],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: BlogRouteParams }) {
  const { slug } = await params;
  const posts = getPosts();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const blog = getMarkDownContent(blogFolder, slug);
  const heroImages = (post.heroImages?.length ? post.heroImages : [post.thumbnail]).map(
    (image) => `https://s3panel.com${image}`,
  );

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
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://s3panel.com/blog/${post.slug}/`,
          },
        ],
      },
      {
        '@type': 'TechArticle',
        headline: post.title,
        description: post.description,
        image: heroImages,
        datePublished: post.publishDate,
        dateModified: post.publishDate,
        author: {
          '@type': 'Organization',
          name: 'S3Panel Team',
          url: 'https://s3panel.com/about/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Hafsa GmbH',
          logo: {
            '@type': 'ImageObject',
            url: 'https://s3panel.com/images/s3panel/app-icon.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://s3panel.com/blog/${post.slug}/`,
        },
        about: post.tags,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailsContent blog={blog} />
      <RelatedBlogs posts={posts} currentSlug={slug} relatedSlugs={post.related} />
    </>
  );
}
