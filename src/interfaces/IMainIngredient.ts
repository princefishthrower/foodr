import IIngredient from "./IIngredient";

export default interface IMainIngredient {
    mainIngredient?: IIngredient,
    supplementaryIngredients?: Array<IIngredient>
}