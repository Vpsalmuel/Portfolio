// @ts-check
import { defineConfig } from 'astro/config';

// On Vercel, use the production address so share images get an absolute URL.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

// https://astro.build/config
export default defineConfig({
  site: vercelUrl ? `https://${vercelUrl}` : undefined,
  devToolbar: { enabled: false },
});
