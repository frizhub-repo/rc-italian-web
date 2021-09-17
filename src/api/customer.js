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

export const changePassword = (payload) => {
  return axiosIntance.patch("/api/v1/customers/change-password", payload);
};

export const verifyResetPassCode = ({ data, id }) => {
  return axiosIntance.patch(
    `/api/v1/customers/auth/verify-reset-password-code/${id}`,
    data
  );
};

export const forgotPassword = (payload) => {
  return axiosIntance.patch("/api/v1/customers/auth/forgot-password", payload);
};

export const resetPassword = ({ id, data }) => {
  return axiosIntance.patch(
    `/api/v1/customers/auth/reset-password/${id}`,
    data
  );
};
