import React from "react";
import PriceData from "./priceData"
import Trade from "./trade"

const RightColumn = props => {
    return (
      <div>
       <PriceData/>
       <br/>
       <Trade/>
      </div>
    );
  
}

export default RightColumn;