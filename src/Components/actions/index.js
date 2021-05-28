export const setTotal = (price) => {
  return {
    type: "TOTAL",
    payload: price,
  };
};

export const getAllOrder = (orders) => {
  return { type: "GET_ALL_ORDER", payload: orders };
};

export const addItem = (item) => {
  return { type: "ADD_ITEM", payload: item };
};
export const removeItem = (item) => {
  return { type: "REMOVE_ITEM", payload: item };
};

export const removeOrderItems = () => {
  return { type: "REMOVE_ORDER_ITEMS" };
};

export const addOrderAddress = (payload) => {
  return { type: "ADD_ORDER_ADDRESS", payload };
};
