import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideTen(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/HomeInTheSprings.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Home in The Springs Logo</h3>
        <h5>Worked on: November 2018 - December 2018</h5>
        <p className="body">logo design for a realtor that incorporates pikes peak</p>
      </div>
      </CarouselSlide>
  );
}
