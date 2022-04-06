import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import mealsReducer from "./slices/mealsSlice";
import { save, load, combineLoads } from "redux-localstorage-simple";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
  // one of the bonuses: persist liked meals between visits in localstorage
  middleware: [
    save({
      states: ["meals", "likedMeals"],
      namespace: "meals",
    }),
    save({
      states: ["meals", "ingredientFilter"],
      namespace: "meals",
    }),
  ],
  preloadedState: combineLoads(
    load({
      states: ["meals", "likedMeals"],
      namespace: "meals",
    }),
    load({
      states: ["meals", "ingredientFilter"],
      namespace: "meals",
    })
  ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
