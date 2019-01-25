import React from "react";

export default function SlideTwo(props) {
  return (
    <div className="section section--h-full">
      <div className="carousel--item-one">
        <img
          className="image"
          src="./images/portfolio/openSource/AristosCMS.jpg"
          alt=""
        />
      </div>
      <div className="section carousel--item-two">
        <h3 className="title">Aristos CMS</h3>
        <h5>Worked on: June 2018 - September 2018</h5>
        <p className="body">
          I ran into an issue while working on the componetn library, I did not
          understand how forms worked with a server. Because of this, I built my
          own Content Management System (CMS) to learn more about this, and to
          help manage the websites that I was working on. 
        </p>
      </div>
    </div>
  );
}
