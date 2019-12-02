import { combineReducers } from "redux";
import stockDataReducer from "./stockDataReducer";
import tradeReducer from "./tradeReducer";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
  stock: stockDataReducer,
  trade: tradeReducer,
  portfolio: portfolioReducer
});

export default rootReducer;
