import React, { Component } from 'react';
import { connect } from 'react-redux'

class Search extends Component {
    render() {
      return (
        <nav className="level">
          <div className="level-item">
            <div className="field has-addons">
              <p className="control">
                <input className="input is-fullwidth" type="text" placeholder="Input stock symbol" id="inputStockText"
                   onKeyPress={(e) => {
                     if (e.key === "Enter"){
                        
                     }}}/>
              </p>
              <p className="control">
                <button className="button" id="inputStockBtn" onClick={() =>{
                    
                }}>
                  Search
                </button>
              </p>
            </div>
        </div>
      </nav>
       
      );
    }
  }

 
export default connect(null, {  })(Search);
