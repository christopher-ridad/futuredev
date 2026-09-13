"use client";

import { useState } from "react";
import { buildPaths } from "@/content/buildPaths";
import type { BuildCategory, Project } from "@/types";
import { BuildCategorySelector } from "./BuildCategorySelector";
import { BuildPathPanel } from "./BuildPathPanel";

// Related projects are hidden site-wide until the project list is verified —
// see content/projects.ts and features/projects/. Re-enable by resolving
// relatedProjectIds against content/projects again.
const noRelatedProjects: Project[] = [];

export function BuildExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<BuildCategory>("web");

  const selectedBuildPath =
    buildPaths.find((path) => path.id === selectedCategory) ?? buildPaths[0];

  return (
    <div className="flex flex-col gap-6">
      <BuildCategorySelector
        buildPaths={buildPaths}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <BuildPathPanel buildPath={selectedBuildPath} relatedProjects={noRelatedProjects} />
    </div>
  );
}
