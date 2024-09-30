import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryId: "",
    selectedCategoryIds: ""
 
  },
  reducers: {
    setCategory: (state, action) => {
      state.categoryId = action.payload    
    },

    selectCategory : (state,action) => {
      const categoryId = action.payload;
      const isSelected = state.selectedCategoryIds.includes(categoryId);
      
      if(!isSelected) {
       state.selectedCategoryIds.push(categoryId)
      }
    
      else {
       state.selectedCategoryIds = state.selectedCategoryIds.filter(selectedCategoryId =>
        selectedCategoryId !== categoryId
       )
      }
    }

  },
});

export default categorySlice;

export const { setCategory, selectCategory } = categorySlice.actions;


