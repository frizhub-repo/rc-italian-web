const initialState = {
  total: 0,
  items: [],
  minimum: 0,
  delivery: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
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
