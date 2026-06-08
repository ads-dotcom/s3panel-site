import { DocumentPage } from '@/src/components/s3panel/document-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'App Store Privacy',
  description: 'App Store privacy information for S3Panel.',
};

export default function AppStorePrivacyPage() {
  return (
    <DocumentPage
      eyebrow="app store privacy"
      title="App Store Privacy"
      description="Privacy details for the S3Panel macOS app distributed through the Mac App Store."
    >
      <p className="text-background-13/50">Effective date: May 23, 2026</p>
      <h2>Account And Purchase Data</h2>
      <p>
        The macOS app uses your S3Panel account email, subscription status, and Apple
        purchase status to unlock paid features and synchronize access with the web
        service. Apple processes App Store payments and does not share full payment card
        details with S3Panel.
      </p>
      <h2>Storage Connections</h2>
      <p>
        When you connect S3-compatible storage or Cloudflare R2, the app sends requested
        operations to S3Panel APIs so it can list buckets, calculate folder statistics,
        create manifest records, search object keys, and perform file operations that you
        explicitly start.
      </p>
      <h2>Customer Files</h2>
      <p>
        S3Panel does not use customer bucket contents for advertising and does not store
        full customer object contents as a hosted file library. Files remain in the
        storage provider you connect unless you upload, download, copy, move, zip, unzip,
        or share them through the app.
      </p>
      <h2>Trust And Security</h2>
      <p>
        The macOS app stores the native S3Panel session token in macOS Keychain where
        supported. Saved S3/R2 connection secrets are encrypted in S3Panel backend
        connection records and are not returned to the browser after save. Manifest records
        are used for object search and folder statistics, not for hosting customer files.
        Learn more in the <a href="/security/">S3Panel Security and Trust Center</a>.
      </p>
      <h2>Contact</h2>
      <p>
        Privacy requests can be sent to{' '}
        <a href="mailto:support@s3panel.com">support@s3panel.com</a>. Operator: Hafsa
        GmbH, Fritz-Reuter-Str. 19, 21629 Neu Wulmstorf, Germany.
      </p>
    </DocumentPage>
  );
}
