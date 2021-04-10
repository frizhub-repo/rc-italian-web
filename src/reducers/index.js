import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import appReducer from "./appReducer";
import loadingReducer from "./loadingReducer";
import reservationReducer from "./reservationReducer";
import productReducer from "./productReducer";
import deliveryAddress from './DeliveryAddress';

export default combineReducers({
  orders: orderReducer,
  appReducer: appReducer,
  loadingReducer: loadingReducer,
  reservationReducer: reservationReducer,
  productReducer: productReducer,
  deliveryAddress: deliveryAddress,
});
