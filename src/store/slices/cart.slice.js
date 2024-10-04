import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productCount: 2,
    customCart: [],
    customFav: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.customCart = action.payload;
    },

    addToFav: (state, action) => {
      state.customFav = action.payload;
    },
  },
});

export default cartSlice;

export const { addToCart, addToFav } = cartSlice.actions;
