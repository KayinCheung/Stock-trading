import React from "react";
import { connect } from "react-redux";
import { closeModal, modalConfirmTrade } from "../../../actions/trade";
class StockModal extends React.Component {
  render() {
    let {
      active,
      error,
      side,
      price,
      quantity,
      symbol,
      closeModal,
      modalConfirmTrade
    } = this.props;
    return (
      <div className={`modal ${active === true ? "is-active" : ""}`}>
        <div className="modal-background" onClick={() => closeModal()} />
        <div className="modal-content box">
          <div className="has-text-centered">
            <p className="bold is-size-4">Trade Confirmation Window</p>
            <br />
            <p>
              You will{" "}
              <b>
                {side} {quantity} share{quantity > 1 ? "s" : ""}
              </b>{" "}
              of <b>{symbol}</b> at <b>${price}/share</b> for a total of{" "}
              <b>${quantity * price}</b>.
            </p>
            <br />
            <div className="buttons is-centered">
              <button
                className="button is-success"
                onClick={() => modalConfirmTrade()}
              >
                Confirm
              </button>
              <button className="button is-danger" onClick={() => closeModal()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <button className="modal-close is-large" onClick={() => closeModal()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //current stock name
  active: state.trade.showModal,
  side: state.trade.side,
  price: state.trade.price,
  quantity: state.trade.quantity,
  symbol: state.trade.ticker,
  error: state.trade.error
});

export default connect(mapStateToProps, { closeModal, modalConfirmTrade })(
  StockModal
);
