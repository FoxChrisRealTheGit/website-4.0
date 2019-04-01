import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideTwo(props) {
  return (
    <CarouselSlide>
      <img className="image" src="./images/portfolio/web/Ataraxy.png" alt="" />
      <div className="section  section--column section--center">
        <h3 className="title">Ataraxy Life</h3>
        <h5>Worked on: August 2016 - June 2017</h5>
        <p className="body">First shopify site</p>
      </div>
    </CarouselSlide>
  );
}
