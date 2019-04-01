import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideSeven(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/grooperDesign_no_bubbles.png"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Grooper Logo</h3>
        <h5>Worked on: June 2017 - June 2017</h5>
        <p className="body">Logo designed for a DJ friend</p>
      </div>
      </CarouselSlide>
  );
}
