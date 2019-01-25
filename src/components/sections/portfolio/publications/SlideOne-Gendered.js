import React from "react";

export default function SlideOne(props) {
  return (
    <div className="section section--h-full">
      <div className="carousel--item-one">
        <img className="image" src="./images/portfolio/publications/BookCoverTwo.jpg" alt="" />
      </div>
      <div className="section carousel--item-two">
        <h3 className="title">Gendered</h3>
        <h5>Worked on: July 2017 - August 2017</h5>
        <p className="body">
          I wrote this novel from thought to finished item in about a month. I
          don't believe that it is very good, but I wanted to test myself to see
          if I could write a novel.
        </p>
      </div>
    </div>
  );
}
