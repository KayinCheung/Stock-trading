import React from "react";
import { connect } from "react-redux";

class StockModal extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-background" />
        <div className="modal-content box">modal</div>
        <button className="modal-close is-large" aria-label="close" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //current stock name
});

export default connect(mapStateToProps, {})(StockModal);
