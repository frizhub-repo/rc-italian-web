import { GET_PRODUCT_BY_CATEGORY } from "../utils/types";
const initialState = {
  productByCategory: [],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        productByCategory: state.productByCategory.concat(actions.payload.data),
      };
    default:
      return state;
  }
}
