import * as React from "react";

export interface IFiltersProps {
  ingredientFilter: string | null;
  ingredientFilters: Array<string | undefined>;
  onFilterSelected: (selectedFilter: string | null) => void;
}

export function Filters(props: IFiltersProps) {
  const { ingredientFilter, ingredientFilters, onFilterSelected } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event?.target.value === "") {
      // reset (default option)
      onFilterSelected(null);
    } else {
      onFilterSelected(event?.target.value);
    }
  };

  return (
    <select
      onChange={handleChange}
      value={ingredientFilter !== null ? ingredientFilter : undefined}
    >
      <option value="">Filter by ingredient...</option>
      {ingredientFilters.map((ingredientFilter) => {
        if (ingredientFilter === undefined) {
          return <></>;
        }
        return (
          <option onClick={() => onFilterSelected(ingredientFilter)}>
            {ingredientFilter}
          </option>
        );
      })}
    </select>
  );
}
