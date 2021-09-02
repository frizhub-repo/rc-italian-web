import axiosIntance from "../utils/axios-configured";

export const customerMenu = () =>
  axiosIntance.get("/api/v1/menu/customers/public");

export const getSpecialMenus = () =>
  axiosIntance.get("/api/v1/menu/special/customers/public");

export const getHotDeals = () =>
  axiosIntance.get("/api/v1/delivery/discount/hotdeals/public");

export const getReservationOffers = () =>
  axiosIntance.get("/api/v1/reservation/discount/public");

export const getDeliverableMenus = () =>
  axiosIntance.get("/api/v1/menu/deliverables/customers/public");
