import { useMemo, useState } from "react";
import type { Project } from "@/types";
import { filterProjectsByCategory, type ProjectCategoryFilter } from "@/features/projects/projectFilters";

export function useProjectFilters(projects: Project[], initialCategory: ProjectCategoryFilter = "all") {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryFilter>(initialCategory);

  const filteredProjects = useMemo(
    () => filterProjectsByCategory(projects, selectedCategory),
    [projects, selectedCategory],
  );

  return { selectedCategory, setSelectedCategory, filteredProjects };
}
