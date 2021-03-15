import { toast } from "react-toastify";
import axiosIntance from "../utils/axios-configured";

export const customerSignUp = (payload) => (dispatch) => {
  axiosIntance.post("/api/v1/customers/auth/signUp", payload).then((res) => {
    if (res.status === 200) {
      toast.success("You have been sign up successfully");
      axiosIntance.defaults.headers.common["Authorization"] =
        res.data.data.token;
      authConfig(res.data.data.token);
    }
  });
};

export const customerSignIn = (payload) => (dispatch) => {
  axiosIntance.post("/api/v1/customers/auth/login", payload).then((res) => {
    if (res.status === 200) {
      toast.success("You have been sign in successfully");
      axiosIntance.defaults.headers.common["Authorization"] =
        res.data.data.token;
      authConfig(res.data.data.token);
    }
  });
};

const authConfig = (token) => {
  localStorage.setItem("token", token);
};
