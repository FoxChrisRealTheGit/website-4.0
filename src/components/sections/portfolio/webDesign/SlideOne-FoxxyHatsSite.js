import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideOne(props) {
  return (
    <CarouselSlide>
      <img className="image" src="" alt="" />
      <div className="section  section--column section--center">
        <h3 className="title">Foxxy Hats</h3>
        <h5>Worked on: August 2015 - August 2016</h5>
        <p className="body">First word press site</p>
      </div>
    </CarouselSlide>
  );
}
