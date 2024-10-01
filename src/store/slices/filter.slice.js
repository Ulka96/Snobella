import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    materialId: "",
    categoryId: "",
    selectedCategoryIds: "",
    isSorted: false,
    highToLowSort: false,

    lowPrice : 0,
    highPrice : 0

  },
  reducers: {
    setMaterial: (state, action) => {
      state.materialId = action.payload;
    },

    setCategory: (state, action) => {
      state.categoryId = action.payload;
    },

    selectCategory: (state, action) => {
      const categoryId = action.payload;
      const isSelected = state.selectedCategoryIds.includes(categoryId);

      if (!isSelected) {
        state.selectedCategoryIds.push(categoryId);
      } else {
        state.selectedCategoryIds = state.selectedCategoryIds.filter(
          (selectedCategoryId) => selectedCategoryId !== categoryId
        );
      }
    },

    filterHandle: (state, action) => {
      state.materialId = "";
      state.categoryId = "";
      state.selectedCategoryIds = "";
    },

    sortHandle: (state, action) => {
      state.isSorted = true;
      state.highToLowSort = false;
    },

    highToLowSort: (state, action) => {
      state.isSorted = false
      state.highToLowSort = true
    },


    priceFilter: (state, action) => {

    }

  },
});

export default filterSlice;

export const {
  setMaterial,
  setCategory,
  selectCategory,
  filterHandle,
  sortHandle,
  highToLowSort,
  priceFilter,
} = filterSlice.actions;