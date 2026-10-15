# Debjyoti Chowbey — Personal Portfolio (2025)

Single-page portfolio built with React 18, TypeScript, Vite and Tailwind CSS. It is a fully static site — no server or database — so it can be hosted free on GitHub Pages, Netlify, Vercel or Cloudflare Pages.

> The newer research portfolio lives in [Debjyoti-Portfolio](https://github.com/deb7741/Debjyoti-Portfolio).

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run check     # TypeScript check
npm run build     # outputs static files to dist/
npm run preview   # serve the production build
```

## Deploy to GitHub Pages

```bash
BASE_PATH=/personal-portfolio/ npm run build
```

Then publish the `dist/` folder (for example with the `actions/deploy-pages` GitHub Action). For a custom domain or a `<user>.github.io` repository, build without `BASE_PATH`.

## Structure

```
client/
  index.html            page <head>, meta tags
  public/               headshot, favicon (served as-is)
  src/components/       one file per page section
  src/components/icon.tsx  SVG icon set (lucide)
  src/pages/portfolio.tsx  page layout + scroll animations
```

The contact form opens the visitor's email app with the message pre-filled (there is no backend to send it).
