export type CauseOfDeath =
  | "no-pmf"
  | "burned-cash"
  | "commoditized"
  | "founder-issues"
  | "platform-risk";

export type AISubcategory =
  | "ai-wrappers"
  | "dev-tools"
  | "enterprise-ai"
  | "content-generation"
  | "ai-companions"
  | "ai-agents";

export type StartupStatus = "dead";

export interface StartupFrontmatter {
  name: string;
  slug: string;
  tagline: string;
  founded: number;
  died: number;
  status: StartupStatus;
  location: string;
  totalFunding: string;
  peakValuation: string;
  peakEmployees: number;
  causeOfDeath: CauseOfDeath;
  aiSubcategory: AISubcategory;
  keyMilestones: string[];
  sources: { title: string; url: string }[];
}

export interface Startup extends StartupFrontmatter {
  content: string;
}

export const CAUSE_LABELS: Record<CauseOfDeath, string> = {
  "no-pmf": "No PMF",
  "burned-cash": "Burned Cash",
  commoditized: "Commoditized",
  "founder-issues": "Founder Issues",
  "platform-risk": "Platform Risk",
};

export const REQUIRED_FRONTMATTER_FIELDS: (keyof StartupFrontmatter)[] = [
  "name",
  "slug",
  "tagline",
  "founded",
  "died",
  "status",
  "causeOfDeath",
  "aiSubcategory",
  "sources",
];

export function validateFrontmatter(data: Record<string, unknown>, filename: string): void {
  for (const field of REQUIRED_FRONTMATTER_FIELDS) {
    if (data[field] === undefined || data[field] === null) {
      throw new Error(`Missing required field "${field}" in ${filename}`);
    }
  }
}

export const SUBCATEGORY_LABELS: Record<AISubcategory, string> = {
  "ai-wrappers": "AI Wrappers",
  "dev-tools": "Dev Tools",
  "enterprise-ai": "Enterprise AI",
  "content-generation": "Content Gen",
  "ai-companions": "AI Companions",
  "ai-agents": "AI Agents",
};
