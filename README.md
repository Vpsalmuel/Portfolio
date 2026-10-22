# Samuel Daniel — Portfolio

Personal portfolio built with [Astro](https://astro.build).

## Editing content

- `src/data/site.ts` — bio, experience, stats, services, process, gallery, contact links
- `src/data/projects.ts` — the case studies (Rex Insurance, Losode, Divvy)
- `src/assets/work/` — project images (referenced by file name in the data files)
- `public/samuel-daniel-cv.pdf` — the CV linked from the site

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Deploying

The site deploys to Vercel automatically on every push to `main`.
