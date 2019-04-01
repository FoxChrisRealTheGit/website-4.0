import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideTwoFive(props) {
  return (
    <CarouselSlide>
      <img
        className="image"
        src="./images/portfolio/web/PeaxLogin_LG.jpg"
        alt=""
      />
      <div className="section  section--column section--center">
        <h3 className="title">Peax Games</h3>
        <h5>Worked on: February 2018 - March 2018</h5>
        <p className="body">Final Group Project at DevMountain</p>
      </div>
    </CarouselSlide>
  );
}
