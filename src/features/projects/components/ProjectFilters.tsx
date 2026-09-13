import type { ProjectCategoryFilter } from "@/features/projects/projectFilters";
import { projectCategoryLabels } from "@/features/projects/projectCategoryLabels";
import type { ProjectCategory } from "@/types";

const categories: ProjectCategory[] = ["web", "mobile", "game", "technical"];

type ProjectFiltersProps = {
  selectedCategory: ProjectCategoryFilter;
  onSelect: (category: ProjectCategoryFilter) => void;
};

export function ProjectFilters({ selectedCategory, onSelect }: ProjectFiltersProps) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      <FilterButton isSelected={selectedCategory === "all"} onClick={() => onSelect("all")}>
        All
      </FilterButton>
      {categories.map((category) => (
        <FilterButton
          key={category}
          isSelected={selectedCategory === category}
          onClick={() => onSelect(category)}
        >
          {projectCategoryLabels[category]}
        </FilterButton>
      ))}
    </div>
  );
}

type FilterButtonProps = {
  isSelected: boolean;
  onClick: () => void;
  children: string;
};

function FilterButton({ isSelected, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green ${
        isSelected
          ? "border-accent-green bg-accent-green text-background"
          : "border-border text-foreground-muted hover:border-accent-violet"
      }`}
    >
      {children}
    </button>
  );
}
