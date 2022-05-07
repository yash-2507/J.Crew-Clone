import { createSlice } from "@reduxjs/toolkit";
import { kidsData } from "../../assets/KidsData";

const initialState = {
    data: [],
    products_data: [],
    filter_data: [],
    isError: false,
    isLoading: false,
    page: 0,
    totalProduct: 0,
    perPageData: 6,
    totalPages: 0,
    filters: [],
    filterObj: [],
};

const kidsSlice = createSlice({
    name: "kids",
    initialState,
    reducers: {
        is_loading: (state) => {
            return {
                ...state,
                isLoading: true,
            };
        },
        get_products: (state) => {
            const all_data = kidsData.kids_products.data;
            let len = all_data.length;
            return {
                ...state,
                data: [...all_data],
                products_data: [...all_data],
                isLoading: false,
                isError: false,
                totalProduct: len,
                filters: [...kidsData.kids_products.filters],
                page: 1,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        is_error: (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        },
        upper_filter: (state, { payload }) => {
            let len = payload.length;
            return {
                ...state,
                products_data: [...payload],
                totalProduct: len,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        update_data_with_filter: (state, { payload }) => {
            let len = payload.length;
            return {
                ...state,
                products_data: [...payload],
                totalProduct: len,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        change_variant_color: (state, { payload }) => {
            return {
                ...state,
                products_data: [...payload],
            };
        },
        change_filter: (state, { payload }) => {
            state.filters[payload].status = !state.filters[payload].status;
        },
        change_filter_2: (state, { payload }) => {
            const { mainIndex, primaryIndex } = payload;
            state.filters[mainIndex].options[primaryIndex].status =
                !state.filters[mainIndex].options[primaryIndex].status;
        },
    },
});

export const {
    is_loading,
    get_products,
    is_error,
    upper_filter,
    update_data_with_filter,
    change_variant_color,
    change_filter,
    change_filter_2,
} = kidsSlice.actions;

export default kidsSlice.reducer;
