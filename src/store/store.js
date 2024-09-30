import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../store/slices/categories.slice.js"


const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    
  },
});

export default store;
