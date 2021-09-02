import axiosIntance from "../utils/axios-configured";

export const createOrder = (payload) =>
  axiosIntance.post("/api/v1/orders/customers", payload);

export const getOrders = (payload) =>
  axiosIntance.get("/api/v1/orders/customers");

export const getOrderById = (orderId) =>
  axiosIntance.get(`/api/v1/orders/${orderId}`);
