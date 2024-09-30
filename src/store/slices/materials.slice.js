import { createSlice } from "@reduxjs/toolkit";

const materialSlice = createSlice({
  name: "material",
  initialState: {
    materialId: "",
 
  },
  reducers: {
    setMaterial: (state, action) => {
      state.materialId = action.payload;

      console.log(state.materialId);
       
    },

  },
});

export default materialSlice;

export const { setMaterial } = materialSlice.actions;