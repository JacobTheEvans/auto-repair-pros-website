import React from "react";
import "./Footer.css";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Copyright <FontAwesome name="copyright"/> 2017 All Rights Reserved</p>
        <p>Made By <a href="https://jacobtheevans.com" rel="noopener noreferrer" target="_blank">Jacob Evans</a></p>
      </footer>
    )
  }
}

export default Footer;
