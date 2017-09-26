import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="inner">
        </div>
        <div className="outer">
          <h1>Auto Repair Pros</h1>
          <h2>Quailty Work And Care</h2>
        </div>
        <div className="line"></div>
      </header>
    )
  }
}

export default Header;
