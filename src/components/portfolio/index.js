import React from "react";
import { connect } from "react-redux";

import Header from "../header";
import { Link } from "react-router-dom";
import {
  loadPortfolioData,
  loadPortfolioStockPrices,
  createChart
} from "../../actions/loadPortfolioData";
import { loadTradeHistory } from "../../actions/loadTradeHistory";
import Holdings from "./leftColumn/holdings.js";
import TradeHistory from "./rightColumn/tradeHistory.js";

import { user } from "../../config";
import ApexCharts from "apexcharts";
var chart;
var chart2;
class Portfolio extends React.Component {
  componentDidMount() {
    let { loadPortfolioData, loadTradeHistory } = this.props;
    loadPortfolioData();
    loadTradeHistory(user);

    var options = {
      chart: {
        height: 250,
        type: "donut"
      },
      series: [],
      title: {
        text: `Long sector distribution`,
        align: "left"
      }
    };

    chart = new ApexCharts(document.querySelector("#portfoliochart"), options);

    chart.render();

    var options2 = {
      chart: {
        height: 250,
        type: "donut"
      },
      series: [],
      title: {
        text: `Short sector distribution`,
        align: "left"
      }
    };

    chart2 = new ApexCharts(
      document.querySelector("#portfoliochart2"),
      options2
    );

    chart2.render();
  }

  componentDidUpdate(prevProps) {
    let { longChart, shortChart } = this.props;
    if (prevProps.longChart !== longChart) {
      chart.updateOptions({
        labels: Object.keys(longChart)
      });
      chart.updateSeries(Object.values(longChart));
      chart2.updateOptions({
        labels: Object.keys(shortChart)
      });
      chart2.updateSeries(Object.values(shortChart));
    }
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
    return (
      <div>
        <Header />
        <br />
        <div className="App">
          <div className="columns is-multiline is-centered">
          <div className="column is-4">
              <div id="portfoliochart3" />
            </div>
            <div className="column is-4">
              <div id="portfoliochart" />
            </div>
            <div className="column is-4">
              <div id="portfoliochart2" />
            </div>
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

  longChart: state.portfolio.longChart,
  shortChart: state.portfolio.shortChart,

  tradeHistory: state.tradeHistory.tradeHistory,
  tradeHistoryLoaded: state.tradeHistory.loaded
});

export default connect(mapStateToProps, {
  loadPortfolioData,
  loadTradeHistory
})(Portfolio);
