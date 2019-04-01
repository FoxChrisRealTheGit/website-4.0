import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideOne(props) {
  return (
    <CarouselSlide>
      <img
        className="image"
        src="./images/portfolio/web/2Liesand1Truth.png"
        alt=""
      />
      <div className="section  section--column section--center">
        <h3 className="title">Two Lies and One Truth</h3>
        <h5>Worked on: February 2017 - June 2017</h5>
        <p className="body">
          Website created to support a podcast project. I learned quite a bit
          about RSS feeds.
        </p>
      </div>
    </CarouselSlide>
  );
}
