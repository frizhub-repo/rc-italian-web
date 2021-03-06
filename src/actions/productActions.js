import axiosIntance from "../utils/axios-configured";
import { GET_PRODUCT_BY_CATEGORY } from "../utils/types";

export const getProductByCategory = (payload) => async (dispatch) => {
  const res = await axiosIntance.get("/api/v1/menu/customers/public");
  if (res?.status === 200) {
    dispatch({ type: GET_PRODUCT_BY_CATEGORY, payload: res.data });
  }
};
