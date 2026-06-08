import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('cloudmounter-alternative');

export default function CloudMounterAlternativePage() {
  return <SeoIntentPage page={getSeoIntentPage('cloudmounter-alternative')} />;
}
