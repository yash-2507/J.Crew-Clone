import axios from "axios";
import {
  CHANGEVARIANTCOLOR,
  FETCHPRODUCTDATA,
  ISERROR,
  ISLOADING,
  UPDATEDATAWITHFILTER,
  UPPERFILTER,
} from "./actionType";

export const fetchData = (dispatch) => {
  dispatch({
    type: ISLOADING,
  });
  axios
    .get("http://localhost:8080/men_products")
    .then((data) => {
      dispatch({
        type: FETCHPRODUCTDATA,
        payload: data.data,
      });
      // console.log(data);
    })
    .catch((err) => {
      dispatch({
        type: ISERROR,
      });
    });
};

export const handleUpperFilter = (data) => {
  return {
    type: UPPERFILTER,
    payload: data,
  };
};

export const handleChangeVariantColor = (data) => {
  return {
    type: CHANGEVARIANTCOLOR,
    payload: data,
  };
};

export const handleFilterData = (data) => {
  return {
    type: UPDATEDATAWITHFILTER,
    payload: data,
  };
};
