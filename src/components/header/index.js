import React from "react";
import { Link } from "react-router-dom";
import Search from "../search";
function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <p className="navbar-item">Stock Trading App</p>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Header;
