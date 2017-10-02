import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-modal";

const modalStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    maxWidth: "350px",
    maxHeight: "250px",
    margin: "auto",
    textAlign: "center"
  }
}

class Form extends React.Component {
  render() {
    return (
      <div className="col-2">
        <form onSubmit={(e) => { e.preventDefault(); this.props.toggleOpen(); this.props.handleSubmit() }}>
          <input onChange={this.props.handleInputChange} value={this.props.name} name="name" placeholder="Name" type="text"/>
          <input onChange={this.props.handleInputChange} value={this.props.number} name="number" placeholder="Phone Number" type="tel"/>
          <textarea onChange={this.props.handleInputChange} value={this.props.message} name="message" placeholder="Message" type="tel"></textarea>
          <button type="submit" disabled={!this.props.isValid} className="btn">Send</button>
          <p className="message-text" style={{display: this.props.messageIsSent ? "inherit" : "none"}}>Message was sent</p>
        </form>
        <Modal isOpen={this.props.isOpen} onRequestClose={this.props.toggleOpen} style={modalStyles} contentLabel="Captcha">
          <h2>Almost there</h2>
          <p>Just finish this Captcha to send the message</p>
          <ReCAPTCHA ref="recaptcha" sitekey="" onChange={(e) => {this.props.toggleOpen()}}/>
        </Modal>
      </div>
    )
  }
}

export default Form;
