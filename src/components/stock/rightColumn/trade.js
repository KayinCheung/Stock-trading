import React from "react";
import { connect } from "react-redux";
import { submitTrade, selectSide } from "../../../actions/trade";
class Trade extends React.Component {
  componentDidMount(){ 
    //document.getElementById("price_input").value = 200
    document.getElementById("qty_input").value = 100

  }
  render() {
    let { submitTrade, selectSide, quote, quantity, side, error } = this.props;
    return (
      <div className="whitebg padded outline">
        <p className="has-text-centered is-size-5 bold">Trade</p>
        <p className="has-text-left is-size-7 bold">Select:</p>
        <div className="columns is-centered">
          <div className="column is-half">
            <button
              className={`button is-fullwidth is-success ${side === "buy"
                ? ""
                : "is-outlined"}`}
              onClick={() => selectSide("buy")}
            >
              Buy
            </button>
          </div>
          <div className="column is-half">
            <button
              className={`button is-fullwidth is-danger ${side === "buy"
                ? "is-outlined"
                : ""}`}
              onClick={() => selectSide("sell")}
            >
              Sell
            </button>
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
                  min="0.01"
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
                  min="1"
                  id="qty_input"
                />
              </p>
            </div>
          </div>
        </div>
        <button
          className="button is-success is-fullwidth"
          onClick={() => {
            submitTrade(
              new URLSearchParams(window.location.search).get("ticker"),
              document.getElementById("price_input").value,
              document.getElementById("qty_input").value
            );
          }}
        >
          Submit Order
        </button>
        <p className="is-size-7 has-text-danger">{error ? 'Invalid quantity and/or price.' : ''}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //current stock name
  key_stats: state.stock.key_stats,  
  quote: state.stock.quote,
  quantity: state.trade.quantity,
  side: state.trade.side,
  error: state.trade.error
  
});

export default connect(mapStateToProps, { submitTrade, selectSide })(Trade);
