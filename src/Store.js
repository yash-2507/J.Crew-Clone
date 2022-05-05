import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./features/Login/LoginSlice";
import ModalReducer from "./features/Modal/ModalSlice";

export const store = configureStore({
    reducer: {
        login: LoginReducer,
        modal: ModalReducer,
    },
});
