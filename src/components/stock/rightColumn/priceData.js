import React from "react";
import { connect } from "react-redux";

class PriceData extends React.Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const ticker = urlParams.get("ticker");

    let { key_stats, quote, holdings } = this.props;
    console.log(holdings);
    return (
      <div className="whitebg">
        <table className="table is-fullwidth is-borderless">
          <thead className="bold">
            <tr>
              <td style={{ width: "25%" }}>{ticker}</td>
              <td style={{ width: "25%" }} />
              <td style={{ width: "25%" }} />
              <td style={{ width: "25%" }} className="has-text-right">
                {quote === 0 ? <i className="fas fa-spinner fa-spin" /> : `$${quote}`}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="is-size-7">
              <td>Position</td>
              <td className="has-text-right ">
                {holdings[ticker] ? holdings[ticker].position : "-"}
              </td>
              <td>Market Val</td>
              <td className="has-text-right ">
                {(holdings[ticker] && quote) ? `$${Math.round(holdings[ticker].position * quote * 100)/100}` : "-"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //current stock name
  key_stats: state.stock.key_stats,
  quote: state.stock.quote,
  holdings: state.portfolio.holdings
});

export default connect(mapStateToProps, {})(PriceData);
