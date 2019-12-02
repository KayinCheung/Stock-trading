import React from "react";
import { connect } from "react-redux";

import Header from "../header";
import { Link } from "react-router-dom";
import {
  loadPortfolioData,
  loadPortfolioStockPrices
} from "../../actions/loadPortfolioData";
import Holdings from "./leftColumn/holdings.js";

class Portfolio extends React.Component {
  componentDidMount() {
    let { loadPortfolioData } = this.props;
    loadPortfolioData();
  }
  render() {
    let { holdings, stock_quotes, cash, loaded } = this.props;

    return (
      <div>
        <Header />
        <br />
        <div className="App">
          <div className="columns is-multiline is-centered">
            <div className="column is-half">
              <Holdings
                holdings={holdings}
                stock_quotes={stock_quotes}
                cash={cash}
                loaded={loaded}
              />
            </div>
            <div className="column is-half" />
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
  cash: state.portfolio.cash
});

export default connect(mapStateToProps, { loadPortfolioData })(Portfolio);
