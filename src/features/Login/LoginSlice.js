import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginOpen: false,
};

const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        openLogin: (state) => {
            state.isLoginOpen = true;
        },
        closeLogin: (state) => {
            state.isLoginOpen = false;
        },
    },
});

export default LoginSlice.reducer;
export const { openLogin, closeLogin } = LoginSlice.actions;
