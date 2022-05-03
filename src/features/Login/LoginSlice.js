import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    isLoading: true,
};

const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: {},
});

export default LoginSlice.reducer;
export const {} = LoginSlice.actions;
