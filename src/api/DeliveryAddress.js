import axiosIntance from "../utils/axios-configured";

export const addDeliveryAddress = (payload) => {
  return axiosIntance.patch("/api/v1/customers/add-delivery-address", payload);
};

export const editDeleteDeliveryAddress = (id, payload) => {
  return axiosIntance.patch(`/api/v1/customers/delivery-address/${id}`, payload);
}
