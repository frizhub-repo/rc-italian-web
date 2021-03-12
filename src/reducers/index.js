import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import appReducer from './appReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    orders: orderReducer,
    appReducer: appReducer,
    loadingReducer: loadingReducer
})
