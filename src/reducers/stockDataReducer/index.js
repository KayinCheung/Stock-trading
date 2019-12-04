import {
  LOAD_KEY_STATS,
  LOAD_STOCK_PROFILE,
  LOAD_STOCK_QUOTE,
  LOAD_STOCK_CHART,
  START_LOAD_STOCK_DATA,
  SEARCH_SUCCESS
} from "../../actions/types";

const initialState = {
  key_stats: {},
  profile: {},
  chart: [],
  quote: 0,
  symbol: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_LOAD_STOCK_DATA:
      return {
        ...state,
        key_stats: {},
        profile: {},
        chart: [],
        quote: 0,
        symbol: action.symbol
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        key_stats: {},
        profile: {},
        chart: [],
        quote: 0,
        symbol: action.symbol
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

    case LOAD_STOCK_CHART:
      return {
        ...state,
        chart: action.chart
      };

    default:
      return state;
  }
}
