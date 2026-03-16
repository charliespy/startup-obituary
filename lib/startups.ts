import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Startup, StartupFrontmatter, validateFrontmatter } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content/startups");

export function getAllStartups(): Startup[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(CONTENT_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      validateFrontmatter(data, filename);
      return {
        ...(data as StartupFrontmatter),
        content,
      };
    })
    .sort((a, b) => {
      const aYear = typeof a.died === "number" ? a.died : 9999;
      const bYear = typeof b.died === "number" ? b.died : 9999;
      return bYear - aYear;
    });
}

export function getStartupBySlug(slug: string): Startup | undefined {
  const safe = slug.replace(/[^a-z0-9-]/g, "");
  const filePath = path.join(CONTENT_DIR, `${safe}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  validateFrontmatter(data, `${safe}.mdx`);
  return { ...(data as StartupFrontmatter), content };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
