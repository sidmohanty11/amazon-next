import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const i = state.items.findIndex((item) => item.id === action.payload.id);
      let newCart = [...state.items];
      if (i >= 0) {
        //item exists
        const item = newCart.find((item) => item.id === action.payload.id);
        item.qty++;
      } else {
        newCart = [...state.items, action.payload];
      }
      state.items = newCart;
    },
    removeFromCart: (state, action) => {
      const i = state.items.findIndex((item) => item.id === action.payload.id);
      let newCart = [...state.items];
      if (i >= 0) {
        const item = newCart.find((item) => item.id === action.payload.id);
        item.qty--;
      } else {
        console.warn(`Can't remove product!`);
      }
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state) => state.cartSlice.items;
export const selectTotal = (state) =>
  state.cartSlice.items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

export default cartSlice.reducer;
