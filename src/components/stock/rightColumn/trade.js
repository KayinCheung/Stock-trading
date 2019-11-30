import React from "react";
import { connect } from "react-redux";

class Trade extends React.Component {
  render() {
    return (
      <div className="whitebg padded">
        <p className="has-text-centered is-size-5 bold">Trade</p>
        <p className="has-text-left is-size-7 bold">Select:</p>
        <div className="columns is-centered">
          <div className="column is-half">
            <button className="button is-fullwidth is-outlined is-success">Buy</button>
          </div>
          <div className="column is-half">
            <button className="button is-fullwidth is-outlined is-danger">Sell</button>
          </div>
        </div>


        <div className="columns is-centered">
          <div className="column is-half">
        <p className="has-text-left is-size-7 bold">Price:</p>

        <div className="field">
          <p className="control has-icons-left">
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
        </div>
        <div className="column is-half">

        <p className="has-text-left is-size-7 bold">Quantity:</p>

        <div className="field">
          <p className="control">
            <input
              className="input"
              type="number"
              step="1"
              placeholder="10"
              id="qty_input"
            />
            
          </p>
        </div>
    
        </div>
        </div>
        <button className="button is-success is-fullwidth">Submit Limit Order</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //current stock name
});

export default connect(mapStateToProps, {})(Trade);
