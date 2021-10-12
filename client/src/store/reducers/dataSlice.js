import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action) {
      state.products = action.payload;
    },
  },
});

export const { getData } = dataSlice.actions;

export const selectProducts = (state) => state.dataSlice.products;

export default dataSlice.reducer;
