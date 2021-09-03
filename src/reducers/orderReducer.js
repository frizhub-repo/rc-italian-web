const initialState = {
  total: 0,
  items: [],
  minimum: 0,
  delivery: 0,
  orders: [],
  address: {},
  time: "as soon as possible",
  note: "",
  currency: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_ORDER":
      return { ...state, orders: action.payload };
    case "ADD_ITEM":
      const index1 = state.items.findIndex(
        (e) =>
          e.product === action.payload.product &&
          e.size._id === action.payload.size._id &&
          e.isDiscount === action.payload.isDiscount
      );
      if (index1 !== -1) {
        const items = state.items;
        items[index1].quantity =
          parseInt(items[index1].quantity) + parseInt(action.payload.quantity);
        return { ...state, items };
      } else
        return {
          ...state,
          items: state.items.concat(action.payload),
        };
    case "REMOVE_ITEM":
      const removeProducts = state.items;
      const removeIndex = removeProducts.findIndex(
        (product) =>
          product.product === action.payload.key.product &&
          product.size._id === action.payload.key.size._id &&
          product.isDiscount === action.payload.key.isDiscount
      );
      const price =
        removeProducts[removeIndex].quantity *
        removeProducts[removeIndex].price;
      if (removeIndex > -1) removeProducts.splice(removeIndex, 1);
      return {
        ...state,
        items: removeProducts,
        total: state.total - price,
      };
    case "REMOVE_ORDER_ITEMS":
      return {
        ...state,
        items: [],
        total: 0,
      };
    case "ADD_ORDER_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "ADD_DELIVERY_TIME":
      return {
        ...state,
        time: action.payload.time,
        note: action.payload.note ? action.payload.note : "",
      };
    case "TOTAL":
      return {
        ...state,
        total: state.total + action.payload,
      };
    default:
      return state;
  }
}
