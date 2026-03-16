# The Startup Obituary — AI Era Edition

Obituaries for obscure post-ChatGPT AI startups that shut down. Lessons from the companies most founders never heard of.

Built with Next.js, Tailwind CSS, and MDX.

## What is this?

Every startup profiled here was founded in 2022 or later — after ChatGPT proved that large language models were a platform shift. These are not famous flameouts. These are the small teams, YC batches, and angel-backed experiments that tried to build on the GPT wave and didn't make it.

Their stories hold the sharpest lessons for the next generation of AI founders.

## Currently profiled

| Company | Category | Cause of Death | Funding |
|---------|----------|---------------|---------|
| CodeParrot | Dev Tools | No PMF | $500K (YC W23) |
| Booth AI | Content Gen | Commoditized | ~$500K (YC W23) |
| theGist | Enterprise AI | No PMF | $7M |
| Yara AI | AI Companions | No PMF | <$1M |
| Astra | AI Agents | Founder Issues | Angel-backed |
| Wuri | AI Wrappers | No PMF | ~$1M (YC W23) |
| Safurai | Dev Tools | Commoditized | $120K (Techstars) |
| Icon | Content Gen | Burned Cash | $9.2M (Founders Fund) |
| InsurStaq.ai | Enterprise AI | No PMF | Undisclosed |
| GenWise | AI Companions | No PMF | $3.5M |

## Prerequisites

- Node.js 20+
- npm 10+

## Getting Started

```bash
git clone https://github.com/charliespy/startup-obituary.git
cd startup-obituary
npm install
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

## Adding a Startup

Create a new `.mdx` file in `content/startups/` with YAML frontmatter and a 400-800 word narrative body. See `lib/types.ts` for the full schema. Run `npm run build` to validate.

Or use the generation script:

```bash
export OPENAI_API_KEY="sk-..."
npx tsx scripts/generate.ts "Startup Name"
```

Review and edit the output before committing — AI-generated facts should be verified.

## Content Structure

Each startup is a single `.mdx` file in `content/startups/`:

```yaml
---
name: "Company Name"
slug: "company-name"
tagline: "A punchy editorial headline"
founded: 2023
died: 2025
status: "dead"
location: "City, Country"
totalFunding: "$XM"
peakValuation: "$XM"
peakEmployees: 10
causeOfDeath: "no-pmf"          # no-pmf | burned-cash | commoditized | founder-issues | platform-risk
aiSubcategory: "dev-tools"      # ai-wrappers | dev-tools | enterprise-ai | content-generation | ai-companions | ai-agents
keyMilestones:
  - "Milestone 1"
sources:
  - title: "Source Name"
    url: "https://..."
---

The narrative body goes here, written in plain paragraphs.
```

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

The site is fully static — `npm run build` pre-renders all pages. Deploy to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

On Vercel, connect the repo and it will build automatically with zero configuration.
