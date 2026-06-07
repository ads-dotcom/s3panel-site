export const featurePillars = [
  {
    id: 'object-explorer',
    number: '01',
    label: 'Explorer',
    title: 'Object explorer for large buckets',
    summary:
      'Browse buckets, prefixes, folders, and objects in a workspace made for S3-compatible storage instead of a generic file picker.',
    detail:
      'S3Panel separates provider connections, bucket selection, folder navigation, and object actions so teams can move through large storage accounts without losing context. It keeps bucket-level navigation clear while making common file operations available where they are needed.',
    image: '/images/s3panel/explorer.png',
    imageAlt: 'S3Panel object explorer showing buckets, folders, and files',
    highlights: [
      'Connection and bucket switching',
      'Prefix and folder navigation',
      'Object metadata inspection',
      'Upload, download, rename, copy, move, and delete actions',
    ],
    workflow: [
      'Connect AWS S3, Cloudflare R2, MinIO, Wasabi, Hetzner, or a custom endpoint.',
      'Choose the bucket and prefix you want to work inside.',
      'Inspect object names, sizes, timestamps, content type, and storage metadata before acting.',
    ],
  },
  {
    id: 'manifest-search',
    number: '02',
    label: 'Search',
    title: 'Manifest-backed search and folder stats',
    summary:
      'Create metadata manifests so repeated name, key, size, timestamp, and folder-total searches feel fast even in large buckets.',
    detail:
      'Object storage does not provide real folders or instant folder totals. S3Panel builds manifest records from object metadata so teams can search object names and understand folder sizes without manually crawling the same bucket again and again.',
    image: '/images/s3panel/fast-search.png',
    imageAlt: 'S3Panel fast object search interface',
    highlights: [
      'Fast object name and key search',
      'Folder object counts and total bytes',
      'Timestamp and size visibility',
      'Optional live content search for selected files',
    ],
    workflow: [
      'Index metadata for the bucket or prefix that matters.',
      'Search object keys and names without waiting for a full provider console refresh.',
      'Use folder counts and byte totals to decide what to archive, move, download, or clean up.',
    ],
  },
  {
    id: 'safe-operations',
    number: '03',
    label: 'Operations',
    title: 'Safe file operations with clear feedback',
    summary:
      'Run everyday storage actions with visible task states, permission-aware behavior, and fewer destructive surprises.',
    detail:
      'S3Panel is built for repeated operational work: upload, download, copy, move, rename, duplicate, zip, unzip, and delete flows. Actions surface progress and errors clearly, and read-only credentials remain useful for browsing and search without pretending write operations are available.',
    image: '/images/s3panel/folder-stats.png',
    imageAlt: 'S3Panel folder statistics and object operations view',
    highlights: [
      'Copy, move, duplicate, rename, and delete flows',
      'ZIP download and archive workflows',
      'Destination bucket and folder picker',
      'Operation progress and error states',
    ],
    workflow: [
      'Select one object, many objects, or a folder prefix.',
      'Choose a destination bucket and folder when the operation needs one.',
      'Review task feedback and permission errors without leaving the workspace.',
    ],
  },
  {
    id: 'secure-sharing',
    number: '04',
    label: 'Sharing',
    title: 'Private buckets, temporary links',
    summary:
      'Create, copy, review, and revoke presigned links while keeping the original bucket private.',
    detail:
      'S3Panel helps teams share selected files through temporary presigned URLs instead of changing bucket-wide access. The share-link manager keeps created links visible so they can be copied, checked, and revoked when they are no longer needed.',
    image: '/images/s3panel/secure-download.png',
    imageAlt: 'S3Panel secure download and presigned link flow',
    highlights: [
      'Temporary presigned downloads',
      'Share link manager',
      'Private bucket-first workflow',
      'Revocation and audit visibility',
    ],
    workflow: [
      'Pick the object that should be shared.',
      'Create a temporary link without making the bucket public.',
      'Review active links and revoke access when the share is finished.',
    ],
  },
  {
    id: 'provider-coverage',
    number: '05',
    label: 'Providers',
    title: 'S3-compatible providers in one panel',
    summary:
      'Use AWS S3, Cloudflare R2, Hetzner, MinIO, Wasabi, Backblaze B2, DigitalOcean Spaces, and custom endpoints.',
    detail:
      'Many teams operate across more than one S3-compatible provider. S3Panel keeps provider-specific connection details in one interface while keeping object work consistent across buckets and endpoints.',
    image: '/images/s3panel/explorer.png',
    imageAlt: 'S3Panel explorer connected to S3-compatible storage',
    highlights: [
      'Cloudflare R2 and AWS S3',
      'Custom endpoint and region configuration',
      'Provider-specific credential storage',
      'Consistent bucket operations across endpoints',
    ],
    workflow: [
      'Add each provider with endpoint, region, and credentials.',
      'Use least-privilege keys per environment or customer.',
      'Switch providers without switching tools or browser consoles.',
    ],
  },
  {
    id: 'security-admin',
    number: '06',
    label: 'Security',
    title: 'Security, audit, and account control',
    summary:
      'Keep customer objects in their own storage provider while S3Panel manages account data, encrypted connection metadata, audit events, and billing state.',
    detail:
      'S3Panel is a control surface, not a storage host. Customer object contents remain in the provider account. The product focuses on least-privilege credentials, permission-aware operations, audit records, account deletion, and App Store or web billing access.',
    image: '/images/s3panel/billing.png',
    imageAlt: 'S3Panel billing and account access screen',
    highlights: [
      'Customer bucket contents stay with the provider',
      'Encrypted connection metadata',
      'Audit events for storage actions',
      'Account deletion and billing controls',
    ],
    workflow: [
      'Create dedicated storage credentials with only the permissions S3Panel needs.',
      'Use audit records to understand what changed and when.',
      'Delete S3Panel account data without deleting customer-owned bucket objects.',
    ],
  },
] as const;

export const homeFeatureHighlights = featurePillars.map(({ id, number, label, title, summary }) => ({
  id,
  number,
  label,
  title,
  summary,
}));
