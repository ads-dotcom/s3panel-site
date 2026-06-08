import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('cloudflare-r2-manager');

export default function CloudflareR2ManagerPage() {
  return <SeoIntentPage page={getSeoIntentPage('cloudflare-r2-manager')} />;
}
