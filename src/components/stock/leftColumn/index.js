import React from "react";
import CompanySummary from "./companySummary";
import KeyStats from "./keyStats";

const LeftColumn = props => {
  return (
    <div>
      <div id="stockchart" className="whitebg" />
      <br />
      <KeyStats />
      <br />
      <CompanySummary />
    </div>
  );
};

export default LeftColumn;
