import React from "react";
import Contact from "./Contact.js";
import Form from "./Form";

class ContactContainer extends React.Component {
  render() {
    return (
      <section className="container">
        <Contact />
        <Form/>
      </section>
    )
  }
}

export default ContactContainer;
