import { DocumentPage } from '@/src/components/s3panel/document-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Company information for S3Panel.',
};

export default function ImprintPage() {
  return (
    <DocumentPage
      eyebrow="imprint"
      title="Imprint"
      description="Company information for S3Panel."
    >
      <h2>Operator</h2>
      <p>
        Hafsa GmbH
        <br />
        Email <a href="mailto:info@hafsa.de">info@hafsa.de</a>
      </p>
      <h2>Support</h2>
      <p>
        For product support, account questions, or privacy requests, email{' '}
        <a href="mailto:support@s3panel.com">support@s3panel.com</a>.
      </p>
    </DocumentPage>
  );
}
