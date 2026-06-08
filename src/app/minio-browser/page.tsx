import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('minio-browser');

export default function MinioBrowserPage() {
  return <SeoIntentPage page={getSeoIntentPage('minio-browser')} />;
}
