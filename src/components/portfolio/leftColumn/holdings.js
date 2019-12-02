import React from "react";
import { Link } from "react-router-dom";

const Holdings = props => {
  const usd = <span className="is-size-7">&nbsp;USD</span>;
  console.log(props.stock_quotes);
  const thead = (
    <thead className="bold">
      <tr>
        <td>Symbol</td>
        <td>Quantity</td>
        <td>Current Price</td>
        <td>Market Value</td>
      </tr>
    </thead>
  );
  if (props.loaded === false) {
    return (
      <div className="whitebg">
        <table className="table is-fullwidth">{thead}</table>
        <i className="fas fa-spinner fa-spin" />
        <br />
        <br />
      </div>
    );
  }
  return (
    <div className="whitebg">
      <table className="table is-fullwidth">
        {thead}
        <tbody>
          {Object.keys(props.holdings).map(stock => {
            return (
              <tr key={stock}>
                <td>
                  <Link to={`/stock?ticker=${stock}`}>
                    <span className="bold">{stock}</span>
                  </Link>
                </td>
                <td>{props.holdings[stock].position}</td>
                <td>
                  {props.stock_quotes[stock].previous.close}
                  {usd}
                </td>
                <td>
                  {props.stock_quotes[stock].previous.close *
                    props.holdings[stock].position}
                  {usd}
                </td>
              </tr>
            );
          })}
          <tr>
            <td />
            <td />
            <td className="bold">Cash</td>
            <td>
              {props.cash.USD} {usd}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Holdings;
