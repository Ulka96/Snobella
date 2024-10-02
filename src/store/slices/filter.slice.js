import { createSlice } from "@reduxjs/toolkit";
import { SiTrueup } from "react-icons/si";
import { TbRuler } from "react-icons/tb";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    materialId: "",
    categoryId: "",
    colorId: "",
    sizeId: "",
    selectedCategoryIds: "",

    lowToHighSort: false,
    highToLowSort: false,

    featured: false,
    discount: false,
    bestSeller: false,

    lowPrice: 0,
    highPrice: 0,
  },

  reducers: {
    setMaterial: (state, action) => {
      state.materialId = action.payload;
    },

    setCategory: (state, action) => {
      state.categoryId = action.payload;
    },

    setColor: (state, action) => {
      state.colorId = action.payload;
    },

    setSize: (state, action) => {
      state.sizeId = action.payload;
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
      state.colorId = "";
      state.sizeId = "";

    },

    lowToHighSort: (state, action) => {
      state.lowToHighSort = true;
      state.highToLowSort = false;
      state.featured = false;
      state.bestSeller = false;
      state.discount = false;
    },

    highToLowSort: (state, action) => {
      state.highToLowSort = true;
      state.lowToHighSort = false;
      state.featured = false;
      state.bestSeller = false;
      state.discount = false;
    },

    featuredSort: (state, action) => {
      state.featured = true;
      state.lowToHighSort = false;
      state.highToLowSort = false;
      state.bestSeller = false;
      state.discount = false;
    },

    discountSort: (state, action) => {
      state.discount = true;
      state.featured = false;
      state.bestSeller = false;
      state.lowToHighSort = false;
      state.highToLowSort = false;
    },

    bestSellerSort: (state, action) => {
      state.bestSeller = true;
      state.featured = false;
      state.discount = false;
      state.lowToHighSort = false;
      state.highToLowSort = false;
    },

    priceFilter: (state, action) => {
      const { lowPrice, highPrice } = action.payload;
      state.lowPrice = lowPrice;
      state.highPrice = highPrice;
    },
  },
});

export default filterSlice;

export const {
  setMaterial,
  setCategory,
  setColor,
  setSize,
  selectCategory,
  filterHandle,
  lowToHighSort,
  highToLowSort,
  featuredSort,
  discountSort,
  bestSellerSort,
  priceFilter,
} = filterSlice.actions;