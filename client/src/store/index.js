import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    cartSlice,
  },
});
