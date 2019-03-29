import React from "react";

export default function SlideOne(props) {
  return (
    <div className="section section--h-full">
      <div className="carousel--item-one">
        <img
          className="image"
          src="./images/portfolio/web/2Liesand1Truth.png"
          alt=""
        />
      </div>
      <div className="section carousel--item-two">
        <h3 className="title">Two Lies and One Truth</h3>
        <h5>Worked on: February 2017 - June 2017</h5>
        <p className="body">Website created to support a podcast project. I learned quite a bit about RSS feeds.</p>
      </div>
    </div>
  );
}
