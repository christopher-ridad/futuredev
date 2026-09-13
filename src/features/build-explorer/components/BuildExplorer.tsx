"use client";

import { useState } from "react";
import { buildPaths } from "@/content/buildPaths";
import { projects } from "@/content/projects";
import type { BuildCategory } from "@/types";
import { BuildCategorySelector } from "./BuildCategorySelector";
import { BuildPathPanel } from "./BuildPathPanel";

export function BuildExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<BuildCategory>("web");

  const selectedBuildPath =
    buildPaths.find((path) => path.id === selectedCategory) ?? buildPaths[0];

  const relatedProjects = projects.filter((project) =>
    selectedBuildPath.relatedProjectIds.includes(project.id),
  );

  return (
    <div className="flex flex-col gap-6">
      <BuildCategorySelector
        buildPaths={buildPaths}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <BuildPathPanel buildPath={selectedBuildPath} relatedProjects={relatedProjects} />
    </div>
  );
}
