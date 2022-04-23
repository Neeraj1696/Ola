import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_link">
        <div className="header_link_data">
          <a href="/">Drive With Ola</a>
        </div>
        <div className="header_link_data">
          <a href="/">Ola Money</a>
        </div>
        <div className="header_link_data">
          <a href="/">Ola Foundation</a>
        </div>
        <div className="header_link_data">
          <a href="/">Share</a>
        </div>
        <div className="header_link_data">
          <a href="/">Offers</a>
        </div>
        <div className="header_link_data">
          <a href="/">Support</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
