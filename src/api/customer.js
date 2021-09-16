import axiosIntance from "../utils/axios-configured";

export const customerSignUp = (payload) => {
  return axiosIntance.post("/api/v1/customers/auth/signUp", payload);
};

export const customerSignIn = (payload) => {
  return axiosIntance.post("/api/v1/customers/auth/login", payload);
};

export const reserveTable = (payload) => {
  return axiosIntance.post("/api/v1/reservations/create/customers", payload);
};

export const updateCustomerInfo = (payload) => {
  return axiosIntance.patch("/api/v1/customers", payload);
};
