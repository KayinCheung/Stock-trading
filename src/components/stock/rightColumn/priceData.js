import React from "react";
import { connect } from "react-redux";

class PriceData extends React.Component {
  render() {
    return (
      <div className="whitebg">
        <table className="table is-fullwidth is-borderless">
          <thead className="bold">
            <tr>
              <td style={{ width: "25%" }}>AAPL</td>
              <td style={{ width: "25%" }} />
              <td style={{ width: "25%" }} />
              <td style={{ width: "25%" }} className="has-text-right">
                {}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="is-size-7">
              <td>Position</td>
              <td />
              <td />
              <td className="has-text-right ">0</td>
            </tr>
            <tr className="is-size-7">
              <td>Daily P&L</td>
              <td>0</td>
              <td>Unrealized</td>
              <td className="has-text-right">0</td>
            </tr>
            <tr className="is-size-7">
              <td>Cost Basis</td>
              <td>0</td>
              <td>Mkt Value</td>
              <td className="has-text-right">0</td>
            </tr>
            <tr className="is-size-7">
              <td />
              <td />
              <td />
              <td className="has-text-right">
                <button className="button is-outlined is-link is-small">
                  Close Position
                </button>
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

});

export default connect(mapStateToProps, {})(PriceData);
