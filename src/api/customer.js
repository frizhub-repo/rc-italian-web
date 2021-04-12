import axiosIntance from "../utils/axios-configured"

export const customerSignUp = (payload) => {
    return axiosIntance.post("/api/v1/customers/auth/signUp", payload);
}

export const customerSignIn = (payload) => {
    return axiosIntance.post("/api/v1/customers/auth/login", payload);
}