import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideNine(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/Workshop_1.2.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">GlowGrowth and Development Workshop</h3>
        <h5>Worked on: March 2019</h5>
        <p className="body">Flier created for a professional development workshop</p>
      </div>
      </CarouselSlide>
  );
}
