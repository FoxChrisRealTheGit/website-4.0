import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideSix(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/NewFinalYouthSymphonyShirt.png"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Youth Symphony Shirts</h3>
        <h5>Worked on: February 2017 - February 2017</h5>
        <p className="body">This was a shirt designed for the Colorado Springs Youth Symphony</p>
      </div>
      </CarouselSlide>
  );
}
