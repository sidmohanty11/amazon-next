import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../assets/fakeData";

const initialState = {};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData() {
      return { products };
    },
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
