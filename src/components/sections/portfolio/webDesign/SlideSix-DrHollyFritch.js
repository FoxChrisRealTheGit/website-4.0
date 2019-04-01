import React from "react";

/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideFour(props) {
  return (
    <CarouselSlide>
      <img
        className="image"
        src="./images/portfolio/web/drHollyFritch.jpg"
        alt=""
      />
      <div className="section section--column section--center">
        <h3 className="title">Dr Holly Fritch Kirby</h3>
        <h5>Worked on: March 2019</h5>
        <p className="body">
          <em>HTML/Golang</em>
        </p>
        <p className="body">
          Built for a Dermatology Business to give the client a web presence.
        </p>
      </div>
    </CarouselSlide>
  );
}
