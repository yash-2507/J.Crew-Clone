import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/data";

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

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        is_loading: (state, { payload }) => {
            return {
                ...state,
                isLoading: true,
            };
        },
        get_products: (state, { payload }) => {
            const all_data = data.men_products.data;

            let len = all_data.length;
            return {
                ...state,
                data: [...all_data],
                products_data: [...all_data],
                isLoading: false,
                isError: false,
                totalProduct: len,
                filters: [...data.men_products.filters],
                page: 1,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        is_error: (state, { payload }) => {
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
            console.log(mainIndex, primaryIndex);
            console.log("state.filters[mainIndex]: ", state.filters[mainIndex]);
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
} = productSlice.actions;

export default productSlice.reducer;
