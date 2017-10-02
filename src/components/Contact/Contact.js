import React from "react";
import "./Contact.css";


class Contact extends React.Component {
  render() {
    return (
      <div className="col-2 contact">
        <h2>Contact Us</h2>
        <p>Call and talk to us during our business hours or send an email anytime. Walk-ins are also welcome!</p>
        <h3>Phone Number</h3>
        <p>+1 435-789-0209</p>
        <h3>E-mail</h3>
        <p>auto@easilink.com</p>
        <h3>Address</h3>
        <p>1348 South 1500 East</p>
      </div>
    )
  }
}

export default Contact;
