import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('s3-client-macos');

export default function S3ClientMacosPage() {
  return <SeoIntentPage page={getSeoIntentPage('s3-client-macos')} />;
}
