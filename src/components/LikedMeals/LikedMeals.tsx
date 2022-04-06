import * as React from 'react';
import { useAppSelector } from '../../store/store';
import { MealTile } from '../shared/MealTile';

export interface ILikedMealsProps {
}

export function LikedMeals (props: ILikedMealsProps) {
  const { likedMeals } = useAppSelector(state => state.meals)

  if (likedMeals.length === 0) {
    return <p>You haven't liked any meals yet! Head over to the 'Explore' tab to find some tasty meals!</p>
  }

  return (
    <div>
      <p className='text-center'>Meals you've liked so far:</p>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      {likedMeals.map(likedMeal => {
          return <MealTile meal={likedMeal} displayOnlyMode={true}/>
      })}
      </div>
    </div>
  );
}
