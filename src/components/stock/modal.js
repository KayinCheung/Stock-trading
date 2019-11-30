import React from "react";
import { connect } from "react-redux";
import { closeModal, modalConfirmTrade } from "../../actions/trade";
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
          {error === true ? (
            <InvalidInput />
          ) : (
            <ValidInput
              side={side}
              price={price}
              quantity={quantity}
              symbol={symbol}
            />
          )}
        </div>
        <button className="modal-close is-large" onClick={() => closeModal()} />
      </div>
    );
  }
}

const ValidInput = props => {
  return (
    <div className="has-text-centered">
      <p className="bold is-size-4">Trade Confirmation Window</p>
      <br />
      <p>
        You will{" "}
        <b>
          {props.side} {props.quantity} share{props.quantity > 1 ? "s" : ""}
        </b>{" "}
        of <b>{props.symbol}</b> at <b>${props.price}/share</b> for a total of{" "}
        <b>${props.quantity * props.price}</b>.
      </p>
      <br />
      <button className="button is-success">
        Confirm and proceed with trade
      </button>
    </div>
  );
};

const InvalidInput = props => {
  return <div>a</div>;
};

const mapStateToProps = state => ({
  //current stock name
  active: state.trade.showModal,
  side: state.trade.side,
  price: state.trade.price,
  quantity: state.trade.quantity,
  symbol: state.trade.symbol,
  error: state.trade.error
});

export default connect(mapStateToProps, { closeModal, modalConfirmTrade })(
  StockModal
);
