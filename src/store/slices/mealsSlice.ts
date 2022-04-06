import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IMeal from "../../interfaces/IMeal";

export interface MealsState {
  mealsData: Array<IMeal>;
  likedMeals: Array<IMeal>;
  ingredientFilter: string | null;
}

const initialState: MealsState = {
  mealsData: [],
  likedMeals: [],
  ingredientFilter: null
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setMeals: (state, action: PayloadAction<Array<IMeal>>) => {
      state.mealsData = action.payload;
    },
    addMealToLikedMeals: (state, action: PayloadAction<IMeal>) => {
      state.likedMeals.push(action.payload);
    },
    setIngredientFilter: (state, action: PayloadAction<string | null>) => {
        state.ingredientFilter = action.payload;
    }
  },
});

export const { setMeals, addMealToLikedMeals, setIngredientFilter } = mealsSlice.actions;

export default mealsSlice.reducer;
