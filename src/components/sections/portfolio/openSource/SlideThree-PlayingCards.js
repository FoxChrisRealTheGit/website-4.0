import React from "react";

export default function SlideThree(props) {
  return (
    <div className="section section--h-full">
      <div className="carousel--item-one">
        <img
          className="image"
          src="./images/portfolio/openSource/cards.jpg"
          alt=""
        />
      </div>
      <div className="section carousel--item-two">
        <h3 className="title">Playing Cards</h3>
        <h5>Worked on: January 2019 - January 2019</h5>
        <p className="body">
          I created this project to explore more class based architecture and
          allow other individuals to access the cards that I am using for
          projects related to MoarStats.io.
        </p>
      </div>
    </div>
  );
}
