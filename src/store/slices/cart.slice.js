import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productCount: 2,
    customCart: [],
  },
  reducers: {
    addToCart: (state, action) => {

      state.customCart = action.payload;

    },
  },
});

export default cartSlice;

export const { addToCart } = cartSlice.actions;
