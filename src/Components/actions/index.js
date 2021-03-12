export const setTotal = (price) => {
  return {
    type: "TOTAL",
    payload: price,
  };
};

export const addItem = (item) => {
  return { type: "ADD_ITEM", payload: item };
};
export const removeItem = (item) => {
  return { type: "ADD_ITEM", payload: item };
};

export const removeOrderItems = () => {
  return { type: "REMOVE_ORDER_ITEMS" };
};
