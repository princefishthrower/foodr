import * as React from 'react';
import IMainIngredient from '../../../interfaces/IMainIngredient';

export interface IMealComponentsProps {
    mealComponents: Array<IMainIngredient>
}

export function MealComponents (props: IMealComponentsProps) {
    const { mealComponents } = props;

    // TODO: nice would be an on click to expand to supplementary Ingredients for each
  return <>
  {mealComponents.map(mealComponent => {
    return <span className='m-1 badge bg-primary'>{mealComponent.mainIngredient?.name}</span>
  })}
  </>
}
