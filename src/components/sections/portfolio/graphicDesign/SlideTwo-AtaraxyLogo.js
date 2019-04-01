import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideTwo(props) {
  return (
    <CarouselSlide>
      <img
        className="image"
        src="./images/portfolio/graphic/AtaraxyLogoLongAttemptOne.svg"
        alt=""
      />
      <div className="section  section--column section--center">
        <h3 className="title">Ataraxy Logo</h3>
        <h5>Worked on: August 2016 - August 2016</h5>
        <p className="body">Initial Ataraxy logo design</p>
      </div>
    </CarouselSlide>
  );
}
