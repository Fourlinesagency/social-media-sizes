export declare const LAST_CHECKED = "2026-10-19";
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
    source?: {
        label: string;
        url: string;
    };
};
/** Instagram's @creators account announced the 5-hashtag cap on Threads in December 2025 (rolled out gradually). */
export declare const IG_HASHTAG_SOURCE: {
    label: string;
    url: string;
};
export declare const IG_MAX_HASHTAGS = 5;
export declare const textLimits: TextLimit[];
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
export declare const imagePresets: ImagePreset[];
/** Marketplace product photo sizes (product photo maker). Checked separately from LAST_CHECKED. */
export declare const PRODUCT_CHECKED = "2026-10-22";
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
    source: {
        label: string;
        url: string;
    };
};
export declare const productPresets: ProductPreset[];
/**
 * Where story/reel apps draw their own buttons on a 1080 × 1920 frame (same numbers as the post maker's safe-zone
 * preview): top bar, bottom caption/buttons, right action rail. Preview guides only.
 */
export declare const STORY_SAFE: {
    width: number;
    height: number;
    top: number;
    bottom: number;
    right: number;
};
/** Instagram's profile grid shows the middle 3:4 of each post (since January 2025; adjustable per post in the app). */
export declare const IG_GRID_RATIO: number;
/** Safe zones for 9:16 videos, checked 2026-11-05 against each platform's own ad specs. */
export declare const SAFE_ZONES_CHECKED = "2026-11-05";
export type SafeZone = {
    id: 'tiktok' | 'reels' | 'shorts';
    platform: string;
    /** Margins in px on a 1080 × 1920 frame, where the app draws its buttons, caption and profile row. */
    top: number;
    bottom: number;
    left: number;
    right: number;
    /** An extra blocked box (the right-hand button column) from `y` down to the bottom margin, between x0 and x1. */
    notch?: {
        x0: number;
        x1: number;
        y: number;
    };
    how: string;
    source: {
        label: string;
        url: string;
    };
};
export declare const safeZones: SafeZone[];
/** WhatsApp sticker rules (github.com/WhatsApp/stickers, Android README, checked 2026-11-05). */
export declare const WHATSAPP_STICKER: {
    size: number;
    maxBytes: number;
    stroke: number;
    trayIcon: number;
    trayMaxBytes: number;
    packMin: number;
    packMax: number;
    source: {
        label: string;
        url: string;
    };
};
