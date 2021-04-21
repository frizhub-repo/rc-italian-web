import axiosIntance from "../utils/axios-configured";

export const customerContactUs = (payload) => {
  return axiosIntance.post("/api/v1/contact_us/customers", payload);
};

export const getGoogleMyBusinessLocations = () => {
  return axiosIntance.get("/api/v1/my_business/locations/public");
};
