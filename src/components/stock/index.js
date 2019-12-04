import React from "react";
import { connect } from "react-redux";

import Header from "../header";
import { Link } from "react-router-dom";

import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";

import ApexCharts from "apexcharts";
import { loadPortfolioData } from "../../actions/loadPortfolioData";
import loadStockData from "../../actions/loadStockData";
import StockModal from "./modal/tradeConfirmation.js";
var chart;

class Stock extends React.Component {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const ticker = urlParams.get("ticker");
    let {
      loadStockData,
      loadPortfolioData,
      portfolio_loaded,
      barChart
    } = this.props;

    var options = {
      chart: {
        height: 350,
        type: "candlestick"
      },
      series: [],
      title: {
        text: `${ticker} 1 month chart`,
        align: "left"
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };

    chart = new ApexCharts(document.querySelector("#stockchart"), options);

    chart.render();

    //Handle case where user refreshed page, or directly accessed /stock page
    if (!portfolio_loaded) {
      loadPortfolioData();
    }

    loadStockData(ticker);
  }

  componentDidUpdate(prevProps) {
    let { barChart, symbol, loadStockData } = this.props;

    /*
      Once chart data is loaded, update the chart
    */
    if (JSON.stringify(barChart) !== JSON.stringify(prevProps.barChart)) {
      chart.updateSeries([
        {
          data: barChart.map(bar => {
            return {
              x: bar.date,
              y: [bar.open, bar.high, bar.low, bar.close]
            };
          })
        }
      ]);
    }

    /*
      Handle user searching while on /stock page
      Reloads stock charts/fundamentals and renames the chart title.
    */

    if (prevProps.symbol !== symbol) {
      loadStockData(symbol);
      chart.updateOptions({
        title: {
          text: `${symbol} 1 month chart`
        }
      });
    }
  }

  render() {
    let { key_stats, profile, portfolio_loaded } = this.props;
    return (
      <div>
        <Header />
        <br />
        <StockModal />
        <div className="App">
          <div className="columns is-centered">
            <div className="column is-two-third">
              <LeftColumn />
            </div>
            <div className="column is-one-third">
              <RightColumn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  key_stats: state.stock.key_stats,
  profile: state.stock.profile,
  barChart: state.stock.chart,
  symbol: state.stock.symbol,

  portfolio_loaded: state.portfolio.loaded,
  holdings: state.portfolio.holdings
});

export default connect(mapStateToProps, { loadStockData, loadPortfolioData })(
  Stock
);
