import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('wasabi-s3-client');

export default function WasabiS3ClientPage() {
  return <SeoIntentPage page={getSeoIntentPage('wasabi-s3-client')} />;
}
