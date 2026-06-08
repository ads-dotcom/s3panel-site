export type ChangelogEntry = {
  release: number;
  date: string;
  title: string;
  platform: string[];
  summary: string;
};

export const changelogEntries: ChangelogEntry[] = [
  {
    release: 1,
    date: '2026-05-22',
    title: 'Cloudflare Pages foundation',
    platform: ['Web'],
    summary:
      'Ported the S3Panel workspace to the Cloudflare deployment stack so the web app could run from the production app domain.',
  },
  {
    release: 2,
    date: '2026-05-22',
    title: 'Authentication hardening',
    platform: ['Web'],
    summary:
      'Tightened account routes, protected private app screens, and clarified the signed-in workspace boundary.',
  },
  {
    release: 3,
    date: '2026-05-22',
    title: 'Secure credential transport',
    platform: ['Web'],
    summary:
      'Adjusted S3 credential handling so access keys are submitted through protected requests instead of unsafe URL paths.',
  },
  {
    release: 4,
    date: '2026-05-22',
    title: 'S3 XML parser stability',
    platform: ['Web'],
    summary:
      'Fixed S3 XML parsing for repeated elements, improving compatibility with Cloudflare R2 and S3-compatible providers.',
  },
  {
    release: 5,
    date: '2026-05-22',
    title: 'Recursive object operations',
    platform: ['Web'],
    summary:
      'Improved recursive copy, move, and delete behavior for prefix-based object storage workflows.',
  },
  {
    release: 6,
    date: '2026-05-22',
    title: 'Search results polish',
    platform: ['Web'],
    summary:
      'Refined S3 object search results and content scan handling so users can find matching files more reliably.',
  },
  {
    release: 7,
    date: '2026-05-22',
    title: 'Share-link domain alignment',
    platform: ['Web'],
    summary:
      'Moved generated share links onto the app domain for cleaner user-facing URLs and safer link handling.',
  },
  {
    release: 8,
    date: '2026-05-22',
    title: 'Bucket ACL guidance',
    platform: ['Web'],
    summary:
      'Added clearer warnings around bucket ACL and write permissions so users understand provider-side requirements.',
  },
  {
    release: 9,
    date: '2026-05-22',
    title: 'Write permission guards',
    platform: ['Web'],
    summary:
      'Enforced ownership and write guards before destructive or modifying storage operations are attempted.',
  },
  {
    release: 10,
    date: '2026-05-22',
    title: 'Error handling for write access',
    platform: ['Web'],
    summary:
      'Improved write-access error messages for upload, rename, copy, move, and delete flows.',
  },
  {
    release: 11,
    date: '2026-05-22',
    title: 'Manifest search index',
    platform: ['Web'],
    summary:
      'Introduced manifest-backed S3 object search so repeated file-name and key searches can be faster on large buckets.',
  },
  {
    release: 12,
    date: '2026-05-22',
    title: 'Cloudflare R2 connection support',
    platform: ['Web'],
    summary:
      'Polished Cloudflare R2 account setup, endpoint handling, and provider-specific connection labels.',
  },
  {
    release: 13,
    date: '2026-05-22',
    title: 'Upload flow hardening',
    platform: ['Web'],
    summary:
      'Improved upload handling, storage operation state, and large-object workflow reliability.',
  },
  {
    release: 14,
    date: '2026-05-22',
    title: 'Mobile companion shell',
    platform: ['iOS', 'Android'],
    summary:
      'Added mobile wrapper work and responsive shell improvements for native app review and device testing.',
  },
  {
    release: 15,
    date: '2026-05-22',
    title: 'Desktop app foundation',
    platform: ['macOS'],
    summary:
      'Created the first macOS desktop shell for S3Panel, setting up the path toward native distribution.',
  },
  {
    release: 16,
    date: '2026-05-23',
    title: 'Native SwiftUI macOS app',
    platform: ['macOS'],
    summary:
      'Converted the Mac experience into a native SwiftUI application with a focused desktop workspace.',
  },
  {
    release: 17,
    date: '2026-05-23',
    title: 'Mac App Store assets',
    platform: ['macOS'],
    summary:
      'Prepared Mac App Store metadata, screenshots, icons, and release assets for the first macOS submission.',
  },
  {
    release: 18,
    date: '2026-05-23',
    title: 'Trial and legal metadata',
    platform: ['Web', 'macOS'],
    summary:
      'Added trial messaging, legal metadata, privacy references, and App Store availability notes.',
  },
  {
    release: 19,
    date: '2026-05-23',
    title: 'S3Panel icon refresh',
    platform: ['Web', 'macOS', 'iOS'],
    summary:
      'Refined the S3Panel app icon and visual identity used across App Store assets and native shells.',
  },
  {
    release: 20,
    date: '2026-05-23',
    title: 'macOS keychain session fallback',
    platform: ['macOS'],
    summary:
      'Improved local session restoration and Keychain fallback behavior for native Mac users.',
  },
  {
    release: 21,
    date: '2026-05-23',
    title: 'macOS folder stats',
    platform: ['macOS'],
    summary:
      'Added folder statistics to the macOS explorer so users can see object counts and byte totals.',
  },
  {
    release: 22,
    date: '2026-05-23',
    title: 'macOS navigation fixes',
    platform: ['macOS'],
    summary:
      'Fixed explorer navigation, bucket selection, and native panel transitions in the macOS app.',
  },
  {
    release: 23,
    date: '2026-05-23',
    title: 'Index search fallback',
    platform: ['Web', 'macOS'],
    summary:
      'Added fallback behavior when a bucket index is incomplete or unavailable, reducing empty search states.',
  },
  {
    release: 24,
    date: '2026-05-23',
    title: 'Manifest indexing speed',
    platform: ['Web'],
    summary:
      'Improved manifest rebuild performance so large bucket metadata scans can resume and complete more predictably.',
  },
  {
    release: 25,
    date: '2026-05-23',
    title: 'Provider workflow parity',
    platform: ['Web', 'macOS'],
    summary:
      'Aligned storage workflows between the web app and macOS app for browse, search, preview, share, and file actions.',
  },
  {
    release: 26,
    date: '2026-05-24',
    title: 'Incomplete listing fallback',
    platform: ['Web', 'macOS'],
    summary:
      'Fixed incomplete object listing scenarios so folder and object views recover better from provider pagination issues.',
  },
  {
    release: 27,
    date: '2026-05-24',
    title: 'Search and sharing preview',
    platform: ['macOS'],
    summary: 'Improved macOS search fallback, file sharing preview, and direct link handling.',
  },
  {
    release: 28,
    date: '2026-05-24',
    title: 'iOS App Store platform support',
    platform: ['iOS'],
    summary:
      'Added iOS App Store platform configuration, export compliance, and native review preparation.',
  },
  {
    release: 29,
    date: '2026-05-24',
    title: 'Drive explorer and settings polish',
    platform: ['Web'],
    summary:
      'Improved the explorer layout, settings screens, and account controls for repeated storage management work.',
  },
  {
    release: 30,
    date: '2026-05-25',
    title: 'Account deletion flow',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Added account deletion controls and review documentation covering sessions, connections, indexes, share links, and account data.',
  },
  {
    release: 31,
    date: '2026-05-25',
    title: 'Native App Store purchases',
    platform: ['iOS', 'macOS'],
    summary:
      'Introduced native App Store purchase handling for paid access, avoiding external checkout inside Apple apps.',
  },
  {
    release: 32,
    date: '2026-05-26',
    title: 'iOS purchase review flow',
    platform: ['iOS'],
    summary:
      'Hardened StoreKit activation, receipt refresh, restore purchases, and busy-state recovery for iOS review.',
  },
  {
    release: 33,
    date: '2026-05-26',
    title: 'Trial price disclosure',
    platform: ['iOS', 'macOS'],
    summary:
      'Clarified App Store trial and paid-price presentation so the billed amount is visible before purchase.',
  },
  {
    release: 34,
    date: '2026-05-26',
    title: 'Mac App Store signing',
    platform: ['macOS'],
    summary:
      'Hardened packaging, signing, provisioning, and App Store upload scripts for the native Mac app.',
  },
  {
    release: 35,
    date: '2026-05-26',
    title: 'Heavy storage guardrails',
    platform: ['Web', 'macOS'],
    summary:
      'Added performance guardrails for expensive storage flows, including large listings and archive operations.',
  },
  {
    release: 36,
    date: '2026-05-26',
    title: 'Folder ZIP downloads',
    platform: ['Web', 'macOS'],
    summary: 'Fixed folder ZIP download behavior for prefix-based object storage folders.',
  },
  {
    release: 37,
    date: '2026-05-27',
    title: 'macOS root navigation',
    platform: ['macOS'],
    summary: 'Fixed root navigation and search result handling inside the native macOS explorer.',
  },
  {
    release: 38,
    date: '2026-05-27',
    title: 'macOS downloads and share links',
    platform: ['macOS'],
    summary:
      'Improved download actions, share link creation, and share-link history behavior in the Mac app.',
  },
  {
    release: 39,
    date: '2026-05-27',
    title: 'Web preview and copy shortcuts',
    platform: ['Web'],
    summary:
      'Fixed preview downloads, copy shortcuts, and related object action behavior in the web app.',
  },
  {
    release: 40,
    date: '2026-05-27',
    title: 'Explorer action parity',
    platform: ['Web', 'macOS'],
    summary: 'Aligned visible explorer actions across the native and web experiences.',
  },
  {
    release: 41,
    date: '2026-05-27',
    title: 'Responsive iPad layout',
    platform: ['iOS'],
    summary:
      'Refined iPad and mobile layouts, touch targets, scroll behavior, and review-facing purchase screens.',
  },
  {
    release: 42,
    date: '2026-06-03',
    title: 'App Store review fixes',
    platform: ['iOS', 'macOS'],
    summary:
      'Addressed App Store review findings, including update controls, window reopening, metadata, and purchase behavior.',
  },
  {
    release: 43,
    date: '2026-06-03',
    title: 'Local signing keychain',
    platform: ['iOS', 'macOS'],
    summary:
      'Moved release signing into a dedicated local keychain workflow for repeatable App Store builds.',
  },
  {
    release: 44,
    date: '2026-06-07',
    title: 'Guest workspace on launch',
    platform: ['Web', 'macOS', 'iOS'],
    summary:
      'Changed first launch so users can see the workspace before sign-in, with authentication requested when adding storage.',
  },
  {
    release: 45,
    date: '2026-06-07',
    title: 'Legacy keychain prompt fix',
    platform: ['macOS'],
    summary:
      'Stopped reading legacy pre-App Store keychain session items that could trigger a macOS login keychain password prompt.',
  },
  {
    release: 46,
    date: '2026-06-07',
    title: 'Mac release notes update',
    platform: ['macOS'],
    summary:
      'Updated macOS review notes and release metadata for the latest native workspace behavior.',
  },
  {
    release: 47,
    date: '2026-06-08',
    title: 'App Store search metadata',
    platform: ['iOS', 'macOS'],
    summary:
      'Optimized App Store metadata for S3, R2, object storage, bucket manager, and provider search intent.',
  },
  {
    release: 48,
    date: '2026-06-08',
    title: 'Connection management controls',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Made add, edit, and delete connection controls clearer across web, mobile, and Mac workspaces.',
  },
  {
    release: 49,
    date: '2026-06-08',
    title: 'Bucket management controls',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Added bucket creation, empty-bucket deletion, and safe rename guidance for S3-compatible storage providers.',
  },
  {
    release: 50,
    date: '2026-06-08',
    title: 'Live storage search fallback',
    platform: ['Web', 'iOS'],
    summary:
      'Improved search so folder filtering can escalate into storage search and all-bucket search can fall back to live provider listing.',
  },
  {
    release: 51,
    date: '2026-06-08',
    title: 'Share link cleanup',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Added visible revoke, delete, and expired-link cleanup controls for generated S3Panel share links.',
  },
  {
    release: 52,
    date: '2026-06-08',
    title: 'Review-submitted storage management update',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Submitted macOS 1.14 build 23 and iOS 1.1 build 14 with the latest storage management, search, and share-link fixes.',
  },
  {
    release: 53,
    date: '2026-06-08',
    title: 'Transfer Manager and task history',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Added visible transfer and operation tracking for uploads, downloads, archives, share links, metadata saves, completion states, and recent task history.',
  },
  {
    release: 54,
    date: '2026-06-08',
    title: 'Quick Upload with temporary share links',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Connected upload and presigned-link creation so users can add an object and generate a private temporary download link from one workflow.',
  },
  {
    release: 55,
    date: '2026-06-08',
    title: 'Object preview workflow refresh',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Kept preview close to the explorer so users can verify selected files before download, rename, copy, metadata editing, or secure sharing.',
  },
  {
    release: 56,
    date: '2026-06-08',
    title: 'Object metadata editor',
    platform: ['Web', 'iOS', 'macOS'],
    summary:
      'Added editable content type, cache-control, and custom metadata controls for supported S3-compatible object update workflows.',
  },
  {
    release: 57,
    date: '2026-06-08',
    title: 'Apple Shortcuts and App Intents foundation',
    platform: ['iOS', 'macOS'],
    summary:
      'Added native Apple workflow entries for opening S3Panel, quick upload, share-link creation, explorer access, and release notes.',
  },
];

export const latestChangelogEntry = changelogEntries[changelogEntries.length - 1];
