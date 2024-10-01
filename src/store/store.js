import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "../store/slices/filter.slice.js"


const store = configureStore({
  reducer: {
    filter: filterSlice.reducer
  },
});

export default store;
