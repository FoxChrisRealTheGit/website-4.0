import React from "react";

export default function SlideOne(props) {
  return (
    <div className="section section--h-full">
      <div className="carousel--item-one">
        <img className="image" src="./images/portfolio/graphic/foxxyHatsMarketing.jpg" alt="" />
      </div>
      <div className="section carousel--item-two">
        <h3 className="title">Foxxy Hats Marketing</h3>
        <h5>Worked on: October 2015 - December 2015</h5>
        <p className="body">Initial stabs at creating marketing material</p>
      </div>
    </div>
  );
}