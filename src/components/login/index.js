import React from "react";
import { connect } from "react-redux";

import Header from "../header";
import { Link } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="columns is-centered">
          <div className="field column is-one-third">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="text" placeholder="John" />
            </div>
            <p className="help"></p>
            <br/>
            <Link to="/portfolio"><button className="button is-fullwidth is-link">Login</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Login);
