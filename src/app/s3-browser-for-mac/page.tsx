import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('s3-browser-for-mac');

export default function S3BrowserForMacPage() {
  return <SeoIntentPage page={getSeoIntentPage('s3-browser-for-mac')} />;
}
