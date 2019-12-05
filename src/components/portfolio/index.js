import React from "react";
import { connect } from "react-redux";

import Header from "../header";
import { Link } from "react-router-dom";
import {
  loadPortfolioData,
  loadPortfolioStockPrices
} from "../../actions/loadPortfolioData";
import { loadTradeHistory } from "../../actions/loadTradeHistory";
import Holdings from "./leftColumn/holdings.js";
import TradeHistory from "./rightColumn/tradeHistory.js";

import { user } from "../../config";

class Portfolio extends React.Component {
  componentDidMount() {
    let { loadPortfolioData, loadTradeHistory } = this.props;
    loadPortfolioData();
    loadTradeHistory(user);
  }
  render() {
    let {
      holdings,
      stock_quotes,
      cash,
      loaded,
      tradeHistory,
      tradeHistoryLoaded
    } = this.props;
console.log(tradeHistory)
    return (
      <div>
        <Header />
        <br />
        <div className="App">
          <div className="columns is-multiline is-centered">
            <div className="column is-6">
              <Holdings
                holdings={holdings}
                stock_quotes={stock_quotes}
                cash={cash}
                loaded={loaded}
              />
            </div>
            <div className="column is-6">
              <TradeHistory
                tradeHistory={tradeHistory}
                loaded={tradeHistoryLoaded}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loaded: state.portfolio.loaded,
  holdings: state.portfolio.holdings,
  stock_quotes: state.portfolio.stock_quotes,
  cash: state.portfolio.cash,

  tradeHistory: state.tradeHistory.tradeHistory,
  tradeHistoryLoaded: state.tradeHistory.loaded
});

export default connect(mapStateToProps, {
  loadPortfolioData,
  loadTradeHistory
})(Portfolio);
