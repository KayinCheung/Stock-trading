import React from "react";
import { Link } from "react-router-dom";
import Search from "../search";
function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <p className="navbar-item">
          <Link to="/portfolio">Stock Trading App</Link>
        </p>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <span className="has-text-danger is-size-7" id="search-info" />
        </div>
        <div className="navbar-item">
          <Search />
        </div>
        <div className="navbar-item">
          <Link to="/">Logout</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
