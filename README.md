# social-media-sizes

Social media **image sizes, text limits, 9:16 safe zones and marketplace photo rules** as typed data. Every value links
to the platform's own page where we found one. Each group has a "last checked" date.

Available as TypeScript (`src/index.ts`, built to `dist/`) and as plain JSON (`data.json`).

This is the data behind [PrepMyPost](https://prepmypost.com): the
[image size guide](https://prepmypost.com/social-media-image-sizes), the
[character limits](https://prepmypost.com/character-limits), the
[safe-zone checker](https://prepmypost.com/safe-zone-checker) and the resizers and counters.

## What's in it

| Export | What | Sources |
|---|---|---|
| `textLimits` | 16 text limits (X post, Instagram caption and bio, Threads, LinkedIn, TikTok, YouTube title and description, Pinterest, Bluesky, Google Business, meta description), with the "…more" fold point where the platform folds text | 6 link to official docs; the rest were measured in the apps (no official page found) |
| `IG_MAX_HASHTAGS` | Instagram's 5-hashtag cap (December 2025) | Instagram's @creators announcement |
| `imagePresets` | 19 image sizes (Instagram 3:4 / 4:5 / square / story / profile, Facebook, X, LinkedIn, YouTube, Pinterest, TikTok, WhatsApp, Threads) | Instagram sizes follow the Instagram Help Center (1080 px wide, 1.91:1 to 3:4 keep their resolution); the others are the commonly recommended sizes, no source attached |
| `productPresets` | Amazon, Shopify, Etsy, eBay main-image rules (size, how much of the frame the product fills, white background, file size) | each has its source |
| `safeZones` | TikTok, Instagram Reels and YouTube Shorts safe zones on a 1080 × 1920 frame | each has its source and says how it was measured |
| `WHATSAPP_STICKER` | sticker size, byte limits, tray icon, pack size | WhatsApp's stickers README |
| `STORY_SAFE`, `IG_GRID_RATIO` | generic story safe area and Instagram's 3:4 profile-grid crop | |

Dates: `LAST_CHECKED` (text limits and image sizes), `PRODUCT_CHECKED`, `SAFE_ZONES_CHECKED`.

## Use

```js
import { imagePresets, safeZones, textLimits } from 'social-media-sizes';

imagePresets.find((p) => p.id === 'yt-thumbnail');   // { width: 1280, height: 720, … }
textLimits.find((t) => t.id === 'x-post');           // { limit: 280, weighted: true, source: { … } }
```

Or fetch the JSON directly:
`https://raw.githubusercontent.com/Fourlinesagency/social-media-sizes/main/data.json`

Install from GitHub (not on npm yet): `npm install github:Fourlinesagency/social-media-sizes`

## Corrections welcome

Platforms change these numbers often. If you spot one that's out of date, please open an issue with a link to the
platform's own page. Help pages and ad specs are better than blog posts.

`npm test` runs sanity checks and regenerates `data.json` from `src/index.ts`.

## Licence

MIT, © 2026 [Fourlines Agency](https://fourlinesagency.com).
