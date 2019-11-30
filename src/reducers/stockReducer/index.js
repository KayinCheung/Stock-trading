import {
  LOAD_KEY_STATS,
  LOAD_STOCK_PROFILE
} from "../../actions/types";

const initialState = {
  key_stats: {},
  profile: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_KEY_STATS:
      return {
        ...state,
        key_stats: action.key_stats,
      };
      break;

    case LOAD_STOCK_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
      break;

    default:
      return state;
  }
}
