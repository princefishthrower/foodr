import IIngredient from "./IIngredient";
import IMainIngredient from "./IMainIngredient";
import INutrition from "./INutrition";

export default interface IMeal {
    id: string;
    created: string;
    image: string;
    nutrition: INutrition;
    mealComponents: Array<IMainIngredient>
}