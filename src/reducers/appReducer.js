import { GET_RES_INFO } from '../utils/types';
const initialState = {
    restaurant: {}
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_RES_INFO:
            return { ...state, restaurant: actions.payload.data }
        default:
            return state;
    }
}