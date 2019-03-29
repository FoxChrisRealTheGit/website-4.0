import React from "react";

export default function SlideOne(props) {
  return (
    <div className="section section--h-full">
      <div className="carousel--item-one">
        <img className="image--centered" src="./images/jpg/bydeathswatch.jpg" alt="" />
      </div>
      <div className="section carousel--item-two">
        <h3 className="title">About Me!!</h3>
        <p className="body">
          Welcome to my portfolio website. I am a simple web developer, poet,
          writer, designer, and student of life. I appreciate learning something
          new every day and pushing myself to be a better person.
        </p>
      </div>
    </div>
  );
}
