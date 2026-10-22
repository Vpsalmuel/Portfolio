import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/work/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

/** Look up an image in src/assets/work by file name, e.g. img("losode-pdp.png"). */
export function img(name: string): ImageMetadata {
  const hit = files[`../assets/work/${name}`];
  if (!hit) throw new Error(`Missing image: src/assets/work/${name}`);
  return hit.default;
}
