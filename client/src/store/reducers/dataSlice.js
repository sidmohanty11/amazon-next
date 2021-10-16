import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  search: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action) {
      state.products = action.payload;
    },
    searchProducts(state, action) {
      // const searchString = action.payload;
      // if (state.products.length > 0 && action.payload !== "") {
      //   for (let product of state.products) {
      //     const searchedData =
      //       product.name.toLowerCase().includes(searchString) ||
      //       product.description.toLowerCase().includes(searchString);
      //     const productAlreadyExists = state.search.find(
      //       (item) => item.id === action.payload.id
      //     );
      //     if (searchedData && !productAlreadyExists) {
      //       state.search.push(product);
      //     }
      //   }
      // }
      // if (action.payload === "") {
      //   state.search = [];
      // }
    },
  },
});

export const { getData, searchProducts } = dataSlice.actions;

export const selectProducts = (state) => state.dataSlice.products;
export const selectSearchedProducts = (state) => state.dataSlice.search;

export default dataSlice.reducer;
