import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideTwelve(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/Workshop2_1.4.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Glow Growth and Development Workshop #2</h3>
        <h5>Worked on: May 2019</h5>
        <p className="body">Flier created for a professional development workshop</p>
      </div>
      </CarouselSlide>
  );
}