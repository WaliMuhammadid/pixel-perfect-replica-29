# Softadex - Premium Digital Agency

This is the codebase for the **Softadex** premium digital agency website. Designed with a dark-first theme, cinematic 3D animations, and high-performance WebGL integrations.

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- Framer Motion (Page transitions, scroll reveals, SVG animations)
- React Three Fiber & Drei (WebGL, 3D Hero Scene)
- Lenis (Smooth Scrolling)

## Local Development
1. Clone this repository.
2. Install dependencies (we recommend using `--legacy-peer-deps` due to React Three Fiber peer dependencies):
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Editing Content
All dynamic content for Portfolios, Products, Services, and the Roadmap is stored in `src/lib/data.ts`.
- To add a new project, simply append an object to `projectsData`. The dynamic route `/projects/[slug]` will automatically generate the case study page.
- Similarly, edit `productsData` and `roadmapData` for their respective sections.

## Deployment (Netlify)
This project is configured out of the box for Netlify via the `netlify.toml` file.
1. Connect your GitHub repository to Netlify.
2. It will automatically detect Next.js.
3. The build command is `npm run build` and publish directory is `.next`.
4. We are using `@netlify/plugin-nextjs` for seamless integration.

## Quality Standards
- Strict TypeScript enabled.
- Lighthouse performance targets: 90+ across all metrics.
- Built-in accessibility (a11y) support and semantic HTML.
