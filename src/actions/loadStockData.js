import {
  START_LOAD_STOCK_DATA,
  LOAD_STOCK_DATA,
  LOAD_STOCK_CHART,
  LOAD_KEY_STATS,
  LOAD_STOCK_PROFILE,
  LOAD_STOCK_QUOTE
} from "./types";

import { stock_base_url, secret, sandbox_base_url } from "../config";
/*
Load stock data upon user clicking search. Possible outcomes:

1) Stock symbol is valid, data is returned
2) Stock symbol is invalid. 
3) API unavailable.

*/

const loadStockData = symbol => dispatch => {
  console.log("LOAD STOCK DATA", symbol)
  dispatch({
    type: START_LOAD_STOCK_DATA,
    symbol: symbol
  });

  const key_stats_endpoint = `stock/${symbol}/stats`;
  const profile_endpoint = `stock/${symbol}/company`;
  const quote_endpoint = `stock/${symbol}/quote/close`; //Only for paid subscribers
  const previous_close_endpoint = `stock/${symbol}/previous`;
  const chart_endpoint = `stock/${symbol}/chart/1m`;

  fetch(`${stock_base_url}/${key_stats_endpoint}?token=${secret}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: LOAD_KEY_STATS,
            key_stats: data
          });
          console.log(data);
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));

  fetch(`${stock_base_url}/${profile_endpoint}?token=${secret}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: LOAD_STOCK_PROFILE,
            profile: data
          });
          console.log(data);
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));

  fetch(`${stock_base_url}/${previous_close_endpoint}?token=${secret}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          console.log(data.close);

          dispatch({
            type: LOAD_STOCK_QUOTE,
            quote: data.close
          });

          document.getElementById("price_input").value = data.close;
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));

  fetch(`${stock_base_url}/${chart_endpoint}?token=${secret}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: LOAD_STOCK_CHART,
            chart: data
          });
          console.log(data);
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};

export default loadStockData;
