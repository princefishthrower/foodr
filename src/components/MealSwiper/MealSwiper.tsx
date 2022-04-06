import * as React from "react";
import IMeal from "../../interfaces/IMeal";
import { addMealToLikedMeals } from "../../store/slices/mealsSlice";
import { useAppDispatch } from "../../store/store";
import { MealTile } from "../shared/MealTile";

export interface IMealSwiperProps {
  meal: IMeal;
  onShowNextMeal: () => void;
}

export function MealSwiper(props: IMealSwiperProps) {
  const { meal, onShowNextMeal } = props;

  const dispatch = useAppDispatch();

  const denyMeal = () => {
    onShowNextMeal();
  };

  const likeMeal = () => {
    // add it to the redux store
    dispatch(addMealToLikedMeals(meal))

    // and show the next meal!
    onShowNextMeal();
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <MealTile meal={meal}/>
      <p className="mt-4 fw-bold">What do you think of this meal?</p>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="m-3">
          <button onClick={denyMeal} className="btn btn-danger">
            Ew, no.
          </button>
        </div>
        <div className="m-3">
          <button onClick={likeMeal} className="btn btn-success">
            Mmm, Tasty!
          </button>
        </div>
      </div>
    </div>
  );
}
