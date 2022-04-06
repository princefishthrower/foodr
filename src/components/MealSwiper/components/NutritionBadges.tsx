import * as React from "react";
import INutrition from "../../../interfaces/INutrition";

export interface INutritionBadgesProps {
  nutrition: INutrition;
}

export function NutritionBadges(props: INutritionBadgesProps) {
  const { nutrition } = props;
  const { carbohydrates, fatTotal, protein, energy } = nutrition;

  return (
    <>
      <span className="m-1 badge bg-warning">
        {carbohydrates.value} {carbohydrates.name}
      </span>
      <span className="m-1 badge bg-danger">
        {fatTotal.value} {fatTotal.name}
      </span>
      <span className="m-1 badge bg-info">
        {protein.value} {protein.name}
      </span>
      <span className="m-1 badge bg-success">
        {energy.value} {energy.name}
      </span>
    </>
  );
}
