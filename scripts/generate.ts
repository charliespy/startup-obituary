import OpenAI from "openai";
import fs from "fs";
import path from "path";

const SYSTEM_PROMPT = `You are a brilliant narrative journalist writing obituaries for failed AI startups. Your style is novelistic and cinematic:

- Write in SHORT, PUNCHY paragraphs. Many should be a single sentence.
- Use dramatic pacing. Drop facts like plot twists.
- Open with a hook — a striking fact, a date, a number.
- Weave hard data (funding, valuations, headcount) INTO the narrative naturally, not as bullet points.
- Include real quotes from employees, founders, or reviewers (Glassdoor, Blind, news articles) when available.
- Use non-linear timeline — jump between the ending and the origin story.
- End with a reflection or lesson, but keep it sharp, not preachy.
- The tone is serious but with dry wit. Not snarky, not mean — but honest.
- Write 600-1000 words.

You will also output structured frontmatter data about the startup.`;

const USER_PROMPT = (startupName: string) =>
  `Research and write a full obituary for the AI startup "${startupName}".

Output the result in this exact format — MDX with YAML frontmatter:

\`\`\`mdx
---
name: "Company Name"
slug: "company-name"
tagline: "A punchy one-line editorial headline (not just the name)"
founded: YYYY
died: YYYY or "ongoing"
status: "dead" | "declining" | "pivoted" | "acqui-hired"
location: "City, State/Country"
totalFunding: "$XXM"
peakValuation: "$XXB"
peakEmployees: NNN
causeOfDeath: "no-pmf" | "burned-cash" | "commoditized-by-platform" | "competition" | "acqui-hired" | "regulation" | "ethics-scandal" | "founder-issues"
aiSubcategory: "content-generation" | "image-generation" | "coding-tools" | "ai-agents" | "ai-companions" | "healthcare-ai" | "autonomous-vehicles" | "enterprise-ai" | "search"
keyMilestones:
  - "Milestone 1"
  - "Milestone 2"
sources:
  - title: "Source Name"
    url: "https://..."
---

[The novelistic narrative goes here]
\`\`\`

Be factually accurate. Use real dates, real funding numbers, real names. If you're unsure about a specific detail, note it with [unverified] so the reviewer can check.`;

async function main() {
  const startupName = process.argv[2];

  if (!startupName) {
    console.error("Usage: npx tsx scripts/generate.ts 'Startup Name'");
    process.exit(1);
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("Error: OPENAI_API_KEY environment variable is required");
    process.exit(1);
  }

  const client = new OpenAI({ apiKey });

  console.log(`Researching and generating obituary for: ${startupName}...`);

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: USER_PROMPT(startupName) },
    ],
    temperature: 0.7,
    max_completion_tokens: 4000,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    console.error("No content returned from OpenAI");
    process.exit(1);
  }

  // Extract MDX content from between ```mdx and ``` markers
  const mdxMatch = content.match(/```mdx\n([\s\S]*?)```/);
  const mdxContent = mdxMatch ? mdxMatch[1].trim() : content.trim();

  // Extract slug from frontmatter and sanitize to prevent path traversal
  const slugMatch = mdxContent.match(/slug:\s*"([^"]+)"/);
  const rawSlug = slugMatch
    ? slugMatch[1]
    : startupName.toLowerCase().replace(/\s+/g, "-");
  const slug = rawSlug.replace(/[^a-z0-9-]/g, "");

  const outputPath = path.join(
    process.cwd(),
    "content",
    "startups",
    `${slug}.mdx`
  );

  fs.writeFileSync(outputPath, mdxContent + "\n");
  console.log(`\nGenerated: ${outputPath}`);
  console.log(`\nPlease review and edit the file before committing.`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
