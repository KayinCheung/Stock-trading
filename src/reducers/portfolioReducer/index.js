import {
  START_LOAD_PORTFOLIO_DATA,
  LOADED_PORTFOLIO_DATA,
  LOADED_PORTFOLIO_STOCK_PRICE,
  CHARTS_CREATED
} from "../../actions/types";

const initialState = {
  holdings: {},
  cash: {},
  stock_quotes: {},
  loaded: false,
  portfolio_loaded: false,
  stock_quotes_loaded: false,
  longChart: {},
  shortChart: {},
  longShortChart: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_LOAD_PORTFOLIO_DATA:
      return {
        ...state,
        initialState
      };
    case LOADED_PORTFOLIO_DATA:
      return {
        ...state,
        portfolio_loaded: true,
        loaded: true && state.stock_quotes_loaded,
        holdings: action.payload.stock,
        cash: action.payload.cash
      };

    case LOADED_PORTFOLIO_STOCK_PRICE:
      return {
        ...state,
        stock_quotes_loaded: true,
        loaded: true && state.portfolio_loaded,
        stock_quotes: action.payload
      };

    case CHARTS_CREATED:
      return {
        ...state,
        longChart: action.longChart,
        shortChart: action.shortChart,
        longShortChart: action.longShortChart
      };

    default:
      return state;
  }
}
