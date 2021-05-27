import axiosIntance from "../utils/axios-configured";

// export const addDeliveryAddress = (payload) => {
//   return axiosIntance.post("/api/v1/address/customers", payload);
// };

export const addDeliveryAddress = (payload) => {
  return axiosIntance.patch("/api/v1/customers/add-delivery-address", payload);
};

// export const editDeleteDeliveryAddress = (id, payload) => {
//   return axiosIntance.patch(`/api/v1/address/customers/${id}`, payload);
// };

export const editDeleteDeliveryAddress = (id, payload) => {
  return axiosIntance.patch(
    `/api/v1/customers/delivery-address/${id}`,
    payload
  );
};

// export const getDeliveryAddress = () => {
//   return axiosIntance.get("/api/v1/address/customers");
// };

export const getDeliveryAddress = () => {
  return axiosIntance.get("/api/v1/customers/delivery-address-list");
};
