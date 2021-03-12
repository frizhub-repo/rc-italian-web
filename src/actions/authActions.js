import axiosIntance from "../utils/axios-configured";

export const customerSignUp = (payload) => (dispatch) => {
  axiosIntance.post("/api/v1/customers/auth/signUp", payload).then((res) => {
    authConfig(res.data.token);
  });
};

export const customerSignIn = (payload) => (dispatch) => {
  axiosIntance.post("/api/v1/customers/auth/login", payload).then((res) => {
    authConfig(res.data.data.token);
  });
};

const authConfig = (token) => {
  localStorage.setItem("token", token);
};
