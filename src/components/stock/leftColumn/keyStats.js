import React from "react";
import { connect } from "react-redux";
import { convertMarketcap } from "../../../util";
class KeyStats extends React.Component {
  render() {
    let { key_stats, profile } = this.props;

    return (
      <div className="whitebg padded has-text-left">
        <div className="columns">
          <div className="column is-half">
            <table className="table is-fullwidth">
              <thead className="bold">
                <tr>
                  <td>Key Stats</td>
                  <td />
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Market Cap</td>
                  <td>{convertMarketcap(key_stats.marketcap)}</td>
                </tr>
                <tr>
                  <td>P/E</td>
                  <td>{Math.round(key_stats.peRatio * 100) / 100}</td>
                </tr>
                <tr>
                  <td>EPS</td>
                  <td>{Math.round(key_stats.ttmEPS * 100) / 100}</td>
                </tr>
                <tr>
                  <td>Dividend Yield</td>
                  <td>
                    {Math.round(key_stats.dividendYield * 100 * 100) / 100}%
                  </td>
                </tr>
                <tr>
                  <td>Beta</td>
                  <td>{Math.round(key_stats.beta * 100) / 100}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="column is-half">
            <table className="table is-fullwidth">
              <thead className="bold">
                <tr>
                  <td>Technicals</td>
                  <td />
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>200 day SMA</td>
                  <td>{key_stats.day200MovingAvg}</td>
                </tr>
                <tr>
                  <td>52 Week High</td>
                  <td>{key_stats.week52high}</td>
                </tr>
                <tr>
                  <td>52 Week Low</td>
                  <td>{key_stats.week52low}</td>
                </tr>
                <tr>
                  <td>52 Week Price Change</td>
                  <td>{Math.round(key_stats.week52change*100 *100)/100}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  key_stats: state.stock.key_stats,
  profile: state.stock.profile
});

export default connect(mapStateToProps, {})(KeyStats);
