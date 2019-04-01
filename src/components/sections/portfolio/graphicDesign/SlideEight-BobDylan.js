import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideEight(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/Bob_Dylan_Portrait.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Bob Dylan portrait</h3>
        <h5>Worked on: December 2017 - December 2017</h5>
        <p className="body">class assignment</p>
      </div>
      </CarouselSlide>
  );
}
