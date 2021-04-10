import { GET_DELIVERY_ADDRESS, DELETE_DELIVERY_ADDRESS } from "../utils/types";
const initialState = {
  deliveryAddress: [],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case GET_DELIVERY_ADDRESS:
      return { ...state, deliveryAddress: actions.payload };
    case DELETE_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: state.deliveryAddress.filter(
          (item) => item._id !== actions.payload
        ),
      };
    default:
      return state;
  }
}
