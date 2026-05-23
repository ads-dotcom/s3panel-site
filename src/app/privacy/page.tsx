import { DocumentPage } from '@/src/components/s3panel/document-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for S3Panel.',
};

export default function PrivacyPage() {
  return (
    <DocumentPage
      eyebrow="privacy"
      title="Privacy Policy"
      description="How S3Panel handles account data, connection metadata, storage credentials, and App Store purchases."
    >
      <p className="text-background-13/50">Effective date: May 23, 2026</p>
      <p>
        S3Panel is operated by Hafsa GmbH. This policy explains how S3Panel handles data
        for the S3Panel web service, macOS app, and related services.
      </p>
      <h2>Data We Process</h2>
      <p>
        We process account data such as email address, authentication status, subscription
        status, and support contact details. When you connect S3-compatible storage or
        Cloudflare R2, we process connection metadata such as provider type, endpoint,
        region, bucket names, object keys, object sizes, timestamps, folder statistics,
        and manifest/index records used for search and folder-size calculations.
      </p>
      <h2>Customer Storage Content</h2>
      <p>
        S3Panel is a management tool for storage accounts controlled by the customer. We do
        not host customer buckets and we do not intentionally copy or store customer object
        contents on S3Panel servers. Object contents remain in the customer storage
        provider unless a user explicitly downloads, uploads, copies, moves, zips, unzips,
        or otherwise operates on objects through the app.
      </p>
      <h2>Credentials And Security</h2>
      <p>
        User-provided S3/R2 credentials are used only to perform requested storage
        operations. Users should provide the minimum permissions required for their
        workflow and rotate credentials if they suspect exposure. The macOS app stores app
        sessions in the macOS Keychain where supported.
      </p>
      <h2>Payments</h2>
      <p>
        Mac App Store purchases and subscriptions are processed by Apple. S3Panel receives
        purchase status information from Apple or the app to unlock paid features. We do
        not receive full payment card details from Apple.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy questions, contact <a href="mailto:support@s3panel.com">support@s3panel.com</a>{' '}
        or Hafsa GmbH, Fritz-Reuter-Str. 19, 21629 Neu Wulmstorf, Germany.
      </p>
    </DocumentPage>
  );
}
