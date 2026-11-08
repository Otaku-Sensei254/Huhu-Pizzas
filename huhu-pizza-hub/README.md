# Huhus Pizza & Grill

React single-page website for Huhus Pizza & Grill in Kitisuru, Nairobi. The app uses Vite, React Router, and Vitest.

## Local development

Requires Node.js 20.19 or newer.

```sh
npm install
npm start
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Build and preview

```sh
npm run build
npm run preview
```

The production site is written to `build/`. Deploy the contents of that directory. The `public/_headers` file configures security headers on static hosts that support the Netlify/Cloudflare Pages `_headers` format; configure equivalent response headers in other hosting platforms.

## Search metadata

The root HTML includes the default page metadata and Restaurant structured data. Route titles, descriptions, and canonical links are updated by the client-side SEO manager. `public/robots.txt` and `public/sitemap.xml` list the public routes.
