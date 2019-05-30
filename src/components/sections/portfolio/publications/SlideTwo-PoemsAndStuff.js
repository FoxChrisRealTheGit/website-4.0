import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideTwo(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/publications/poemsAndStuff.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Poems and Stuff</h3>
        <h5>Worked on: June 2019</h5>
        <p className="body">
          A collection of poems that I have written with dates from 2007 up to 2019.
        </p>
      </div>
      </CarouselSlide>
  );
}
