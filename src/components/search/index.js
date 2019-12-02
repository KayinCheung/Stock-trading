import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import search from "../../actions/search";

/*
The search bar at the header.

- Upon hitting enter or search button, it checks with backend if symbol exists.
1) If exists, direct to /stock page, and load info for that stock.
2) If does not exist, show an error msg to user to the left of search bar.

When user begins input and if error msg is already displayed, error msg is removed.
*/

class Search extends Component {
  render() {
    let { search } = this.props;
    return (
      <nav className="level">
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input
                className="input is-fullwidth"
                type="text"
                placeholder="Input stock symbol"
                id="inputStockText"
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    search(e.target.value.toUpperCase(), this.props.history);
                  } else{
                    document.getElementById('search-info').innerText = ""
                  }
                }}
              />
            </p>
            <p className="control">
              <button
                className="button"
                id="inputStockBtn"
                onClick={() => {
                  search(
                    document
                      .getElementById("inputStockText")
                      .value.toUpperCase(),
                    this.props.history
                  );
                }}
              >
                Search
              </button>
            </p>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(connect(null, { search })(Search));
