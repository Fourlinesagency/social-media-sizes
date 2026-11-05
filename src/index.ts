// Platform limits and image sizes. Single source of truth for tools AND guide pages.
// Every value must be re-checked against the platform's own help pages before launch
// and each January; bump LAST_CHECKED when you do.

export const LAST_CHECKED = '2026-10-19';

export type TextLimit = {
  id: string;
  platform: string;
  field: string;
  limit: number;
  /** Approximate characters visible before "more" / truncation, if the platform folds text. */
  fold?: number;
  /** X counts URLs as 23 and most non-Latin characters/emoji as 2. */
  weighted?: boolean;
  note?: string;
  /** Official page that states the limit. No source = measured in the app (no official page found). */
  source?: { label: string; url: string };
};

const SRC = {
  x: { label: 'X developer docs', url: 'https://docs.x.com/fundamentals/counting-characters' },
  igApi: { label: 'Meta for Developers', url: 'https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media' },
  threads: { label: 'Threads API docs', url: 'https://developers.facebook.com/docs/threads/posts' },
  youtube: { label: 'YouTube Help', url: 'https://support.google.com/youtube/answer/57404' },
  google: { label: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/snippet' },
};
/** Instagram's @creators account announced the 5-hashtag cap on Threads in December 2025 (rolled out gradually). */
export const IG_HASHTAG_SOURCE = { label: 'Instagram @creators announcement', url: 'https://www.threads.com/@creators/post/DSalXGPCWM4' };
export const IG_MAX_HASHTAGS = 5;

export const textLimits: TextLimit[] = [
  { id: 'x-post', platform: 'X (Twitter)', field: 'Post', limit: 280, weighted: true, note: 'Premium accounts can post up to 25,000; links always count as 23.', source: SRC.x },
  { id: 'instagram-caption', platform: 'Instagram', field: 'Caption', limit: 2200, fold: 125, note: 'Max 5 hashtags (since December 2025).', source: SRC.igApi },
  { id: 'instagram-bio', platform: 'Instagram', field: 'Bio', limit: 150 },
  { id: 'threads-post', platform: 'Threads', field: 'Post', limit: 500, note: 'Up to 5 links per post.', source: SRC.threads },
  { id: 'facebook-post', platform: 'Facebook', field: 'Post', limit: 63206, fold: 125 },
  { id: 'linkedin-post', platform: 'LinkedIn', field: 'Post', limit: 3000, fold: 210 },
  { id: 'linkedin-headline', platform: 'LinkedIn', field: 'Headline', limit: 220 },
  { id: 'tiktok-caption', platform: 'TikTok', field: 'Caption', limit: 4000 },
  { id: 'tiktok-bio', platform: 'TikTok', field: 'Bio', limit: 80 },
  { id: 'youtube-title', platform: 'YouTube', field: 'Title', limit: 100, fold: 70, source: SRC.youtube },
  { id: 'youtube-description', platform: 'YouTube', field: 'Description', limit: 5000, fold: 157, source: SRC.youtube },
  { id: 'pinterest-title', platform: 'Pinterest', field: 'Pin title', limit: 100, fold: 40 },
  { id: 'pinterest-description', platform: 'Pinterest', field: 'Pin description', limit: 500 },
  { id: 'bluesky-post', platform: 'Bluesky', field: 'Post', limit: 300 },
  { id: 'google-business-post', platform: 'Google Business Profile', field: 'Update', limit: 1500 },
  { id: 'meta-description', platform: 'Google search', field: 'Meta description', limit: 160, note: 'No fixed limit: Google truncates by pixel width, so ~155–160 characters is the safe range.', source: SRC.google },
];

export type ImagePreset = {
  id: string;
  platform: string;
  name: string;
  width: number;
  height: number;
  /** Shown as a circle on the platform: we preview it that way. */
  circle?: boolean;
  note?: string;
};

/** Instagram Help Center (help.instagram.com/1631821640426723, checked 2026-10-23): photos between 1.91:1 and 3:4 keep
 * their resolution at 1080 px wide, i.e. heights 566–1440 (ig-tall, ig-portrait, ig-square). */

export const imagePresets: ImagePreset[] = [
  { id: 'ig-tall', platform: 'Instagram', name: 'Post (portrait 3:4)', width: 1080, height: 1440, note: 'The tallest photo Instagram keeps uncropped; the same shape as a profile-grid tile.' },
  { id: 'ig-portrait', platform: 'Instagram', name: 'Post (portrait 4:5)', width: 1080, height: 1350 },
  { id: 'ig-square', platform: 'Instagram', name: 'Post (square)', width: 1080, height: 1080 },
  { id: 'ig-story', platform: 'Instagram', name: 'Story / Reel (9:16)', width: 1080, height: 1920 },
  { id: 'ig-profile', platform: 'Instagram', name: 'Profile picture', width: 320, height: 320, circle: true },
  { id: 'fb-post', platform: 'Facebook', name: 'Feed post', width: 1080, height: 1350 },
  { id: 'fb-cover', platform: 'Facebook', name: 'Page cover', width: 851, height: 315, note: 'Mobile crops the sides; keep text in the middle.' },
  { id: 'fb-event', platform: 'Facebook', name: 'Event cover', width: 1920, height: 1005 },
  { id: 'x-post', platform: 'X (Twitter)', name: 'Post image (16:9)', width: 1600, height: 900 },
  { id: 'x-header', platform: 'X (Twitter)', name: 'Header', width: 1500, height: 500 },
  { id: 'linkedin-post', platform: 'LinkedIn', name: 'Post image', width: 1200, height: 627 },
  { id: 'linkedin-banner', platform: 'LinkedIn', name: 'Profile banner', width: 1584, height: 396 },
  { id: 'yt-thumbnail', platform: 'YouTube', name: 'Thumbnail', width: 1280, height: 720 },
  { id: 'yt-banner', platform: 'YouTube', name: 'Channel banner', width: 2560, height: 1440, note: 'Safe area for all devices is the centre 1546 × 423.' },
  { id: 'pinterest-pin', platform: 'Pinterest', name: 'Standard pin (2:3)', width: 1000, height: 1500 },
  { id: 'tiktok-cover', platform: 'TikTok', name: 'Video cover (9:16)', width: 1080, height: 1920 },
  { id: 'whatsapp-dp', platform: 'WhatsApp', name: 'Profile photo', width: 640, height: 640, circle: true },
  { id: 'whatsapp-status', platform: 'WhatsApp', name: 'Status', width: 1080, height: 1920 },
  { id: 'threads-post', platform: 'Threads', name: 'Post image', width: 1080, height: 1350 },
];

/** Marketplace product photo sizes (product photo maker). Checked separately from LAST_CHECKED. */
export const PRODUCT_CHECKED = '2026-10-22';

export type ProductPreset = {
  id: string;
  platform: string;
  width: number;
  height: number;
  /** Default share of the frame the product fills (longest side, limiting dimension). */
  fill: number;
  /** Lowest fill the platform accepts for a main image, if it states one. */
  minFill?: number;
  /** The platform requires pure white (#FFFFFF) behind the main image. */
  white?: boolean;
  /** Re-encode until the file is under this size (the platform warns about bigger files). */
  maxBytes?: number;
  note: string;
  source: { label: string; url: string };
};

export const productPresets: ProductPreset[] = [
  {
    id: 'amazon', platform: 'Amazon', width: 2000, height: 2000, fill: 0.87, minFill: 0.85, white: true,
    note: 'Main image: pure white (RGB 255, 255, 255), product fills 85% or more of the frame, at least 1000 px on the longest side for zoom.',
    source: { label: 'Amazon Seller Forums', url: 'https://sellercentral.amazon.com/seller-forums/discussions/t/13af96ea-6b07-4bf9-8dbe-a13292c2e3b1' },
  },
  {
    id: 'shopify', platform: 'Shopify', width: 2048, height: 2048, fill: 0.8,
    note: 'Square 2048 × 2048 usually displays best. Up to 5000 × 5000 px and 20 MB.',
    source: { label: 'Shopify Help Center', url: 'https://help.shopify.com/en/manual/products/product-media/product-media-types' },
  },
  {
    id: 'etsy', platform: 'Etsy', width: 3000, height: 2250, fill: 0.7, maxBytes: 1_000_000,
    note: 'At least 2000 px wide and tall; first photo landscape or square, with space around the item so Etsy can crop thumbnails. Files over 1 MB may not finish uploading.',
    source: { label: 'Etsy Help', url: 'https://help.etsy.com/hc/en-us/articles/115015663347' },
  },
  {
    id: 'ebay', platform: 'eBay', width: 1600, height: 1600, fill: 0.85,
    note: 'About 1600 × 1600 recommended, at least 500 × 500, up to 12 MB. White backgrounds are generally best.',
    source: { label: 'eBay Help', url: 'https://www.ebay.com/help/selling/listings/adding-pictures-listings?id=4148' },
  },
];

/**
 * Where story/reel apps draw their own buttons on a 1080 × 1920 frame (same numbers as the post maker's safe-zone
 * preview): top bar, bottom caption/buttons, right action rail. Preview guides only.
 */
export const STORY_SAFE = { width: 1080, height: 1920, top: 250, bottom: 340, right: 120 };
/** Instagram's profile grid shows the middle 3:4 of each post (since January 2025; adjustable per post in the app). */
export const IG_GRID_RATIO = 3 / 4;

/** Safe zones for 9:16 videos, checked 2026-11-05 against each platform's own ad specs. */
export const SAFE_ZONES_CHECKED = '2026-11-05';

export type SafeZone = {
  id: 'tiktok' | 'reels' | 'shorts';
  platform: string;
  /** Margins in px on a 1080 × 1920 frame, where the app draws its buttons, caption and profile row. */
  top: number;
  bottom: number;
  left: number;
  right: number;
  /** An extra blocked box (the right-hand button column) from `y` down to the bottom margin, between x0 and x1. */
  notch?: { x0: number; x1: number; y: number };
  how: string;
  source: { label: string; url: string };
};

export const safeZones: SafeZone[] = [
  {
    id: 'tiktok', platform: 'TikTok', top: 240, bottom: 660, left: 120, right: 120, notch: { x0: 780, x1: 960, y: 840 },
    how: 'Measured from TikTok’s In-Feed “Standard Version LTR” safe-zone template (720 × 1280, scaled to 1080 × 1920): 80 px sides, 160 px top, 440 px bottom, and the button column 720 px from the bottom.',
    source: { label: 'TikTok Ads Help: In-Feed ads specs', url: 'https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads' },
  },
  {
    id: 'reels', platform: 'Instagram Reels', top: 269, bottom: 672, left: 65, right: 65,
    how: 'Meta’s Reels ad guide: “leaving at least 14% of the top, 35% of the bottom, and 6% on each side of your asset free from text, logos, or other important creative elements.”',
    source: { label: 'Meta Ads Guide: Instagram Reels', url: 'https://www.facebook.com/business/ads-guide/update/video/instagram-reels' },
  },
  {
    id: 'shorts', platform: 'YouTube Shorts', top: 288, bottom: 672, left: 48, right: 192,
    how: 'Measured from Google’s vertical video safe-zone overlay (1080 × 1920) linked from the Google Ads video specs page.',
    source: { label: 'Google Ads Help: About video ad specs', url: 'https://support.google.com/google-ads/answer/13547298' },
  },
];

/** WhatsApp sticker rules (github.com/WhatsApp/stickers, Android README, checked 2026-11-05). */
export const WHATSAPP_STICKER = {
  size: 512,
  maxBytes: 100_000,
  stroke: 8,
  trayIcon: 96,
  trayMaxBytes: 50_000,
  packMin: 3,
  packMax: 30,
  source: { label: 'WhatsApp stickers README (GitHub)', url: 'https://github.com/WhatsApp/stickers/blob/main/Android/README.md' },
};
