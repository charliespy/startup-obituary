# The Startup Obituary

A retro newspaper-styled site presenting AI-era startup failures (2022+) as novelistic long-form obituaries. Built with Next.js, Tailwind CSS, and MDX.

Each obituary tells the cinematic rise-and-fall story of a startup — not a bullet-point post-mortem, but a narrative.

## Prerequisites

- Node.js 20+
- npm 10+

## Getting Started

```bash
# Clone the repo
git clone https://github.com/charliespy/startup-obituary.git
cd startup-obituary

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build (static generation) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Generating New Obituaries

An OpenAI-powered script produces new startup obituary files from a name:

```bash
export OPENAI_API_KEY="sk-..."
npx tsx scripts/generate.ts "Startup Name"
```

This creates a new `.mdx` file in `content/startups/` with YAML frontmatter and a narrative body. Review and edit the file before committing — AI-generated facts should be verified.

## Content Structure

Each startup is a single `.mdx` file in `content/startups/`:

```yaml
---
name: "Jasper AI"
slug: "jasper-ai"
tagline: "The $1.5B content machine that ChatGPT buried"
founded: 2021
died: 2023
status: "declining"           # dead | declining | pivoted | acqui-hired
location: "Austin, TX"
totalFunding: "$131M"
peakValuation: "$1.5B"
peakEmployees: 600
causeOfDeath: "commoditized-by-platform"
aiSubcategory: "content-generation"
keyMilestones:
  - "Milestone 1"
sources:
  - title: "Source Name"
    url: "https://..."
---

The narrative body goes here, written in plain paragraphs.
```

To add a startup manually, create a new `.mdx` file following this format — no code changes required.

## Project Layout

```
app/                  # Next.js App Router pages
  startup/[slug]/     # Dynamic detail pages
components/           # React components (Masthead, FilterBar, ClippingCard, etc.)
content/startups/     # MDX obituary files (one per startup)
lib/                  # Types, data loading, validation
scripts/              # OpenAI generation script
```

## Deployment

The site is fully static — `npm run build` pre-renders all pages. Deploy to any static host (Vercel, Netlify, Cloudflare Pages, etc.):

```bash
npm run build
```

On Vercel, connect the repo and it will build automatically with zero configuration.
