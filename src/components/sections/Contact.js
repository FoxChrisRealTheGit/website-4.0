import React from "react";
import axios from "axios";
import "../../css/form.css";
import { RECAPTCHA_KEY } from "../../config";
import OnHandleChange from "../../js/form/onHandleChange";
export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  async onHandleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    await axios.post("/send-message", {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    });
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }
  render() {
    return (
      <div className="section section--contact section--column" id="contact-me">
        <h3 className="title">Contact Me!</h3>
        <form className="form" onSubmit={this.onHandleSubmit}>
          <input
            className="form__input"
            id="name"
            onChange={e => OnHandleChange(e, this)}
            type="text"
            placeholder="Enter Name..."
            value={this.state.name}
            required
          />
          <input
            className="form__input"
            id="email"
            onChange={e => OnHandleChange(e, this)}
            type="email"
            placeholder="Enter Email Adress..."
            value={this.state.email}
            required
          />
          <input
            id="subject"
            className="form__input"
            onChange={e => OnHandleChange(e, this)}
            type="text"
            placeholder="Enter Subject..."
            value={this.state.subject}
            required
          />
          <textarea
            id="message"
            className="form__textarea"
            onChange={e => OnHandleChange(e, this)}
            value={this.state.message}
            placeholder="Enter Message..."
          />
          <div className="g-recaptcha" data-sitekey={RECAPTCHA_KEY} />
          <button className="button button--m-top button__submit" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}
