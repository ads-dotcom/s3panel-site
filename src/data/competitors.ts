export type CompetitorPage = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  bestFor: string[];
  s3PanelFit: string[];
  differences: string[];
  sourceUrl: string;
};

export const competitorPages: CompetitorPage[] = [
  {
    slug: 'cyberduck',
    name: 'Cyberduck',
    category: 'General cloud storage browser',
    headline: 'S3Panel vs Cyberduck for S3 and R2 bucket work',
    metaTitle: 'S3Panel vs Cyberduck',
    metaDescription:
      'Compare S3Panel and Cyberduck for S3-compatible storage, Cloudflare R2, object search, private sharing, and daily bucket operations.',
    bestFor: [
      'General FTP, SFTP, WebDAV, and multi-protocol file transfer workflows.',
      'Users who want an open-source desktop storage browser.',
      'Teams that need many connection profiles beyond S3-compatible storage.',
    ],
    s3PanelFit: [
      'Focused S3 and Cloudflare R2 workflows across web, macOS, iPhone, and iPad.',
      'Manifest-backed object search and folder stats for large buckets.',
      'Private sharing and account workflows designed around S3-compatible storage.',
    ],
    differences: [
      'Cyberduck is broad and protocol-heavy; S3Panel is narrower and built around object storage operations.',
      'S3Panel emphasizes web access and native Apple apps, while Cyberduck is primarily a desktop client.',
      'S3Panel keeps pricing and account controls in the same product workspace.',
    ],
    sourceUrl: 'https://cyberduck.io/index?l=en',
  },
  {
    slug: 'brows3',
    name: 'Brows3',
    category: 'Open-source S3 desktop client',
    headline: 'S3Panel vs Brows3 for fast S3 browsing',
    metaTitle: 'S3Panel vs Brows3',
    metaDescription:
      'Compare S3Panel and Brows3 for S3-compatible object storage, large bucket navigation, search, platform availability, and support workflows.',
    bestFor: [
      'Users who want a free, open-source S3 desktop client.',
      'Local-first workflows centered on Rust/Tauri performance.',
      'Developers who want to inspect or contribute to the client source code.',
    ],
    s3PanelFit: [
      'Teams that want web, macOS, iPhone, and iPad access under one S3Panel account.',
      'Operations workflows that combine bucket browsing, search, secure sharing, and billing.',
      'Users who want a managed product with public company, support, privacy, and contact pages.',
    ],
    differences: [
      'Brows3 positions itself as free and open source; S3Panel is a paid managed product.',
      'S3Panel is designed as a product workspace with account and support flows.',
      'Brows3 emphasizes desktop performance architecture; S3Panel emphasizes cross-device S3/R2 workflows.',
    ],
    sourceUrl: 'https://www.brows3.app/',
  },
  {
    slug: 'cloudmounter',
    name: 'CloudMounter',
    category: 'Mounted cloud drive',
    headline: 'S3Panel vs CloudMounter for Amazon S3 and object storage',
    metaTitle: 'S3Panel vs CloudMounter',
    metaDescription:
      'Compare S3Panel and CloudMounter for Amazon S3 access, Finder-style mounted drives, object search, folder stats, and private sharing.',
    bestFor: [
      'Users who want to mount Amazon S3 or cloud storage as a local drive.',
      'Finder or Explorer-style file access across many storage providers.',
      'Workflows where files should behave like mounted local folders.',
    ],
    s3PanelFit: [
      'Teams that need a focused browser-based S3/R2 management surface.',
      'Support and operations workflows built around search, stats, and selected file actions.',
      'Users who want to avoid treating object storage exactly like a local filesystem.',
    ],
    differences: [
      'CloudMounter is about mounting cloud storage into the native file manager.',
      'S3Panel is a web/native management workspace for S3-compatible object workflows.',
      'S3Panel is better positioned for bucket inspection, temporary sharing, and folder stats.',
    ],
    sourceUrl: 'https://cloudmounter.net/amazon-s3-client.html',
  },
  {
    slug: 'transmit',
    name: 'Transmit',
    category: 'macOS file transfer client',
    headline: 'S3Panel vs Transmit for S3-compatible storage',
    metaTitle: 'S3Panel vs Transmit',
    metaDescription:
      'Compare S3Panel and Transmit for Amazon S3, Cloudflare R2, Mac file transfer, sync workflows, and object storage management.',
    bestFor: [
      'Mac users who need a mature FTP, SFTP, and cloud file transfer app.',
      'File transfer and sync workflows across many server types.',
      'Users already invested in the Panic app ecosystem.',
    ],
    s3PanelFit: [
      'Teams that need S3 and R2 management beyond one Mac.',
      'Web, macOS, iPhone, and iPad access for object storage workflows.',
      'Large bucket search, folder stats, secure sharing, and account controls.',
    ],
    differences: [
      'Transmit is a Mac-first file transfer client with broad protocol support.',
      'S3Panel is specifically shaped around S3-compatible bucket management.',
      'S3Panel is stronger when cross-device account access and storage-specific workflows matter.',
    ],
    sourceUrl: 'https://help.panic.com/transmit/',
  },
];

export function getCompetitorPage(slug: string) {
  return competitorPages.find((competitor) => competitor.slug === slug);
}
