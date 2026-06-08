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
  {
    id: 'bucket-admin',
    number: '07',
    label: 'Bucket admin',
    title: 'Bucket policy, lifecycle, website, encryption, ACL, and versioning controls',
    summary:
      'Configure advanced S3 bucket settings from the same workspace used for object browsing and search.',
    detail:
      'S3Panel adds dedicated bucket administration screens for teams that need more than upload and download. Where the connected provider supports the API, users can review or update bucket policy JSON, lifecycle expiration rules, static website hosting, default server-side encryption, ACL presets, and bucket versioning without leaving the S3/R2 workflow.',
    image: '/images/s3panel/billing.png',
    imageAlt: 'S3Panel bucket administration controls for policy, lifecycle, website, encryption, ACL, and versioning',
    highlights: [
      'Bucket policy JSON editor',
      'Lifecycle expiration and multipart cleanup rules',
      'Static website hosting configuration',
      'Default encryption, ACL, and versioning controls',
    ],
    workflow: [
      'Choose the connection and bucket that needs administration.',
      'Open Bucket Admin and review provider-supported settings in one dialog.',
      'Save policy, lifecycle, website, encryption, ACL, or versioning updates with permission-aware feedback.',
    ],
  },
  {
    id: 'transfer-manager',
    number: '08',
    label: 'Transfers',
    title: 'Transfer Manager with scheduling, retry, pause, resume, and multipart options',
    summary:
      'Track uploads, downloads, archives, share links, and metadata tasks with progress, history, retry context, scheduling, bandwidth limits, and pause/resume controls.',
    detail:
      'Large object storage work needs more feedback than a spinning button. S3Panel groups transfer and operation activity into a dedicated task center, and advanced uploads can use automatic or multipart mode, part-size tuning, retry limits, scheduled starts, bandwidth limits, server-side encryption, and SHA-256 checksum options.',
    image: '/images/s3panel/folder-stats.png',
    imageAlt: 'S3Panel transfer manager and storage operation history',
    highlights: [
      'Upload and download task states with pause/resume',
      'Multipart upload, retry limit, and scheduled start options',
      'Bandwidth limit, server-side encryption, and checksum settings',
      'ZIP, share-link, and metadata operation history',
      'Error visibility and retry context for failed storage actions',
    ],
    workflow: [
      'Start an upload, download, ZIP, share-link, or metadata action.',
      'Open the task center to watch progress and review recent activity.',
      'Clear completed tasks when the operation queue is no longer needed.',
    ],
  },
  {
    id: 'quick-upload-links',
    number: '09',
    label: 'Quick links',
    title: 'Quick Upload and Get Link from the app or Mac menu bar',
    summary:
      'Upload a file and create a temporary share link in the same flow, including a native macOS menu bar Quick Upload entry.',
    detail:
      'For support teams, agencies, and operators, sharing one file quickly is often the whole job. S3Panel connects upload and presigned-link creation so a user can add an object to the right bucket and copy a temporary link without turning the bucket public. On macOS, the menu bar Quick Upload window keeps that workflow close even when the main window is not in front.',
    image: '/images/s3panel/secure-download.png',
    imageAlt: 'S3Panel quick upload and temporary share link workflow',
    highlights: [
      'Upload with optional share-link creation',
      'macOS menu bar Quick Upload window',
      'Temporary presigned URL generation',
      'Private bucket-first sharing',
      'Share history and revoke controls',
    ],
    workflow: [
      'Choose a bucket, folder, and local file.',
      'Enable link creation when the uploaded object needs to be shared.',
      'Copy the generated temporary URL and revoke it later if needed.',
    ],
  },
  {
    id: 'file-preview',
    number: '10',
    label: 'Preview',
    title: 'File Preview for common object types',
    summary:
      'Open selected images, documents, text files, and supported media from the storage workspace before downloading or sharing.',
    detail:
      'S3Panel keeps preview close to object operations so users can confirm they have the right file before they download, rename, copy, or share it. Preview support is available across the web workspace and native Apple entry points where the file type can be opened safely.',
    image: '/images/s3panel/explorer.png',
    imageAlt: 'S3Panel file preview from the object explorer',
    highlights: [
      'Preview before download',
      'Image, document, text, and supported media checks',
      'Works alongside secure download links',
      'Useful for support and content review workflows',
    ],
    workflow: [
      'Select an object from the explorer or search results.',
      'Open preview to confirm the content or file type.',
      'Download, share, rename, or copy only after verifying the object.',
    ],
  },
  {
    id: 'metadata-editor',
    number: '11',
    label: 'Metadata',
    title: 'Object Metadata editor',
    summary:
      'Inspect and update content type, cache-control, and custom metadata for S3-compatible objects without leaving the workspace.',
    detail:
      'Storage work often involves fixing how files behave after upload. S3Panel adds editable object properties so teams can correct content type, cache-control, and custom metadata directly from the explorer while keeping the original object in the connected provider.',
    image: '/images/s3panel/billing.png',
    imageAlt: 'S3Panel object metadata and properties panel',
    highlights: [
      'Content-Type editing',
      'Cache-Control editing',
      'Custom metadata key-value fields',
      'Permission-aware metadata update requests',
    ],
    workflow: [
      'Open properties for an object that needs corrected headers.',
      'Edit cache, content type, or custom metadata fields.',
      'Save the metadata update through the connected provider credentials.',
    ],
  },
  {
    id: 'shortcuts-automation',
    number: '12',
    label: 'Shortcuts',
    title: 'Shortcuts and App Intents for Apple workflows',
    summary:
      'Expose S3Panel actions to Apple system surfaces so macOS, iPhone, and iPad users can start parameterized storage workflows faster.',
    detail:
      'Native Apple users expect apps to fit the system. S3Panel includes App Intents for opening the explorer, starting quick upload workflows, searching objects, creating share links, and checking release notes from macOS, iPhone, and iPad entry points. The upload, search, and share-link intents now accept parameters such as bucket, object key, and query.',
    image: '/images/s3panel/explorer.png',
    imageAlt: 'S3Panel explorer opened from Apple Shortcuts and native workflows',
    highlights: [
      'Open Explorer intent',
      'Quick Upload workflow with bucket parameter',
      'Search workflow with query and bucket parameters',
      'Create Share Link workflow with bucket and object key parameters',
      'Open Changelog and release notes',
    ],
    workflow: [
      'Use Apple system shortcuts to open the right S3Panel workflow.',
      'Jump into explorer, quick upload, share-link, or changelog views.',
      'Keep native Mac and iOS actions aligned with the web product direction.',
    ],
  },
] as const;

export const homeFeatureHighlights = featurePillars.map(
  ({ id, number, label, title, summary }) => ({
    id,
    number,
    label,
    title,
    summary,
  })
);
