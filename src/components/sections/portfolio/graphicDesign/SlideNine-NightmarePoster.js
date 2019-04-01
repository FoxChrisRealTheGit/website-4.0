import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideNine(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/graphic/nightmaresPoster.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Nightmare Poster</h3>
        <h5>Worked on: February 2018 - March 2018</h5>
        <p className="body">Poster for a friend's play</p>
      </div>
      </CarouselSlide>
  );
}
