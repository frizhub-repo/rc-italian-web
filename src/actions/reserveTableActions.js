import { toast } from "react-toastify";
import axiosIntance from "../utils/axios-configured";
import { RESERVE_TABLE } from "../utils/types";

export const reserveTable = (payload) => (dispatch) => {
  axiosIntance
    .post("/api/v1/reservations/create/customers", payload)
    .then((res) => {
      if (res.status === 200) {
        toast.success("Reservation has been created successfully!");
        dispatch({ type: RESERVE_TABLE, payload: res.data });
      }
    });
};
