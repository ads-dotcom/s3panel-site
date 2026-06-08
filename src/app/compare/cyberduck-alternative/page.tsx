import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('cyberduck-alternative');

export default function CyberduckAlternativePage() {
  return <SeoIntentPage page={getSeoIntentPage('cyberduck-alternative')} />;
}
