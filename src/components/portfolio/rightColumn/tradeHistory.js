import React from "react";
import { Link } from "react-router-dom";

const TradeHistory = props => {
  const usd = <span className="is-size-7">&nbsp;USD</span>;
  const thead = (
    <thead className="bold">
      <tr>
        <td>Symbol</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Market Value</td>
        <td>Timestamp</td>
      </tr>
    </thead>
  );
  if (props.loaded === false) {
    return (
      <div className="whitebg">
        <p className="is-size-4">Trade History</p>
        <table className="table is-fullwidth">{thead}</table>
        <i className="fas fa-spinner fa-spin" />
        <br />
        <br />
      </div>
    );
  }
  return (
    <div className="whitebg">
      <p className="is-size-4">Last 10 Trades</p>
      <table className="table is-fullwidth">
        {thead}
        <tbody>
          {props.tradeHistory.map(trade => {
            return (
              <tr key={trade._id}>
                <td className="bold">
                  <Link to={`/stock?ticker=${trade.symbol}`}>
                    {trade.symbol}
                  </Link>
                </td>
                <td>{trade.quantity}</td>
                <td>
                  {trade.price}
                  {usd}
                </td>
                <td>
                  {Math.round(trade.price * trade.quantity * 100) / 100}
                  {usd}
                </td>
                <td>{new Date(trade.createdAt).toLocaleString()}</td>
              </tr>
            );
          })}
          <tr />
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
