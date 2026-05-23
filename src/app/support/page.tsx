import { DocumentPage } from '@/src/components/s3panel/document-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Support contact for S3Panel.',
};

export default function SupportPage() {
  return (
    <DocumentPage
      eyebrow="support"
      title="Support"
      description="Help for S3Panel accounts, App Store purchases, storage connections, permissions, and file operations."
    >
      <h2>Email Support</h2>
      <p>
        Contact <a href="mailto:support@s3panel.com">support@s3panel.com</a> for product
        support, billing questions, App Store review, storage connection help, and account
        access.
      </p>
      <h2>Security Note</h2>
      <p>
        Please do not send S3 secret keys, API tokens, or bucket credentials by email. If
        credentials may have been exposed, rotate them in your storage provider dashboard.
      </p>
      <h2>Demo Account For Review</h2>
      <p>
        App Store reviewers can use the review credentials entered in App Store Connect to
        verify sign-in, billing, and bucket management flows.
      </p>
    </DocumentPage>
  );
}
