import {
  SUBMIT_TRADE,
  SUBMIT_INVALID_TRADE,
  CLOSE_MODAL,
  MODAL_CONFIRM_TRADE,
  SELECT_SIDE
} from "./types";
import { backend_url, user } from "../config";
import store from "../store";

export const submitTrade = (ticker, price, quantity) => dispatch => {
  console.log(ticker, price, quantity);
  if (price <= 0 || quantity <= 0) {
    dispatch({
      type: SUBMIT_INVALID_TRADE,
      ticker: ticker,
      price: price,
      quantity: quantity
    });
  } else {
    dispatch({
      type: SUBMIT_TRADE,
      ticker: ticker,
      price: price,
      quantity: quantity
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

  console.log(store.getState().trade);
  const tradeState = store.getState().trade;
  fetch(`${backend_url}/trade/submitorder`, {
    method: "POST",
    body: JSON.stringify({
      username: user,
      symbol: tradeState.ticker,
      quantity: tradeState.quantity,
      price: tradeState.price,
      side: tradeState.side
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          console.log("ORDER SUCCESS");
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};

export const selectSide = side => dispatch => {
  dispatch({
    type: SELECT_SIDE,
    side: side
  });
};
