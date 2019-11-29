import React from "react";
import { Link } from 'react-router-dom'

const Holdings = props => {
  const usd = <span className="is-size-7">&nbsp;USD</span>
  return (
    <div className="whitebg">
    <table className="table is-fullwidth">
      <thead className="bold">
        <tr>
          <td>Symbol</td>
          <td>Quantity</td>
          <td>Current Price</td>
          <td>Market Value</td>
        </tr>
      </thead>
      <tfoot>
      <tr>
          <td></td>
          <td></td>
          <td className="bold">Total</td>
          <td>{props.portfolio_value}{usd}</td>
        </tr>
      </tfoot>
      <tbody>
        {props.holdings.map((row, i) => {
          return (
            <tr key={row.symbol}>
              <td><Link to={`/stock?${row.symbol}`}><span className="bold">{row.symbol}</span></Link><p className="is-size-7">Apple INC</p></td>
              <td>{row.quantity}</td>
              <td>{row.current_price}{usd}</td>
              <td>{row.current_price * row.quantity}{usd}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default Holdings;
