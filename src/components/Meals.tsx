import * as React from "react";
import { useEffect, useState } from "react";
import meals from "../data/mealsData.json";
import { setIngredientFilter, setMeals } from "../store/slices/mealsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Filters } from "./Filters/Filters";
import { MealSwiper } from "./MealSwiper/MealSwiper";

export interface IMealsProps {}

export function Meals(props: IMealsProps) {
  const { mealsData, likedMeals, ingredientFilter } = useAppSelector(
    (state) => state.meals
  );
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  // on mount, load all foods
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        // Doesn't work, CORS issue, won't accept calls from localhost:3000 :)
        // await get<IMealsResponse>(
        //   Constants.ENDPOINT.MEALS,
        //   (data) => setMeals(data.meals),
        //   (status) => console.log(status)
        // );
        // TODO simulate 'loading' here

        // then set data
        dispatch(setMeals(meals.meals));
      } catch (error) {
        // log or show error
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const filterMealsByIngredient = () => {
    if (ingredientFilter !== null) {
      return mealsData.filter((meal) =>
        meal.mealComponents.some(
          (mealComponent) =>
            ingredientFilter === mealComponent.mainIngredient?.name
        )
      );
    }
    return mealsData;
  };

  // if any of the main ingredients match, keep it
  const filteredMeals = filterMealsByIngredient();

  // also should filter out any they've already liked
  const filteredLikesMeals = filteredMeals.filter(
    (meal) => !likedMeals.some((likedMeal) => likedMeal.id === meal.id)
  );

  const filteredMealsDataLength = filteredLikesMeals.length;

  // access remaining meals in a circular sense
  // this is a design choice, you may instead wish to track the declined meals and remove them from the filter
  // but I think its like tinder, if you cycle long enough you can seem the same person again
  const circularIndexedMeal =
    filteredLikesMeals[
      ((currentIndex % filteredMealsDataLength) + filteredMealsDataLength) %
        filteredMealsDataLength
    ];

  // for now pull ingredient filters off the meal data - could be a seperate API endpoint
  const ingredientFilters = mealsData.flatMap((meal) =>
    meal.mealComponents.map(
      (mealComponent) => mealComponent.mainIngredient?.name
    )
  );

  const renderBody = () => {
    if (isLoading) {
      return <p className="text-center">Loading....</p>;
    }
    if (!circularIndexedMeal) {
      return (
        <p className="text-center">
          You've liked all the meals we have so far with that ingredient. Maybe
          try changing the ingredient filter or removing it?
        </p>
      );
    }
    return (
      <MealSwiper
        meal={circularIndexedMeal}
        onShowNextMeal={() => setCurrentIndex(currentIndex + 1)}
      />
    );
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Filters
          ingredientFilter={ingredientFilter}
          ingredientFilters={ingredientFilters}
          onFilterSelected={(ingredientFilter) => {
            // save it to store
            dispatch(setIngredientFilter(ingredientFilter));
            // and also increment to trigger new sort and rendering
            setCurrentIndex(currentIndex + 1);
          }}
        />
      </div>
      {renderBody()}
    </>
  );
}
