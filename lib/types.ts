export type CauseOfDeath =
  | "no-pmf"
  | "burned-cash"
  | "commoditized-by-platform"
  | "competition"
  | "acqui-hired"
  | "regulation"
  | "ethics-scandal"
  | "founder-issues";

export type AISubcategory =
  | "content-generation"
  | "image-generation"
  | "coding-tools"
  | "ai-agents"
  | "ai-companions"
  | "healthcare-ai"
  | "autonomous-vehicles"
  | "enterprise-ai"
  | "search";

export type StartupStatus = "dead" | "declining" | "pivoted" | "acqui-hired";

export interface StartupFrontmatter {
  name: string;
  slug: string;
  tagline: string;
  founded: number;
  died: number | string;
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
  "commoditized-by-platform": "Commoditized",
  competition: "Competition",
  "acqui-hired": "Acqui-hired",
  regulation: "Regulation",
  "ethics-scandal": "Ethics Scandal",
  "founder-issues": "Founder Issues",
};

export const SUBCATEGORY_LABELS: Record<AISubcategory, string> = {
  "content-generation": "Content Gen",
  "image-generation": "Image Gen",
  "coding-tools": "Coding Tools",
  "ai-agents": "AI Agents",
  "ai-companions": "AI Companions",
  "healthcare-ai": "Healthcare AI",
  "autonomous-vehicles": "Self-Driving",
  "enterprise-ai": "Enterprise AI",
  search: "Search",
};
