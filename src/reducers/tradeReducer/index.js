import {
  SUBMIT_TRADE,
  SUBMIT_INVALID_TRADE,
  MODAL_CONFIRM_TRADE,
  CLOSE_MODAL,
  SELECT_SIDE
} from "../../actions/types";

const initialState = {
  side: "buy",
  price: 0,
  quantity: 0,
  ticker: "",
  showModal: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_SIDE:
      return {
        ...state,
        side: action.side,
        error: false
      };
    case SUBMIT_TRADE:
      return {
        ...state,
        price: action.price,
        quantity: action.quantity,
        ticker: action.ticker,
        showModal: true,
        error: false
      };

    case SUBMIT_INVALID_TRADE:
      return {
        ...state,
        price: action.price,
        quantity: action.quantity,
        ticker: action.ticker,
        showModal: false,
        error: true
      };

    case CLOSE_MODAL:
    case MODAL_CONFIRM_TRADE:
      return {
        ...state,
        showModal: false,
        error: false
      };

    default:
      return state;
  }
}
