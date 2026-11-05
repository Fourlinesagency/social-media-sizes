// node test/test.mjs: sanity checks on the data, and writes data.json (the same data as plain JSON).
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as d from '../src/index.ts';

let fail = 0;
const bad = (m) => { fail++; console.log('FAIL', m); };
for (const list of [d.textLimits, d.imagePresets, d.productPresets, d.safeZones]) {
  const ids = new Set();
  for (const x of list) {
    if (ids.has(x.id)) bad(`duplicate id ${x.id}`);
    ids.add(x.id);
    if (x.source && !/^https:\/\//.test(x.source.url)) bad(`${x.id}: source is not https`);
  }
}
for (const t of d.textLimits) if (!(t.limit > 0) || (t.fold && t.fold >= t.limit)) bad(`${t.id}: limit/fold`);
for (const p of [...d.imagePresets, ...d.productPresets]) if (!(p.width > 0 && p.height > 0)) bad(`${p.id}: size`);
for (const z of d.safeZones) if (z.top + z.bottom >= 1920 || z.left + z.right >= 1080) bad(`${z.id}: margins`);
const json = {
  lastChecked: d.LAST_CHECKED, productChecked: d.PRODUCT_CHECKED, safeZonesChecked: d.SAFE_ZONES_CHECKED,
  textLimits: d.textLimits, instagramMaxHashtags: { value: d.IG_MAX_HASHTAGS, source: d.IG_HASHTAG_SOURCE },
  imagePresets: d.imagePresets, productPresets: d.productPresets, storySafe: d.STORY_SAFE,
  instagramGridRatio: d.IG_GRID_RATIO, safeZones: d.safeZones, whatsappSticker: d.WHATSAPP_STICKER,
};
writeFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'data.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`${d.textLimits.length} text limits, ${d.imagePresets.length} image sizes, ${d.productPresets.length} marketplace, ${d.safeZones.length} safe zones`);
console.log(fail ? `${fail} FAILED` : 'ALL PASS (data.json written)');
process.exit(fail ? 1 : 0);
