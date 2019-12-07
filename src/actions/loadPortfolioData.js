import {
  START_LOAD_PORTFOLIO_DATA,
  LOADED_PORTFOLIO_DATA,
  START_LOAD_PORTFOLIO_STOCK_PRICE,
  LOADED_PORTFOLIO_STOCK_PRICE,
  CHARTS_CREATED
} from "./types";

import { backend_url, stock_base_url, secret, user } from "../config";
/*


*/
export const loadPortfolioData = () => dispatch => {
  dispatch({
    type: START_LOAD_PORTFOLIO_DATA
  });
  fetch(`${backend_url}/portfolio?user=${user}`)
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: LOADED_PORTFOLIO_DATA,
            payload: data
          });

          dispatch(loadPortfolioStockPrices(data.stock));
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};
/*

fetch('https://cloud.iexapis.com/v1/stock/market/batch?symbols=aapl,tsla&types=quote&token=sk_4bf3e9ec445e4ff78d3aebdf218190a4').then(data => data.json().then(d => console.log(d)))*/

export const loadPortfolioStockPrices = stocks => dispatch => {
  dispatch({
    type: START_LOAD_PORTFOLIO_STOCK_PRICE
  });
  fetch(
    `${stock_base_url}/stock/market/batch?symbols=${Object.keys(stocks).join(
      ","
    )}&types=previous&token=${secret}`
  )
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: LOADED_PORTFOLIO_STOCK_PRICE,
            payload: data
          });
          //console.log(data);
          dispatch(createChart(stocks, data))
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};

export const createChart = (holdings, quotes) => dispatch => {
  let longSectorChart = {}
  let shortSectorChart = {}
  let longShortChart = { long: 0, short: 0 }
  Object.keys(holdings).map((stock, i) => { 
    let val = Math.abs((holdings[stock].position * quotes[stock].previous.close).toFixed(2))

    if (holdings[stock].position > 0){
      holdings[stock.sector] in longSectorChart ? 
      longSectorChart[holdings[stock].sector] += val :
      longSectorChart[holdings[stock].sector] = val

      longShortChart.long += val
    } else {
      holdings[stock.sector] in shortSectorChart ? 
      shortSectorChart[holdings[stock].sector] += val :
      shortSectorChart[holdings[stock].sector] = val

      longShortChart.short += val
    }
  })
  dispatch({
    type: CHARTS_CREATED,
    longChart: longSectorChart,
    shortChart: shortSectorChart,
    longShortChart: longShortChart
  })

}