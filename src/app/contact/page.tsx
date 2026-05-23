import { DocumentPage } from '@/src/components/s3panel/document-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact S3Panel.',
};

export default function ContactPage() {
  return (
    <DocumentPage
      eyebrow="contact"
      title="Contact S3Panel"
      description="S3Panel is operated by Hafsa GmbH. Contact us by email for product, billing, privacy, and storage connection questions."
    >
      <h2>Product Support</h2>
      <p>
        Email <a href="mailto:support@s3panel.com">support@s3panel.com</a>.
      </p>
      <h2>Company Contact</h2>
      <p>
        Hafsa GmbH
        <br />
        Email <a href="mailto:info@hafsa.de">info@hafsa.de</a>
      </p>
      <p>No phone number is published for S3Panel support. Please contact us by email.</p>
    </DocumentPage>
  );
}
