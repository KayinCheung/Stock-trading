import {
  LOAD_KEY_STATS,
  LOAD_STOCK_PROFILE,
  LOAD_STOCK_QUOTE,
  START_LOAD_STOCK_DATA
} from "../../actions/types";

const initialState = {
  key_stats: {},
  profile: {},
  quote: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_LOAD_STOCK_DATA:
      return {
        ...state,
        key_stats: {},
        profile: {},
        quote: 0
      };

    case LOAD_KEY_STATS:
      return {
        ...state,
        key_stats: action.key_stats
      };

    case LOAD_STOCK_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case LOAD_STOCK_QUOTE:
      return {
        ...state,
        quote: action.quote
      };

    default:
      return state;
  }
}
