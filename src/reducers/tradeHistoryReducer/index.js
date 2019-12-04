import {
  START_LOAD_TRADE_HISTORY,
  LOADED_TRADE_HISTORY
} from "../../actions/types";

const initialState = {
  loaded: false,
  tradeHistory: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_LOAD_TRADE_HISTORY:
      return {
        ...state,
        loaded: false
      };
    case LOADED_TRADE_HISTORY:
      return {
        ...state,
        loaded: true,
        tradeHistory: action.tradeHistory
      };

    default:
      return state;
  }
}
