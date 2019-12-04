import { SEARCH_SUCCESS, SYMBOL_NOT_FOUND } from "./types";
import { stock_base_url, secret, sandbox_base_url } from "../config";

/*
Call a lightweight endpoint to check if symbol exist. If exist, go to /stock page and show details on ticker.
If does not exist, show notify user symbol does not exist.
*/
const search = (symbol, history) => dispatch => {
  const key_stats_endpoint = `stock/${symbol}/stats`;
  fetch(`${stock_base_url}/${key_stats_endpoint}?token=${secret}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: SEARCH_SUCCESS,
            symbol: symbol
          });
          history.push(`/stock?ticker=${symbol}`)
        });
      } else {
        dispatch({
          type: SYMBOL_NOT_FOUND
        });
        document.getElementById('search-info').innerText = "Ticker not found"
      }
    })
    .catch(e => console.log(e));
};

export default search;
