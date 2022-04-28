import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <div className="navbar-left">
        <a href="">
          <img
            src="https://www.olacabs.com/webstatic/img/ola-logo.svg"
            alt="logo image"
          />
        </a>
      </div>
      <div className="navbar-right">
        <a href="/">Ola Drive</a>
        <a href="/">Ola Select</a>
        <a href="/">Ola Fleet</a>
        <a href="/">Features</a>
        <a href="">
          <button>Book Now</button>
        </a>
      </div>
    </div>
  );
}

export default Nav;
