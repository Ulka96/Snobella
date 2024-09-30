import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../store/slices/categories.slice.js"
import materialSlice from "./slices/materials.slice.js";


const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    materials: materialSlice.reducer
  },
});

export default store;
