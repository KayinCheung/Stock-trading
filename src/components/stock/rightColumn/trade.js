import React from "react";
import { connect } from "react-redux";

class Trade extends React.Component {
  render() {
    return (
      <div className="whitebg padded">
        <p className="has-text-centered is-size-4 bold">Trade</p>
        <hr />
        <p className="has-text-left is-size-7 bold">Order:</p>
        <div className="columns is-centered">
          <div className="column is-half">
            <button className="button is-fullwidth">Buy</button>
          </div>
          <div className="column is-half">
            <button className="button is-fullwidth">Sell</button>
          </div>
        </div>
        <p className="has-text-left is-size-7 bold">Price:</p>

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="number"
              step="0.01"
              placeholder="67.18"
              id="price_input"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-dollar-sign" />
            </span>
          </p>
        </div>

        <button className="button is-success is-fullwidth">Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //current stock name
});

export default connect(mapStateToProps, {})(Trade);
