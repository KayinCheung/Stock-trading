import { START_LOAD_TRADE_HISTORY, LOADED_TRADE_HISTORY } from "./types";
import { backend_url } from "../config";

export const loadTradeHistory = user => dispatch => {
  dispatch({
    type: START_LOAD_TRADE_HISTORY
  });
  console.log(user)
  fetch(`${backend_url}/trade?username=${user}&page=${0}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          console.log(data.data);
          dispatch({
            type: LOADED_TRADE_HISTORY,
            tradeHistory: data.data
          });
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};
