import { LOAD_STOCK_DATA, START_LOAD_STOCK_DATA } from "../../actions/types";

const initialState = {
  payload: {},
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_STOCK_DATA:
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    case START_LOAD_STOCK_DATA:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
