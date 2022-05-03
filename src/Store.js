import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./features/Login/LoginSlice";

export const store = configureStore({
    reducer: {
        login: LoginReducer,
    },
});
