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

function isOfferExist(e, payload) {
  return payload.offer
    ? e.product === payload.product &&
        e.size._id === payload.size._id &&
        e.isDiscount === payload.isDiscount &&
        e.offer._id === payload.offer._id
    : e.product === payload.product &&
        e.size._id === payload.size._id &&
        e.isDiscount === payload.isDiscount;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_ORDER":
      return { ...state, orders: action.payload };
    case "ADD_ITEM":
      const index1 = state.items?.findIndex((e) =>
        isOfferExist(e, action.payload)
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
      const removeIndex = removeProducts.findIndex((product) =>
        isOfferExist(product, action.payload)
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
        address: {},
        time: "as soon as possible",
        note: "",
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
