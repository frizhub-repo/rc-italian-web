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

export const getOwnerFacebookPageId = () =>
  axiosIntance.get("/api/v1/owners/facebook/page-id/public");
export const createDiscountStats = (payload) =>
  axiosIntance.post("/api/v1/discountStats/customers/create", payload);

export const getPaypalStatus = () =>
  axiosIntance.get("/api/v1/paypal/status/public");
