import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        isLogin: false
    },
    reducers: {
        loginHandler: (state, action) => {
            state.isLogin = action.payload.isLogin;
        }
        
    }
})

export default registerSlice;

export const {loginHandler} = registerSlice.actions