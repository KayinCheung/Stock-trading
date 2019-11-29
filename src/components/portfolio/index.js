import React from "react";
import { connect } from "react-redux";

import Header from "../header";
import { Link } from "react-router-dom";
import * as d3 from "d3";

import loadPortfolioData from "../../actions/loadPortfolioData";
import Holdings from "./holdings.js";
class Portfolio extends React.Component {
  componentDidMount() {
    let { loadPortfolioData } = this.props;
    loadPortfolioData();
  }
  render() {
    const holdings = [{ symbol: "AAPL", quantity: 23, current_price: 212.22 }];
    return (
      <div>
        <Header />
        <br />
        <div className="App">
          <div>Portfolio value: $183283 USD</div>
          <div className="columns is-multiline is-centered">
            <div className="column is-half">
              <Holdings holdings={holdings} portfolio_value={218281} />
            </div>
            <div className="column is-half" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { loadPortfolioData })(Portfolio);
