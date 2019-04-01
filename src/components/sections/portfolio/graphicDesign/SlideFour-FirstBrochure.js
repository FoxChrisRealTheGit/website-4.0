import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideFour(props) {
  return (
    <CarouselSlide>
        <img className="image" src="./images/portfolio/graphic/FinalBrochure-1.jpg" alt="" />
      <div className="section  section--column section--center">
        <h3 className="title">First Brochure</h3>
        <h5>Worked on: August 2016 - September 2016</h5>
        <p className="body">class assignment</p>
      </div>
    </CarouselSlide>
  );
}
