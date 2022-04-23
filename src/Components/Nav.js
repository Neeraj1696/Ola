import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        src="https://www.olacabs.com/webstatic/img/ola-logo.svg"
        alt="Error Logo"
      />
      <div className="navbar">
        <div className="navbar_link">
          <div className="navbar-item">
            <a href="/">Ola Drive</a>
          </div>
          <div className="navbar-item">
            <a href="/">Ola Select</a>
          </div>
          <div className="navbar-item">
            <a href="/">Ola Fleet</a>
          </div>
          <div className="navbar-item">
            <a href="/">Features</a>
          </div>
          <button>Book Know</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
