"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useProjectFilters } from "@/features/projects/hooks/useProjectFilters";
import { parseProjectCategoryFilter, type ProjectCategoryFilter } from "@/features/projects/projectFilters";
import { ProjectFilters } from "@/features/projects/components/ProjectFilters";
import { ProjectGrid } from "@/features/projects/components/ProjectGrid";
import type { Project } from "@/types";

type ProjectsExplorerProps = {
  projects: Project[];
};

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { selectedCategory, setSelectedCategory, filteredProjects } = useProjectFilters(
    projects,
    parseProjectCategoryFilter(searchParams.get("category")),
  );

  function handleSelect(category: ProjectCategoryFilter) {
    setSelectedCategory(category);

    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div className="flex flex-col gap-8">
      <ProjectFilters selectedCategory={selectedCategory} onSelect={handleSelect} />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
