import axiosIntance from "../utils/axios-configured"

export const customerContactUs = (payload) => {
    return axiosIntance.post("/api/v1/contact_us/customers", payload);
}
