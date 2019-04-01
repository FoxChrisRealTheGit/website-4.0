import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideThree(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/openSource/cards.jpg"
          alt=""
        />
      <div className="section   section--column section--center">
        <h3 className="title">Playing Cards</h3>
        <h5>Worked on: January 2019 - January 2019</h5>
        <p className="body">
        I created this project to explore more class-based architecture and
        allow other individuals to access the cards that I am using for
        projects related to MoarStats.io.

        </p>
      </div>
      </CarouselSlide>
  );
}
