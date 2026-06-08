import { SeoIntentPage } from '@/src/components/seo/intent-page';
import { getSeoIntentMetadata, getSeoIntentPage } from '@/src/data/seo-intent';

export const metadata = getSeoIntentMetadata('transmit-alternative');

export default function TransmitAlternativePage() {
  return <SeoIntentPage page={getSeoIntentPage('transmit-alternative')} />;
}
