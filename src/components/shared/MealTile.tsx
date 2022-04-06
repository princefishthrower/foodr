import * as React from "react";
import { useState } from "react";
import IMeal from "../../interfaces/IMeal";
import { MealComponents } from "../MealSwiper/components/MealComponents";
import { NutritionBadges } from "../MealSwiper/components/NutritionBadges";

export interface IMealTileProps {
  meal: IMeal;
  displayOnlyMode?: boolean;
}

export function MealTile(props: IMealTileProps) {
  const { meal, displayOnlyMode } = props;
  const { image, mealComponents, nutrition } = meal;
  const [shouldShowDetails, setShouldShowDetails] = useState(false);


  // TODO: could also add a delete function that would remove the meal from their liked meals

  return (
    <div onClick={() => setShouldShowDetails(!shouldShowDetails)} className="card m-3" style={{ maxWidth: "18rem" }}>
      <img className="card-img-top" src={image} />
      <div className="card-body">
        {displayOnlyMode || shouldShowDetails ? (
          <>
            <div className="card-title">Ingredients</div>
            <MealComponents mealComponents={mealComponents} />
            <div className="card-text">Nutrition</div>
            <NutritionBadges nutrition={nutrition} />
          </>
        ) : (
          <div className="card-text text-center">
            Interested? Tap anywhere on the card for more information!
          </div>
        )}
      </div>
    </div>
  );
}
