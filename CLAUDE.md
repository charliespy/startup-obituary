# CLAUDE.md

## Key commands

- `npm run dev` — local dev server
- `npm run build` — production build (validates all MDX frontmatter)
- `npm run lint` — ESLint
- `npx tsx scripts/generate.ts "Startup Name"` — generate obituary draft (requires `OPENAI_API_KEY`)

## Content

- `content/startups/*.mdx` — one file per startup, YAML frontmatter + narrative body
- `lib/types.ts` — type definitions and label maps
- `lib/startups.ts` — file reader and sort logic
- `scripts/generate.ts` — AI-assisted obituary generation

## Writing style

Obituaries are 400-800 words, novelistic narrative. Short punchy paragraphs, real data woven into the story, dry wit, ends with a sharp lesson.
