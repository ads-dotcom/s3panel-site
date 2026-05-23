import { DocumentPage } from '@/src/components/s3panel/document-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for S3Panel.',
};

export default function TermsPage() {
  return (
    <DocumentPage
      eyebrow="terms"
      title="Terms of Service"
      description="Terms governing use of S3Panel, a web and macOS service for managing S3-compatible object storage and Cloudflare R2 accounts."
    >
      <p className="text-background-13/50">Effective date: May 23, 2026</p>
      <h2>Customer Responsibility</h2>
      <p>
        Users are responsible for the storage accounts, buckets, credentials, access
        policies, files, and operations they manage through S3Panel. Use least-privilege
        credentials whenever possible, especially for production buckets.
      </p>
      <h2>Storage Operations</h2>
      <p>
        S3Panel can list, search, upload, download, copy, move, zip, unzip, rename, and
        delete objects when the connected credentials permit those actions. Users are
        responsible for verifying permissions and backups before running destructive or
        bulk operations.
      </p>
      <h2>Subscriptions And Purchases</h2>
      <p>
        Paid features may be offered through the Mac App Store or direct web billing. App
        Store purchases are governed by Apple's terms. Subscription access may renew
        automatically until cancelled through the relevant billing provider.
      </p>
      <h2>Availability</h2>
      <p>
        S3Panel is provided on an as-available basis. We work to maintain reliable service,
        but we do not guarantee uninterrupted availability or compatibility with every
        S3-compatible provider configuration.
      </p>
      <h2>Contact</h2>
      <p>
        For support, contact <a href="mailto:support@s3panel.com">support@s3panel.com</a>. The
        operator is Hafsa GmbH, Fritz-Reuter-Str. 19, 21629 Neu Wulmstorf, Germany.
      </p>
    </DocumentPage>
  );
}
