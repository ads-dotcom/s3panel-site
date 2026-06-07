export type ProviderFaq = {
  question: string;
  answer: string;
};

export type ProviderPage = {
  slug: string;
  name: string;
  product: string;
  label: string;
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  color: string;
  setup: string[];
  workflows: string[];
  security: string[];
  faq: ProviderFaq[];
};

export const providerPages: ProviderPage[] = [
  {
    slug: 'amazon-s3',
    name: 'Amazon S3',
    product: 'AWS object storage',
    label: 'Native S3 API',
    headline: 'Manage Amazon S3 buckets from a focused S3Panel workspace.',
    description:
      'Connect Amazon S3 credentials, browse buckets, search object keys, inspect folders, and share selected files without leaving a focused storage workspace.',
    metaTitle: 'Amazon S3 Browser and Bucket Manager',
    metaDescription:
      'Use S3Panel as an Amazon S3 browser for bucket navigation, object search, folder stats, secure downloads, and safe S3 file operations.',
    keywords: [
      'Amazon S3 browser',
      'S3 bucket manager',
      'AWS S3 GUI',
      'S3 object search',
      'S3 file manager',
    ],
    color: '#ff9900',
    setup: [
      'Create a dedicated access key for the buckets S3Panel should manage.',
      'Use read-only permissions when users only need browse, search, and download workflows.',
      'Connect with the bucket region and the permissions your team actually needs.',
    ],
    workflows: [
      'Browse prefixes and folders without switching back to the AWS console.',
      'Find objects by key with manifest-backed search.',
      'Upload, download, copy, move, rename, zip, unzip, and delete selected objects.',
      'Generate temporary links for selected files instead of making buckets public.',
    ],
    security: [
      'Customer object bytes stay in Amazon S3.',
      'S3Panel actions follow the IAM permissions attached to the connected key.',
      'Least-privilege keys keep production buckets safer during evaluation.',
    ],
    faq: [
      {
        question: 'Can S3Panel replace the AWS console for every S3 task?',
        answer:
          'No. S3Panel is focused on object workflows such as browsing, search, folder stats, sharing, and file operations. Infrastructure policy work still belongs in AWS.',
      },
      {
        question: 'Does S3Panel copy Amazon S3 files into its own storage?',
        answer:
          'No. Original object data stays in Amazon S3. S3Panel acts as a management workspace and uses provider permissions to perform actions.',
      },
    ],
  },
  {
    slug: 'cloudflare-r2',
    name: 'Cloudflare R2',
    product: 'Zero egress object storage',
    label: 'R2 buckets',
    headline: 'Browse and manage Cloudflare R2 buckets with S3Panel.',
    description:
      'S3Panel gives Cloudflare R2 users a clear workspace for object browsing, fast search, temporary sharing, and safe bucket operations.',
    metaTitle: 'Cloudflare R2 Browser and Bucket Manager',
    metaDescription:
      'Manage Cloudflare R2 buckets with S3Panel: browse objects, search large buckets, inspect folders, and create secure temporary links.',
    keywords: [
      'Cloudflare R2 browser',
      'R2 bucket manager',
      'Cloudflare R2 GUI',
      'R2 file search',
      'R2 desktop app',
    ],
    color: '#F38020',
    setup: [
      'Create a Cloudflare R2 API token scoped to the account and buckets S3Panel should access.',
      'Use the R2 S3-compatible endpoint for the connected account.',
      'Start with a non-production bucket to verify permissions and file operations.',
    ],
    workflows: [
      'Browse R2 objects and prefixes from the web, macOS, iPhone, and iPad.',
      'Search object keys without manually paging through the Cloudflare dashboard.',
      'Download selected objects and share private files with temporary links.',
      'Review folder counts and sizes for support and operations work.',
    ],
    security: [
      'Customer files remain in Cloudflare R2.',
      'S3Panel works through the R2 permissions granted by the connected token.',
      'Temporary sharing avoids changing bucket-wide public access.',
    ],
    faq: [
      {
        question: 'Does S3Panel work with Cloudflare R2 through the S3 API?',
        answer:
          'Yes. S3Panel connects to Cloudflare R2 through S3-compatible connection details and provider-scoped credentials.',
      },
      {
        question: 'Is S3Panel useful for large R2 buckets?',
        answer:
          'Yes. S3Panel is designed around browsing, manifest-backed search, and folder stats so large object stores are easier to inspect.',
      },
    ],
  },
  {
    slug: 'minio',
    name: 'MinIO',
    product: 'Self-hosted object storage',
    label: 'S3-compatible',
    headline: 'Use S3Panel with MinIO and self-hosted S3-compatible storage.',
    description:
      'Connect MinIO endpoints to S3Panel for a focused object explorer, search workflow, and safe file operations across self-hosted storage.',
    metaTitle: 'MinIO Browser and S3-Compatible Storage Manager',
    metaDescription:
      'Connect MinIO to S3Panel for object browsing, key search, folder stats, secure sharing, and S3-compatible storage operations.',
    keywords: ['MinIO browser', 'MinIO GUI', 'S3 compatible browser', 'MinIO file manager'],
    color: '#C72E49',
    setup: [
      'Use the MinIO endpoint URL your team already exposes.',
      'Create an access key with the bucket or prefix scope S3Panel should manage.',
      'Confirm TLS and network access before adding production buckets.',
    ],
    workflows: [
      'Browse self-hosted buckets from one workspace.',
      'Search object keys and review folder-level counts.',
      'Perform common upload, download, move, copy, rename, zip, unzip, and delete actions.',
    ],
    security: [
      'Object data remains in your MinIO deployment.',
      'Access is limited by the MinIO credentials you connect.',
      'Dedicated credentials make audits and rotation easier.',
    ],
    faq: [
      {
        question: 'Can S3Panel connect to a custom MinIO endpoint?',
        answer:
          'Yes. S3Panel supports custom S3-compatible endpoints, including MinIO deployments that expose the S3 API.',
      },
    ],
  },
  {
    slug: 'wasabi',
    name: 'Wasabi',
    product: 'Hot cloud storage',
    label: 'S3-compatible',
    headline: 'Manage Wasabi buckets with S3Panel.',
    description:
      'Use S3Panel as a Wasabi object storage workspace for browsing, searching, sharing, and safer file operations.',
    metaTitle: 'Wasabi S3 Browser and Bucket Manager',
    metaDescription:
      'Browse and manage Wasabi S3-compatible buckets with S3Panel. Search objects, inspect folders, and share selected files securely.',
    keywords: ['Wasabi browser', 'Wasabi S3 client', 'Wasabi bucket manager', 'S3-compatible GUI'],
    color: '#01CD3E',
    setup: [
      'Create Wasabi access keys for the buckets S3Panel should manage.',
      'Choose the correct Wasabi region endpoint.',
      'Start with read-only permissions if users only need browsing and downloads.',
    ],
    workflows: [
      'Browse Wasabi buckets with familiar file explorer patterns.',
      'Search object keys and inspect folder stats.',
      'Share selected files without changing bucket-wide access policies.',
    ],
    security: [
      'Object bytes remain in Wasabi.',
      'S3Panel operations follow the connected key permissions.',
      'Credential rotation stays under your Wasabi account control.',
    ],
    faq: [
      {
        question: 'Does S3Panel support Wasabi as S3-compatible storage?',
        answer: 'Yes. S3Panel can connect to Wasabi through S3-compatible credentials and endpoints.',
      },
    ],
  },
  {
    slug: 'digitalocean-spaces',
    name: 'DigitalOcean Spaces',
    product: 'Object storage for apps',
    label: 'S3-compatible',
    headline: 'Browse DigitalOcean Spaces from S3Panel.',
    description:
      'Connect DigitalOcean Spaces to S3Panel for object browsing, search, folder stats, and private file sharing workflows.',
    metaTitle: 'DigitalOcean Spaces Browser and Bucket Manager',
    metaDescription:
      'Use S3Panel with DigitalOcean Spaces for S3-compatible object browsing, file search, folder stats, and secure downloads.',
    keywords: [
      'DigitalOcean Spaces browser',
      'Spaces bucket manager',
      'DigitalOcean S3 GUI',
      'S3-compatible storage manager',
    ],
    color: '#0080FF',
    setup: [
      'Create Spaces access keys for the project or bucket scope you need.',
      'Use the correct Spaces endpoint and region.',
      'Verify upload/download permissions before adding production workflows.',
    ],
    workflows: [
      'Browse Spaces buckets without switching panels.',
      'Find generated assets or uploads by object key.',
      'Download, share, and manage selected objects from one workspace.',
    ],
    security: [
      'Customer data stays in DigitalOcean Spaces.',
      'S3Panel follows the permissions granted by the Spaces key.',
      'Temporary links help keep buckets private by default.',
    ],
    faq: [
      {
        question: 'Can S3Panel search DigitalOcean Spaces objects?',
        answer:
          'Yes. S3Panel is designed for manifest-backed object search across S3-compatible providers such as DigitalOcean Spaces.',
      },
    ],
  },
  {
    slug: 'backblaze-b2',
    name: 'Backblaze B2',
    product: 'Cloud object storage',
    label: 'S3-compatible',
    headline: 'Manage Backblaze B2 buckets with S3Panel.',
    description:
      'S3Panel helps teams browse Backblaze B2 S3-compatible buckets, search objects, and handle common support operations.',
    metaTitle: 'Backblaze B2 Browser and S3-Compatible Bucket Manager',
    metaDescription:
      'Connect Backblaze B2 to S3Panel for object browsing, search, folder stats, secure downloads, and S3-compatible file operations.',
    keywords: ['Backblaze B2 browser', 'B2 bucket manager', 'Backblaze S3 client', 'B2 file search'],
    color: '#E21E29',
    setup: [
      'Create an application key for the B2 buckets S3Panel should reach.',
      'Use B2 S3-compatible endpoint details.',
      'Limit write permissions where users only need browse and download access.',
    ],
    workflows: [
      'Inspect B2 buckets and prefixes.',
      'Search object keys for support or operations cases.',
      'Create temporary download workflows for selected objects.',
    ],
    security: [
      'Files remain in Backblaze B2.',
      'Access is controlled by the application key scope.',
      'Provider-side credential rotation remains under your control.',
    ],
    faq: [
      {
        question: 'Does S3Panel support Backblaze B2 through S3-compatible APIs?',
        answer:
          'Yes. S3Panel supports S3-compatible object storage providers, including Backblaze B2 when configured with the right endpoint and credentials.',
      },
    ],
  },
  {
    slug: 'hetzner-object-storage',
    name: 'Hetzner Object Storage',
    product: 'European object storage',
    label: 'S3-compatible',
    headline: 'Connect Hetzner Object Storage to S3Panel.',
    description:
      'Use S3Panel to browse, search, and safely manage Hetzner Object Storage buckets through S3-compatible workflows.',
    metaTitle: 'Hetzner Object Storage Browser and Bucket Manager',
    metaDescription:
      'Manage Hetzner Object Storage with S3Panel: object browsing, key search, folder stats, secure downloads, and file operations.',
    keywords: [
      'Hetzner Object Storage browser',
      'Hetzner S3 client',
      'Hetzner bucket manager',
      'European S3-compatible storage',
    ],
    color: '#D50C2D',
    setup: [
      'Create provider credentials dedicated to S3Panel.',
      'Use the S3-compatible endpoint for the Hetzner location.',
      'Test read, list, and write permissions before production use.',
    ],
    workflows: [
      'Browse bucket prefixes and inspect objects.',
      'Search object keys and review folder totals.',
      'Share private files with controlled temporary links.',
    ],
    security: [
      'Object data remains in Hetzner Object Storage.',
      'Actions are limited by connected credential permissions.',
      'Use separate keys for teams, customers, or environments.',
    ],
    faq: [
      {
        question: 'Can S3Panel work with European S3-compatible providers?',
        answer:
          'Yes. S3Panel supports custom S3-compatible endpoints and provider-specific connection details.',
      },
    ],
  },
  {
    slug: 'scaleway-object-storage',
    name: 'Scaleway Object Storage',
    product: 'S3-compatible storage',
    label: 'S3-compatible',
    headline: 'Browse Scaleway Object Storage with S3Panel.',
    description:
      'Connect Scaleway Object Storage to S3Panel to manage buckets, find files, inspect folder sizes, and share selected objects.',
    metaTitle: 'Scaleway Object Storage Browser and Manager',
    metaDescription:
      'Use S3Panel as a Scaleway Object Storage browser for object search, folder stats, secure downloads, and S3-compatible file actions.',
    keywords: [
      'Scaleway Object Storage browser',
      'Scaleway S3 client',
      'S3-compatible bucket manager',
    ],
    color: '#4F0599',
    setup: [
      'Create access keys for the Scaleway project and bucket scope.',
      'Use the correct region endpoint.',
      'Start with least-privilege permissions for evaluation.',
    ],
    workflows: [
      'Browse Scaleway buckets and prefixes.',
      'Find objects by key with search workflows.',
      'Manage selected files without using multiple provider consoles.',
    ],
    security: [
      'Customer files remain in Scaleway Object Storage.',
      'S3Panel follows the connected key permissions.',
      'Separate keys make team access easier to audit.',
    ],
    faq: [
      {
        question: 'Is Scaleway Object Storage S3-compatible for S3Panel?',
        answer:
          'Yes. S3Panel can connect to S3-compatible providers such as Scaleway when endpoint and credentials are configured.',
      },
    ],
  },
  {
    slug: 'akamai-object-storage',
    name: 'Akamai Object Storage',
    product: 'Distributed object storage',
    label: 'S3-compatible',
    headline: 'Manage Akamai Object Storage from S3Panel.',
    description:
      'Use S3Panel for S3-compatible Akamai Object Storage workflows including browse, search, download, and selected file operations.',
    metaTitle: 'Akamai Object Storage Browser and Bucket Manager',
    metaDescription:
      'Connect Akamai Object Storage to S3Panel for object browsing, file search, folder stats, and secure S3-compatible workflows.',
    keywords: ['Akamai Object Storage browser', 'Akamai S3 client', 'S3-compatible storage GUI'],
    color: '#0096D6',
    setup: [
      'Create access credentials for the target object storage buckets.',
      'Use provider endpoint details that match the bucket location.',
      'Verify list and object permissions before enabling write actions.',
    ],
    workflows: [
      'Browse objects and prefixes in one workspace.',
      'Search large buckets by key.',
      'Share selected files without changing public bucket policy.',
    ],
    security: [
      'Object bytes stay in Akamai Object Storage.',
      'Credential scope controls available S3Panel actions.',
      'Least-privilege setup is recommended for support users.',
    ],
    faq: [
      {
        question: 'Can S3Panel connect to Akamai Object Storage?',
        answer:
          'Yes. S3Panel is built for S3-compatible storage providers and can connect when endpoint and credential details are available.',
      },
    ],
  },
  {
    slug: 'custom-s3-endpoint',
    name: 'Custom S3 Endpoint',
    product: 'Any S3-compatible API',
    label: 'Bring your URL',
    headline: 'Connect custom S3-compatible endpoints to S3Panel.',
    description:
      'S3Panel supports custom S3-compatible endpoints so teams can use one workflow across hosted, self-hosted, and private object storage.',
    metaTitle: 'Custom S3-Compatible Endpoint Browser',
    metaDescription:
      'Use S3Panel with custom S3-compatible endpoints for object browsing, search, folder stats, secure downloads, and safe file operations.',
    keywords: [
      'custom S3 endpoint browser',
      'S3-compatible storage browser',
      'S3 endpoint GUI',
      'object storage manager',
    ],
    color: '#111827',
    setup: [
      'Enter the S3-compatible endpoint URL used by your provider or deployment.',
      'Use credentials scoped to the buckets or prefixes S3Panel should manage.',
      'Confirm whether your provider expects path-style or virtual-hosted-style requests.',
    ],
    workflows: [
      'Use one object workflow across different S3-compatible providers.',
      'Browse, search, and manage selected objects.',
      'Keep private sharing workflows consistent across environments.',
    ],
    security: [
      'Object data stays in the connected provider or self-hosted deployment.',
      'S3Panel does not become the system of record for customer files.',
      'Dedicated credentials make rotation and revocation easier.',
    ],
    faq: [
      {
        question: 'What counts as a custom S3-compatible endpoint?',
        answer:
          'Any storage service or self-hosted deployment that implements the S3 API and provides endpoint, access key, and secret key details can be evaluated with S3Panel.',
      },
    ],
  },
];

export function getProviderPage(slug: string) {
  return providerPages.find((provider) => provider.slug === slug);
}
