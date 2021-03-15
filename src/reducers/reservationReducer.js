import { RESERVE_TABLE } from "../utils/types";

const initialState = {
  reserveTableData: [],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case RESERVE_TABLE:
      return {
        ...state,
        reserveTableData: [...state.reserveTableData, actions.payload.data],
      };

    default:
      return state;
  }
}
