import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('backblaze-b2-s3-client');

export default function BackblazeB2S3ClientPage() {
  return <SeoIntentPage page={getSeoIntentPage('backblaze-b2-s3-client')} />;
}
