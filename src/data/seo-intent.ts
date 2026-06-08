import type { Metadata } from 'next';

export type SeoIntentPageKey =
  | 'cloudflare-r2-manager'
  | 's3-browser-for-mac'
  | 's3-client-macos'
  | 'wasabi-s3-client'
  | 'minio-browser'
  | 'backblaze-b2-s3-client'
  | 'cyberduck-alternative'
  | 'transmit-alternative'
  | 'cloudmounter-alternative';

export type SeoIntentPage = {
  key: SeoIntentPageKey;
  path: string;
  title: string;
  eyebrow: string;
  headline: string;
  italic: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  audience: string;
  provider: string;
  providerSlug?: string;
  color: string;
  primaryCta: string;
  highlights: string[];
  workflow: string[];
  proof: Array<{
    title: string;
    text: string;
  }>;
  comparison?: {
    competitor: string;
    sourceUrl: string;
    bestFor: string[];
    s3PanelFit: string[];
    differences: string[];
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  related: SeoIntentPageKey[];
};

export const seoIntentPages: Record<SeoIntentPageKey, SeoIntentPage> = {
  'cloudflare-r2-manager': {
    key: 'cloudflare-r2-manager',
    path: '/cloudflare-r2-manager/',
    title: 'Cloudflare R2 Manager',
    eyebrow: 'Cloudflare R2 manager',
    headline: 'Manage Cloudflare R2 buckets from a focused S3Panel workspace.',
    italic: 'Search, share, inspect, and operate R2 objects faster.',
    description:
      'S3Panel gives Cloudflare R2 users a clear workspace for bucket browsing, manifest-backed object search, secure temporary links, folder insight, and daily S3-compatible file operations.',
    metaTitle: 'Cloudflare R2 Manager for Buckets, Search, and Secure Links',
    metaDescription:
      'Manage Cloudflare R2 buckets with S3Panel: browse objects, search large buckets, inspect folders, and create secure presigned links.',
    keywords: ['Cloudflare R2 manager', 'R2 bucket manager', 'Cloudflare R2 browser', 'R2 file search'],
    audience: 'Teams using Cloudflare R2 for app files, media, backups, and customer exports.',
    provider: 'Cloudflare R2',
    providerSlug: 'cloudflare-r2',
    color: '#F38020',
    primaryCta: 'Start managing R2',
    highlights: [
      'Connect R2 through S3-compatible endpoint details.',
      'Find object keys without manually paging through large buckets.',
      'Create short-lived links while keeping buckets private.',
      'Review folder size, transfer, audit, and admin workflows in one place.',
    ],
    workflow: [
      'Create a Cloudflare R2 API token scoped to the account and buckets S3Panel should reach.',
      'Add the R2 endpoint, access key, secret, region, and target bucket to S3Panel.',
      'Browse prefixes, search object keys, inspect files, and open the folder path quickly.',
      'Upload, download, rename, copy, move, or create a secure share link for selected files.',
    ],
    proof: [
      {
        title: 'Search-first R2 operations',
        text: 'R2 buckets can become too large for manual browsing. S3Panel keeps search and folder insight close to the explorer.',
      },
      {
        title: 'Private sharing by default',
        text: 'Temporary links let teams share selected objects without changing bucket-wide public access.',
      },
      {
        title: 'Cross-device workflow',
        text: 'The same S3Panel product direction covers web, macOS, iPhone, and iPad workflows.',
      },
    ],
    faq: [
      {
        question: 'Can S3Panel connect to Cloudflare R2?',
        answer:
          'Yes. Cloudflare R2 exposes an S3-compatible API, and S3Panel supports R2 endpoint and credential configuration.',
      },
      {
        question: 'Does S3Panel copy my R2 files into its own storage?',
        answer:
          'No. Original object data remains in Cloudflare R2. S3Panel acts as the management workspace for browse, search, share, and selected operations.',
      },
      {
        question: 'Is this page different from the general provider page?',
        answer:
          'Yes. This page targets people specifically searching for a Cloudflare R2 manager and explains the R2 workflow directly.',
      },
    ],
    related: ['s3-browser-for-mac', 'minio-browser', 'cyberduck-alternative'],
  },
  's3-browser-for-mac': {
    key: 's3-browser-for-mac',
    path: '/s3-browser-for-mac/',
    title: 'S3 Browser for Mac',
    eyebrow: 'S3 browser for Mac',
    headline: 'Browse S3 and S3-compatible buckets from a Mac-friendly workspace.',
    italic: 'Built for object storage work, not generic file transfer.',
    description:
      'Use S3Panel as an S3 browser for Mac when you need bucket browsing, object search, metadata awareness, share links, folder insight, and a clear path from Mac to web and iOS.',
    metaTitle: 'S3 Browser for Mac - Browse AWS S3 and S3-Compatible Buckets',
    metaDescription:
      'Use S3Panel as an S3 browser for Mac to browse buckets, search objects, manage metadata, and create secure links.',
    keywords: ['S3 browser for Mac', 'S3 browser macOS', 'AWS S3 browser Mac', 'S3 file manager Mac'],
    audience: 'Mac users who manage AWS S3, Cloudflare R2, Wasabi, MinIO, and compatible buckets.',
    provider: 'Amazon S3',
    providerSlug: 'amazon-s3',
    color: '#ff9900',
    primaryCta: 'Open the S3 browser',
    highlights: [
      'Browse buckets and nested prefixes in a focused interface.',
      'Search large object stores by key instead of clicking folder by folder.',
      'Use upload, download, rename, copy, move, zip, unzip, and share workflows.',
      'Keep App Store, web, and iOS product messaging aligned around S3 operations.',
    ],
    workflow: [
      'Install S3Panel from the Mac App Store or open the web app.',
      'Add an AWS S3 or S3-compatible connection with least-privilege credentials.',
      'Use Explorer, Fast Search, Share Links, Transfer Manager, and admin views for daily work.',
      'Open the App Store page when updates are available instead of using an external updater.',
    ],
    proof: [
      {
        title: 'Mac-native positioning',
        text: 'S3Panel is marketed as a Mac App Store S3/R2 tool while keeping the same account flow available on the web.',
      },
      {
        title: 'Large bucket visibility',
        text: 'Search, folder stats, and selected file operations are easier to understand than provider-console hopping.',
      },
      {
        title: 'Provider flexibility',
        text: 'The same workflow supports Amazon S3, Cloudflare R2, Wasabi, MinIO, Backblaze B2, and custom endpoints.',
      },
    ],
    faq: [
      {
        question: 'Is S3Panel an S3 browser for Mac?',
        answer:
          'Yes. S3Panel includes a macOS app and is positioned for S3-compatible bucket browsing, search, sharing, and operations.',
      },
      {
        question: 'Can it work with providers beyond AWS S3?',
        answer:
          'Yes. S3Panel supports S3-compatible providers such as Cloudflare R2, Wasabi, MinIO, and Backblaze B2.',
      },
      {
        question: 'Does it mount buckets as local drives?',
        answer:
          'No. S3Panel is a bucket operations workspace, not a Finder drive-mounting product.',
      },
    ],
    related: ['s3-client-macos', 'cloudflare-r2-manager', 'transmit-alternative'],
  },
  's3-client-macos': {
    key: 's3-client-macos',
    path: '/s3-client-macos/',
    title: 'S3 Client for macOS',
    eyebrow: 'S3 client macOS',
    headline: 'A practical S3 client for macOS teams managing object storage every day.',
    italic: 'Explorer, search, transfers, links, admin controls, and plan visibility.',
    description:
      'S3Panel is a macOS S3 client for developers, agencies, and operations teams that need a cleaner way to manage buckets, large object searches, secure links, and S3-compatible providers.',
    metaTitle: 'S3 Client for macOS - S3Panel for Object Storage Teams',
    metaDescription:
      'A practical S3 client for macOS with bucket browsing, object search, secure links, audit logs, and S3-compatible provider support.',
    keywords: ['S3 client macOS', 'macOS S3 client', 'S3 app for Mac', 'object storage manager Mac'],
    audience: 'Developers, agencies, and operations teams using S3-compatible object storage on Mac.',
    provider: 'S3-compatible storage',
    providerSlug: 'custom-s3-endpoint',
    color: '#111827',
    primaryCta: 'Try the macOS client',
    highlights: [
      'Native macOS app available through the Mac App Store.',
      'Guest-first product flow with account prompts only when storage is added.',
      'Transfer Manager, Quick Upload, preview, metadata, and admin screens.',
      'Plan and trial visibility close to the workspace so billing is clear.',
    ],
    workflow: [
      'Open S3Panel and review the workspace without a forced login wall.',
      'Sign in or create an account when you are ready to save an S3/R2 connection.',
      'Use Explorer, Buckets, Fast Search, Share Links, Audit Logs, Billing, and Settings.',
      'Check update status and open the App Store update flow when a new version is available.',
    ],
    proof: [
      {
        title: 'Mac App Store-safe update path',
        text: 'S3Panel can show update status and direct users to the App Store page without installing outside Apple distribution.',
      },
      {
        title: 'More than browse and download',
        text: 'Admin screens cover lifecycle, versioning, bucket policy, ACL, website, encryption, checksum, and multipart settings.',
      },
      {
        title: 'Trial-to-paid clarity',
        text: 'Plan, trial, expiry, and upgrade messaging are shown inside the product instead of hiding billing behind support.',
      },
    ],
    faq: [
      {
        question: 'Can a Mac App Store app update itself outside the App Store?',
        answer:
          'No. S3Panel should direct users to the Mac App Store update flow when an update is available.',
      },
      {
        question: 'Does S3Panel force login at first launch?',
        answer:
          'The current product direction is to show the workspace first and ask for account access when a user adds storage or needs saved account features.',
      },
      {
        question: 'Is the macOS version developed alongside iOS and web?',
        answer:
          'Yes. The product plan keeps macOS, iOS, and web aligned around the same S3/R2 workflows.',
      },
    ],
    related: ['s3-browser-for-mac', 'cloudflare-r2-manager', 'cloudmounter-alternative'],
  },
  'wasabi-s3-client': {
    key: 'wasabi-s3-client',
    path: '/wasabi-s3-client/',
    title: 'Wasabi S3 Client',
    eyebrow: 'Wasabi S3 client',
    headline: 'Manage Wasabi buckets with an S3-compatible client built for daily operations.',
    italic: 'Search archives, share private files, and keep bucket work visible.',
    description:
      'S3Panel helps Wasabi users browse buckets, search large archives, inspect objects, create temporary links, and keep storage workflows consistent with other S3-compatible providers.',
    metaTitle: 'Wasabi S3 Client - Browse and Manage Wasabi Buckets',
    metaDescription:
      'Use S3Panel as a Wasabi S3 client for bucket browsing, object search, secure downloads, metadata, and S3-compatible workflows.',
    keywords: ['Wasabi S3 client', 'Wasabi bucket manager', 'Wasabi browser', 'Wasabi file search'],
    audience: 'Wasabi users managing hot cloud storage, archives, client exports, and media buckets.',
    provider: 'Wasabi',
    providerSlug: 'wasabi',
    color: '#01CD3E',
    primaryCta: 'Connect Wasabi',
    highlights: [
      'Add Wasabi through S3-compatible endpoint and region details.',
      'Search backup, media, document, and export buckets by object key.',
      'Generate secure temporary links for selected private files.',
      'Use the same workflow across Wasabi, R2, S3, MinIO, and B2.',
    ],
    workflow: [
      'Create Wasabi access keys scoped to the buckets S3Panel should manage.',
      'Choose the correct Wasabi region endpoint and least-privilege permissions.',
      'Browse bucket prefixes, search object names, and inspect file details.',
      'Share selected objects without changing bucket-wide public access.',
    ],
    proof: [
      {
        title: 'Archive-friendly search',
        text: 'Wasabi is often used for large archives. S3Panel gives teams search and folder visibility for those object collections.',
      },
      {
        title: 'Consistent S3 workflow',
        text: 'Teams using multiple providers can keep the same browse, search, and share flow across accounts.',
      },
      {
        title: 'Controlled access',
        text: 'Dedicated credentials and temporary links keep the operational boundary clear.',
      },
    ],
    faq: [
      {
        question: 'Does S3Panel support Wasabi?',
        answer:
          'Yes. Wasabi supports S3-compatible access, and S3Panel can connect with Wasabi endpoint and credential details.',
      },
      {
        question: 'Can S3Panel search large Wasabi buckets?',
        answer:
          'Yes. S3Panel is designed around manifest-backed search and folder insight for large object stores.',
      },
    ],
    related: ['backblaze-b2-s3-client', 'minio-browser', 's3-client-macos'],
  },
  'minio-browser': {
    key: 'minio-browser',
    path: '/minio-browser/',
    title: 'MinIO Browser',
    eyebrow: 'MinIO browser',
    headline: 'Browse MinIO and self-hosted S3-compatible buckets with S3Panel.',
    italic: 'A clean workspace for internal object storage operations.',
    description:
      'Use S3Panel as a MinIO browser for custom endpoints, path-style setups, object search, metadata, temporary links, and S3-compatible admin workflows.',
    metaTitle: 'MinIO Browser - Manage Self-Hosted S3-Compatible Storage',
    metaDescription:
      'Browse MinIO buckets with S3Panel: manage objects, search keys, inspect metadata, and create secure links for S3-compatible storage.',
    keywords: ['MinIO browser', 'MinIO GUI', 'MinIO S3 client', 'self-hosted S3 browser'],
    audience: 'Self-hosted storage teams running MinIO or private S3-compatible endpoints.',
    provider: 'MinIO',
    providerSlug: 'minio',
    color: '#C72E49',
    primaryCta: 'Browse MinIO',
    highlights: [
      'Connect custom MinIO endpoints and self-hosted deployments.',
      'Use S3-compatible credentials scoped to buckets or prefixes.',
      'Search object keys and inspect internal storage without console switching.',
      'Keep admin workflows close to browse, transfer, and sharing actions.',
    ],
    workflow: [
      'Create a MinIO access key with scoped permissions.',
      'Add endpoint, region, path-style behavior, and bucket details in S3Panel.',
      'Browse, search, upload, download, and inspect objects from one workspace.',
      'Use metadata, policy, lifecycle, versioning, encryption, checksum, and multipart views when needed.',
    ],
    proof: [
      {
        title: 'Self-hosted endpoint support',
        text: 'S3Panel is designed for hosted and private S3-compatible providers, including custom endpoint configurations.',
      },
      {
        title: 'Internal team clarity',
        text: 'A dedicated browser helps support, development, and operations teams work without sharing root console access.',
      },
      {
        title: 'Admin visibility',
        text: 'Bucket policy, lifecycle, versioning, encryption, and metadata workflows are part of the product direction.',
      },
    ],
    faq: [
      {
        question: 'Can S3Panel connect to MinIO?',
        answer:
          'Yes. MinIO exposes S3-compatible APIs, and S3Panel supports custom endpoint connection patterns.',
      },
      {
        question: 'Is this useful for private infrastructure?',
        answer:
          'Yes. S3Panel is positioned for teams that want a safer product surface for internal object storage workflows.',
      },
    ],
    related: ['cloudflare-r2-manager', 'wasabi-s3-client', 'cyberduck-alternative'],
  },
  'backblaze-b2-s3-client': {
    key: 'backblaze-b2-s3-client',
    path: '/backblaze-b2-s3-client/',
    title: 'Backblaze B2 S3 Client',
    eyebrow: 'Backblaze B2 S3 client',
    headline: 'Manage Backblaze B2 buckets through S3-compatible workflows.',
    italic: 'Browse archives, find objects, and share selected files safely.',
    description:
      'S3Panel helps Backblaze B2 users manage S3-compatible buckets with object browsing, archive search, folder insight, secure links, and consistent multi-provider workflows.',
    metaTitle: 'Backblaze B2 S3 Client - Manage B2 Buckets with S3Panel',
    metaDescription:
      'Use S3Panel as a Backblaze B2 S3 client to browse buckets, search objects, create links, and manage S3-compatible workflows.',
    keywords: ['Backblaze B2 S3 client', 'Backblaze B2 browser', 'B2 bucket manager', 'B2 file search'],
    audience: 'Teams using Backblaze B2 for backups, media archives, exports, and app storage.',
    provider: 'Backblaze B2',
    providerSlug: 'backblaze-b2',
    color: '#E21E29',
    primaryCta: 'Connect Backblaze B2',
    highlights: [
      'Use Backblaze B2 through S3-compatible endpoint configuration.',
      'Search archive-heavy buckets without manual provider-console digging.',
      'Create temporary links for selected private downloads.',
      'Keep workflow consistent with R2, S3, Wasabi, MinIO, and custom endpoints.',
    ],
    workflow: [
      'Enable or create Backblaze B2 S3-compatible credentials.',
      'Add endpoint, region, bucket, and permission details in S3Panel.',
      'Browse prefixes, search object keys, and inspect file details.',
      'Use transfers, secure links, metadata, and admin workflows for selected objects.',
    ],
    proof: [
      {
        title: 'Archive search',
        text: 'B2 buckets can contain large backup and media collections. Search and folder stats help teams find the right object faster.',
      },
      {
        title: 'Private download flow',
        text: 'Temporary links reduce the need to make bucket paths public for one-off downloads.',
      },
      {
        title: 'Multi-provider consistency',
        text: 'S3Panel keeps common object-storage work familiar across B2 and other S3-compatible services.',
      },
    ],
    faq: [
      {
        question: 'Can S3Panel manage Backblaze B2 through S3-compatible APIs?',
        answer:
          'Yes. S3Panel can connect to Backblaze B2 when S3-compatible endpoint and credential details are configured.',
      },
      {
        question: 'Is this useful for media and backup archives?',
        answer:
          'Yes. Search, folder visibility, and private sharing are useful for large archive-style buckets.',
      },
    ],
    related: ['wasabi-s3-client', 'minio-browser', 's3-browser-for-mac'],
  },
  'cyberduck-alternative': {
    key: 'cyberduck-alternative',
    path: '/compare/cyberduck-alternative/',
    title: 'Cyberduck Alternative for S3/R2 Teams',
    eyebrow: 'Cyberduck alternative',
    headline: 'Compare S3Panel as a Cyberduck alternative for S3 and R2 work.',
    italic: 'Focused bucket operations instead of broad protocol coverage.',
    description:
      'Cyberduck is a respected general file transfer client. S3Panel is a focused alternative when teams mainly need S3-compatible browsing, object search, secure links, audit logs, and bucket admin workflows.',
    metaTitle: 'Cyberduck Alternative for S3 and Cloudflare R2 Teams',
    metaDescription:
      'Compare S3Panel as a Cyberduck alternative for S3/R2 teams that need search, secure links, audit logs, and bucket admin workflows.',
    keywords: ['Cyberduck alternative', 'S3 Cyberduck alternative', 'Cloudflare R2 browser alternative'],
    audience: 'Teams comparing broad file transfer tools with focused object storage operations.',
    provider: 'S3/R2 operations',
    color: '#6D28D9',
    primaryCta: 'Compare S3Panel',
    highlights: [
      'Cyberduck is broad; S3Panel is focused on S3-compatible object workflows.',
      'S3Panel emphasizes manifest-backed search, share links, folder insight, and account controls.',
      'Use web, macOS, iPhone, and iPad access under one S3Panel product direction.',
      'Keep admin and audit workflows close to bucket operations.',
    ],
    workflow: [
      'Use Cyberduck when broad protocol support is the primary need.',
      'Use S3Panel when the daily job is S3/R2 browsing, search, sharing, and bucket administration.',
      'Connect S3-compatible providers once and keep storage work inside a focused workspace.',
      'Use share-link and audit workflows without leaving the object-management context.',
    ],
    proof: [
      {
        title: 'Narrower by design',
        text: 'S3Panel does not try to cover every transfer protocol; it goes deeper on S3/R2 workflows.',
      },
      {
        title: 'Search and operations',
        text: 'Large bucket search, folder stats, metadata, and admin views are positioned as first-class workflows.',
      },
      {
        title: 'Commercial product surface',
        text: 'Account, plan, support, and App Store flows are part of the overall product experience.',
      },
    ],
    comparison: {
      competitor: 'Cyberduck',
      sourceUrl: 'https://cyberduck.io/',
      bestFor: [
        'Broad FTP, SFTP, WebDAV, and cloud transfer workflows.',
        'Users who need an open-source desktop storage browser.',
        'Many protocol profiles beyond S3-compatible object storage.',
      ],
      s3PanelFit: [
        'S3 and Cloudflare R2 workflows across web, macOS, iPhone, and iPad.',
        'Manifest-backed object search and folder stats for large buckets.',
        'Private sharing, audit logs, billing, and provider-specific admin workflows.',
      ],
      differences: [
        'Cyberduck is protocol-broad; S3Panel is object-storage focused.',
        'S3Panel keeps account, plan, support, and share-link workflows closer to bucket operations.',
        'S3Panel is stronger when large-bucket search is the deciding workflow.',
      ],
    },
    faq: [
      {
        question: 'Is S3Panel a full Cyberduck replacement?',
        answer:
          'Not for every protocol. S3Panel is a focused alternative for S3-compatible and Cloudflare R2 bucket workflows.',
      },
      {
        question: 'Why choose S3Panel for S3/R2?',
        answer:
          'Choose S3Panel when search, secure links, folder insight, audit logs, and bucket admin screens matter more than broad protocol support.',
      },
    ],
    related: ['cloudflare-r2-manager', 's3-browser-for-mac', 'transmit-alternative'],
  },
  'transmit-alternative': {
    key: 'transmit-alternative',
    path: '/compare/transmit-alternative/',
    title: 'Transmit Alternative for S3 and R2 Operations',
    eyebrow: 'Transmit alternative',
    headline: 'Compare S3Panel as a Transmit alternative for object storage teams.',
    italic: 'Less generic transfer, more S3/R2 operations.',
    description:
      'Transmit is a polished Mac file transfer app. S3Panel is an alternative for teams whose work is centered on S3-compatible buckets, Cloudflare R2, search, secure links, metadata, transfers, and admin screens.',
    metaTitle: 'Transmit Alternative for S3/R2 Search, Links, and Admin Workflows',
    metaDescription:
      'S3Panel is a Transmit alternative for teams that need S3/R2 search, transfer manager workflows, secure links, and bucket admin screens.',
    keywords: ['Transmit alternative', 'S3 Transmit alternative', 'Mac S3 client alternative'],
    audience: 'Mac users comparing file transfer apps with dedicated S3/R2 management tools.',
    provider: 'S3 and R2 buckets',
    color: '#2563EB',
    primaryCta: 'Explore the alternative',
    highlights: [
      'S3Panel is object-storage first, not classic file-transfer first.',
      'Transfer Manager, Quick Upload, preview, and metadata workflows support daily bucket work.',
      'Search and folder insight help with huge object collections.',
      'Secure links, audit logs, and plan visibility are built into the workspace.',
    ],
    workflow: [
      'Use Transmit when traditional multi-protocol transfer is the main job.',
      'Use S3Panel when S3-compatible search, sharing, metadata, and admin workflows matter more.',
      'Queue transfers, retry work, and keep object activity visible.',
      'Move from file transfer into storage operations without changing tools.',
    ],
    proof: [
      {
        title: 'Search-heavy buckets',
        text: 'S3Panel is positioned for teams that need to find and operate objects inside large buckets.',
      },
      {
        title: 'Productized sharing',
        text: 'Presigned links and audit visibility keep private downloads close to the bucket workflow.',
      },
      {
        title: 'Cross-device direction',
        text: 'The same product story applies to web, macOS, iPhone, and iPad users.',
      },
    ],
    comparison: {
      competitor: 'Transmit',
      sourceUrl: 'https://panic.com/transmit/',
      bestFor: [
        'Mac users who need mature FTP, SFTP, and cloud transfer workflows.',
        'Classic file transfer and sync jobs across several server types.',
        'Users already invested in the Panic Mac app ecosystem.',
      ],
      s3PanelFit: [
        'Teams that mainly manage S3 and Cloudflare R2 buckets.',
        'Large bucket search, share links, folder stats, and metadata workflows.',
        'Web, macOS, iPhone, and iPad access under one S3Panel account.',
      ],
      differences: [
        'Transmit is a broad Mac file transfer client; S3Panel is a focused storage operations panel.',
        'S3Panel is stronger when search, secure sharing, and bucket admin workflows are central.',
        'S3Panel keeps plan and account workflows visible for paid product use.',
      ],
    },
    faq: [
      {
        question: 'Is S3Panel better than Transmit?',
        answer:
          'It depends on the job. Transmit is strong for broad Mac file transfer; S3Panel is built for S3/R2 search, sharing, and bucket operations.',
      },
      {
        question: 'Does S3Panel include transfer workflows?',
        answer:
          'Yes. S3Panel includes transfer-oriented workflows and product work around queue, retry, history, and visibility.',
      },
    ],
    related: ['s3-client-macos', 's3-browser-for-mac', 'cyberduck-alternative'],
  },
  'cloudmounter-alternative': {
    key: 'cloudmounter-alternative',
    path: '/compare/cloudmounter-alternative/',
    title: 'CloudMounter Alternative for S3/R2 Workflows',
    eyebrow: 'CloudMounter alternative',
    headline: 'Compare S3Panel as a CloudMounter alternative for bucket operations.',
    italic: 'A bucket workspace, not a drive mount.',
    description:
      'CloudMounter is useful when users want cloud storage mounted as a local drive. S3Panel is an alternative when teams need S3/R2 search, secure links, metadata, audit logs, and bucket admin workflows.',
    metaTitle: 'CloudMounter Alternative for S3/R2 Bucket Management',
    metaDescription:
      'Compare S3Panel as a CloudMounter alternative for S3/R2 users who prefer search, secure links, and admin workflows over drive mounting.',
    keywords: ['CloudMounter alternative', 'S3 drive mount alternative', 'S3 bucket manager alternative'],
    audience: 'Users deciding between mounted cloud drives and a dedicated object-storage operations panel.',
    provider: 'S3-compatible buckets',
    color: '#0891B2',
    primaryCta: 'See S3Panel workflows',
    highlights: [
      'S3Panel does not mount buckets as local disks.',
      'It keeps object storage semantics visible for safer operations.',
      'Search, secure links, metadata, audit logs, and admin settings are central workflows.',
      'Works across S3-compatible providers instead of pretending buckets are ordinary folders.',
    ],
    workflow: [
      'Use CloudMounter when the goal is mounted drive access.',
      'Use S3Panel when bucket search, links, metadata, audit, and admin operations matter more.',
      'Connect one or more S3-compatible providers.',
      'Operate objects from a focused product interface instead of a disk mount.',
    ],
    proof: [
      {
        title: 'Clearer object model',
        text: 'S3Panel keeps buckets, prefixes, objects, metadata, and link expiry visible instead of hiding them behind a filesystem mount.',
      },
      {
        title: 'Safer sharing',
        text: 'Temporary links and audit logs fit private object distribution better than ad hoc mounted-drive work.',
      },
      {
        title: 'Admin workflows',
        text: 'Policy, lifecycle, versioning, encryption, metadata, and multipart controls fit a panel model better than a mount model.',
      },
    ],
    comparison: {
      competitor: 'CloudMounter',
      sourceUrl: 'https://cloudmounter.net/',
      bestFor: [
        'Users who want cloud storage to appear as a local drive.',
        'Finder or Explorer-style access across several providers.',
        'Workflows where mounted file access is more important than object-storage visibility.',
      ],
      s3PanelFit: [
        'Teams that need S3/R2 search, metadata, and folder insight.',
        'Secure presigned links and audit history for private object sharing.',
        'Bucket policy, lifecycle, versioning, encryption, and admin settings.',
      ],
      differences: [
        'CloudMounter is a mounted-drive tool; S3Panel is a bucket operations tool.',
        'S3Panel is stronger when users need search, links, audit, and admin workflows.',
        'S3Panel avoids treating object storage exactly like a local filesystem.',
      ],
    },
    faq: [
      {
        question: 'Is S3Panel a CloudMounter replacement?',
        answer:
          'Not for drive mounting. S3Panel is an alternative when the job is object-storage operations rather than local disk mounting.',
      },
      {
        question: 'Why not just mount S3 as a disk?',
        answer:
          'Mounting can be convenient, but teams often need search, metadata, secure links, audit history, and bucket admin controls that fit better in a dedicated panel.',
      },
    ],
    related: ['s3-client-macos', 'cloudflare-r2-manager', 'minio-browser'],
  },
};

export function getSeoIntentPage(key: SeoIntentPageKey) {
  return seoIntentPages[key];
}

export function getSeoIntentMetadata(key: SeoIntentPageKey): Metadata {
  const page = getSeoIntentPage(key);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: `${page.metaTitle} - S3Panel`,
      description: page.metaDescription,
      url: `https://s3panel.com${page.path}`,
      siteName: 'S3Panel',
      type: 'website',
      images: [
        {
          url: '/images/s3panel/explorer.png',
          width: 1200,
          height: 675,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.metaTitle} - S3Panel`,
      description: page.metaDescription,
      images: ['/images/s3panel/explorer.png'],
    },
  };
}
