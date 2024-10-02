import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "../store/slices/filter.slice.js"
import cartSlice from "../store/slices/cart.slice.js"
import registerSlice from "./slices/register.slice.js";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
    register: registerSlice.reducer
  },
});

export default store;
