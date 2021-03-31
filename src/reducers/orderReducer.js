const initialState = {
  total: 0,
  items: [],
  minimum: 0,
  delivery: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const index1 = state.items
        .map(function (e) {
          return e.product;
        })
        .indexOf(action.payload.product);
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
    // return {
    //   ...state,
    //   items: state.items.concat(action.payload),
    // };
    case "REMOVE_ITEM":
      const index = state.items.indexOf(action.payload);
      return {
        ...state,
        items: state.items.splice(index, 1),
      };
    case "REMOVE_ORDER_ITEMS":
      return {
        ...state,
        items: [],
        total: 0,
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
