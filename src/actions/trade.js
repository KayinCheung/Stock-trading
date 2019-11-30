import { SUBMIT_TRADE, SUBMIT_INVALID_TRADE, CLOSE_MODAL, MODAL_CONFIRM_TRADE, SELECT_SIDE } from "./types";

export const submitTrade = (ticker, price, quantity) => dispatch => {
  console.log(ticker, price, quantity)
  if (price <= 0 && quantity <= 0) {
    dispatch({
      type: SUBMIT_INVALID_TRADE,
      ticker: ticker,
      price: price,
      quantity: quantity,
    });
  } else {
    dispatch({
      type: SUBMIT_TRADE,
      ticker: ticker,
      price: price,
      quantity: quantity,
    });
  }
};

export const closeModal = () => dispatch => {
  dispatch({
    type: CLOSE_MODAL
  });
};

export const modalConfirmTrade = () => dispatch => {
  //POST API TO BACKEND TO RECORD the trade
  dispatch({
    type: MODAL_CONFIRM_TRADE
  });
};

export const selectSide = (side) => dispatch => {
  //POST API TO BACKEND TO RECORD the trade
  dispatch({
    type: SELECT_SIDE,
    side: side
  });
};
