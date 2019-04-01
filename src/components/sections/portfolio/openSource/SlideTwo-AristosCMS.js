import React from "react";
/* import utility functions */
import CarouselSlide from "../../../utility/Carousel/Slides/CarouselSlideItem";
export default function SlideTwo(props) {
  return (
    <CarouselSlide>
        <img
          className="image"
          src="./images/portfolio/openSource/AristosCMS.jpg"
          alt=""
        />
      <div className="section  section--column section--center">
        <h3 className="title">Aristos CMS</h3>
        <h5>Worked on: June 2018 - September 2018</h5>
        <p className="body">
        I ran into an issue while working on the component library, I did not
        understand how forms worked with a server. Because of this, I built my
        own Content Management System (CMS) to learn more about this, and to
        help manage the websites that I was working on. 

        </p>
      </div>
    </CarouselSlide>
  );
}
