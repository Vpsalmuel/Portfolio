// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  // Production address, so canonical links and share images are absolute
  site: "https://kufrey-portfolio.vercel.app",
  devToolbar: { enabled: false },
});
