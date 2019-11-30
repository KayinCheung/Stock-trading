import { combineReducers } from "redux";
import stockDataReducer from "./stockDataReducer";
import tradeReducer from "./tradeReducer";

const rootReducer = combineReducers({
  stock: stockDataReducer,
  trade: tradeReducer
});

export default rootReducer;
