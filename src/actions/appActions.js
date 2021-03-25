import axiosIntance from "../utils/axios-configured";
import { GET_RES_INFO } from "../utils/types";

export const fetchAllResInfo = () => (dispatch) => {
  axiosIntance.get("/api/v1/app/public/restaurant").then((res) => {
    dispatch({ type: GET_RES_INFO, payload: res.data });
  });
};
