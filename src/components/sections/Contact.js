import React from "react";

export default class ContactMe extends React.Component {
  onHandleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    return (
      <div className="section section--contact" id="contact-me">
        Coming Soon...
      </div>
    );
  }
}
