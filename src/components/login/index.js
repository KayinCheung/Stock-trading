import React from "react";
import { connect } from "react-redux";

import Header from "../header";
import { Link } from "react-router-dom";

import loginAction from "../../actions/loginAction";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="columns is-centered">
          <div className="field column is-one-third">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="text" placeholder="John" id="login_name"/>
            </div>
            <p className="help" />
            <br />
            <Link to="/portfolio">
              <button
                className="button is-fullwidth is-link"
                onClick={() => this.props.loginAction(document.getElementById('login_name').value)}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { loginAction })(Login);
