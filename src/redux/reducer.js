import {
  CHANGEVARIANTCOLOR,
  FETCHPRODUCTDATA,
  ISERROR,
  ISLOADING,
  UPDATEDATAWITHFILTER,
  UPPERFILTER,
} from "./actionType";

const initState = {
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

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ISLOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCHPRODUCTDATA: {
      let len = payload.length;
      return {
        ...state,
        data: [...payload.data],
        products_data: [...payload.data],
        isLoading: false,
        isError: false,
        totalProduct: len,
        filters: [...payload.filters],
        page: 1,
        totalPages: Math.ceil(len / state.perPageData),
      };
    }
    case ISERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case UPPERFILTER: {
      let len = payload.length;
      return {
        ...state,
        products_data: [...payload],
        totalProduct: len,
        totalPages: Math.ceil(len / state.perPageData),
      };
    }
    case UPDATEDATAWITHFILTER: {
      let len = payload.length;
      return {
        ...state,
        products_data: [...payload],
        totalProduct: len,
        totalPages: Math.ceil(len / state.perPageData),
      };
    }
    case CHANGEVARIANTCOLOR: {
      return {
        ...state,
        products_data: [...payload],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export { reducer };
