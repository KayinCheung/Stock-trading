import { START_LOAD_STOCK_DATA, LOAD_STOCK_DATA, LOAD_KEY_STATS, LOAD_STOCK_PROFILE } from "./types";

import { stock_base_url, secret } from "../config";
/*
Load stock data upon user clicking search. Possible outcomes:

1) Stock symbol is valid, data is returned
2) Stock symbol is invalid. 
3) API unavailable.

*/

const loadStockData = symbol => dispatch => {
  dispatch({
    type: START_LOAD_STOCK_DATA
  });
  console.log(stock_base_url);

  const key_stats_endpoint = `stock/${symbol}/stats`;
  const profile_endpoint = `stock/${symbol}/company`;
  //const price_endpoint = `stock/${symbol}/quote/`; //might not have data
  fetch(`${stock_base_url}/${key_stats_endpoint}?token=${secret}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: LOAD_KEY_STATS,
            key_stats: data
          });
          console.log(data)
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
          console.log(data)
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};

export default loadStockData;
