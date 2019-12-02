import {
  START_LOAD_PORTFOLIO_DATA,
  LOADED_PORTFOLIO_DATA,
  START_LOAD_PORTFOLIO_STOCK_PRICE,
  LOADED_PORTFOLIO_STOCK_PRICE
} from "./types";

import { backend_url, stock_base_url, secret } from "../config";
/*


*/
export const loadPortfolioData = () => dispatch => {
  dispatch({
    type: START_LOAD_PORTFOLIO_DATA
  });
  fetch(`${backend_url}/portfolio?user=${"kayin"}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: LOADED_PORTFOLIO_DATA,
            payload: data
          });
          console.log(data);
          
          dispatch(loadPortfolioStockPrices(Object.keys(data.stock)));
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};

/*

fetch('https://cloud.iexapis.com/v1/stock/market/batch?symbols=aapl,tsla&types=quote&token=sk_4bf3e9ec445e4ff78d3aebdf218190a4').then(data => data.json().then(d => console.log(d)))*/

export const loadPortfolioStockPrices = (stocks) => dispatch => {
  dispatch({
    type: START_LOAD_PORTFOLIO_STOCK_PRICE
  });
  fetch(
    `${stock_base_url}/stock/market/batch?symbols=${stocks.join(',')}&types=previous&token=${secret}`
  )
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          console.log(data)
          dispatch({
            type: LOADED_PORTFOLIO_STOCK_PRICE,
            payload: data
          });
          //console.log(data);
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};
