import type { Project, ProjectCategory } from "@/types";

export type ProjectCategoryFilter = "all" | ProjectCategory;

const projectCategories: ProjectCategory[] = ["web", "mobile", "game", "ai"];

export function filterProjectsByCategory(
  projects: Project[],
  category: ProjectCategoryFilter,
): Project[] {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}

export function parseProjectCategoryFilter(value: string | null | undefined): ProjectCategoryFilter {
  return projectCategories.includes(value as ProjectCategory) ? (value as ProjectCategory) : "all";
}
