import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideOne(props) {
  return (
    <CarouselSlide>
        <img className="image" src="./images/portfolio/graphic/foxxyHatsMarketing.jpg" alt="" />
      <div className="section  section--column section--center">
        <h3 className="title">Foxxy Hats Marketing</h3>
        <h5>Worked on: October 2015 - December 2015</h5>
        <p className="body">Initial stabs at creating marketing material</p>
      </div>
      </CarouselSlide>
  );
}