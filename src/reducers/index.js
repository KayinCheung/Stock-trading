import { combineReducers } from "redux";
import stockDataReducer from "./stockDataReducer";
import tradeReducer from "./tradeReducer";
import tradeHistoryReducer from "./tradeHistoryReducer";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
  stock: stockDataReducer,
  trade: tradeReducer,
  portfolio: portfolioReducer,
  tradeHistory: tradeHistoryReducer
});

export default rootReducer;
