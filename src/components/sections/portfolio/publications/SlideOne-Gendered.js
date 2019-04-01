import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideOne(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/publications/BookCoverTwo.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Gendered</h3>
        <h5>Worked on: July 2017 - August 2017</h5>
        <p className="body">
          I wrote this novel from thought to finished item in a little over a
          month. I don't believe that it is very good, but I wanted to test
          myself to see if I could write a novel. I believe it currently reads
          as more of an allegory and is something that I wish to re work after
          completing other written works.
        </p>
      </div>
      </CarouselSlide>
  );
}
