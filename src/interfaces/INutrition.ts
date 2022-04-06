import INutritionComponent from "./INutritionComponent";

export default interface INutrition {
    carbohydrates: INutritionComponent;
    fatTotal: INutritionComponent;
    protein: INutritionComponent;
    energy: INutritionComponent;
}