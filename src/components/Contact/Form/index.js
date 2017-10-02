import React from "react";
import Form from "./Form.js";
import axios from "axios";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      number: "",
      message: "",
      isValid: false,
      isOpen: false,
      messageIsSent: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.checkValid = this.checkValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    event.persist()
    this.setState(prevState => ({
      [event.target.name]: event.target.value
    }));
    this.checkValid();
  }
  toggleOpen(event) {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
  checkValid() {
    let isValid = true;
    if(this.state.name === "") {
      isValid = false;
    } else if(this.state.number === "") {
      isValid = false;
    } else if(this.state.message === "") {
      isValid = false;
    }
    this.setState(prevState => ({
      isValid
    }));
  }
  handleSubmit() {
    axios.post("/contact", this.state).then((response) => {
      this.setState(prevState => ({
        name: "",
        number: "",
        message: "",
        messageIsSent: true
      }))
    }).catch(err => alert(err));
  }
  render() {
    return (
      <Form handleInputChange={this.handleInputChange} toggleOpen={this.toggleOpen} handleSubmit={this.handleSubmit} {...this.state}/>
    )
  }
}

export default FormContainer;
