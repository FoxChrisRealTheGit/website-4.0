import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideThree(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/AtaraxyVariationOneFront.png"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Ataraxy Business Card</h3>
        <h5>Worked on: August 2016 - August 2016</h5>
        <p className="body">The initial Ataraxy business Card</p>
      </div>
      </CarouselSlide>
  );
}
