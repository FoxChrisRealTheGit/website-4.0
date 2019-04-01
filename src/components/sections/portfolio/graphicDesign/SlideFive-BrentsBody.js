import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideFive(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/BrochureMostFinalish.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Brent's Bodyworks</h3>
        <h5>Worked on: November 2016 - November 2016</h5>
        <p className="body">class assignment</p>
      </div>
      </CarouselSlide>
  );
}
