import {
  GET_DELIVERY_ADDRESS,
  DELETE_DELIVERY_ADDRESS,
  ADD_DELIVERY_ADDRESS,
  EDIT_DELIVERY_ADDRESS,
} from "../utils/types";
const initialState = {
  deliveryAddress: [],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case ADD_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: state.deliveryAddress.concat(actions.payload),
      };
    case GET_DELIVERY_ADDRESS:
      return { ...state, deliveryAddress: actions.payload };
    case DELETE_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: state.deliveryAddress.filter(
          (item) => item._id !== actions.payload
        ),
      };
    case EDIT_DELIVERY_ADDRESS:
      const address = state.deliveryAddress.findIndex(
        (addrss) => addrss._id === actions.payload.id
      );
      state.deliveryAddress[address] = actions.payload.res;
      return {
        ...state,
      };
    default:
      return state;
  }
}
