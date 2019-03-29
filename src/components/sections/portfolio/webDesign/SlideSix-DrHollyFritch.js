import React from "react";

export default function SlideFour(props) {
  return (
    <div className="section section--h-full">
      <div className="carousel--item-one">
        <img
          className="image"
          src="./images/portfolio/web/drHollyFritch.jpg"
          alt=""
        />
      </div>
      <div className="section carousel--item-two">
        <h3 className="title">Dr Holly Fritch Kirby</h3>
        <h5>Worked on: March 2019</h5>
        <p className="body">
          <em>HTML/Golang</em>
        </p>
        <p className="body">
          Built for a Dermatology Business to give the client a web presence.
        </p>
      </div>
    </div>
  );
}
