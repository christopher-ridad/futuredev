import { useRef, type KeyboardEvent } from "react";
import type { BuildCategory, BuildPath } from "@/types";

type BuildCategorySelectorProps = {
  buildPaths: BuildPath[];
  selectedCategory: BuildCategory;
  onSelect: (category: BuildCategory) => void;
};

export function BuildCategorySelector({
  buildPaths,
  selectedCategory,
  onSelect,
}: BuildCategorySelectorProps) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function focusAndSelect(index: number) {
    const wrappedIndex = (index + buildPaths.length) % buildPaths.length;
    const path = buildPaths[wrappedIndex];
    onSelect(path.id);
    tabRefs.current[wrappedIndex]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusAndSelect(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusAndSelect(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusAndSelect(0);
        break;
      case "End":
        event.preventDefault();
        focusAndSelect(buildPaths.length - 1);
        break;
    }
  }

  return (
    <div
      role="tablist"
      aria-label="What do you want to build?"
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
    >
      {buildPaths.map((path, index) => {
        const isSelected = path.id === selectedCategory;
        return (
          <button
            key={path.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`build-path-panel-${path.id}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelect(path.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`flex flex-col items-center gap-2 rounded-lg border p-5 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green ${
              isSelected
                ? "border-accent-green bg-background-raised"
                : "border-border hover:border-accent-violet"
            }`}
          >
            <span className="text-3xl" aria-hidden="true">
              {path.emoji}
            </span>
            <span className="text-sm font-medium text-foreground">{path.title}</span>
          </button>
        );
      })}
    </div>
  );
}
