import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="col-2">
        <form>
          <input placeholder="Name" type="text"/>
          <input placeholder="Phone Number" type="tel"/>
          <textarea placeholder="Message" type="tel">
          </textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    )
  }
}

export default Form;
