import React from "react";

/* import functions */
import Title from "../../../utility/Titles/Title";
import SingleSection from "../../../utility/Sections/SingleSection";
export default function AboutColumn(props) {
  return (
    <div className="section section--column">
      <SingleSection widthFull={true} col={true}>
        <img
          className="image "
          src="./images/jpg/ataraxydualitypose.JPG"
          alt="christopher fox duality pose"
        />
      </SingleSection>
      <SingleSection widthFull={true} col={true}>
        <Title>Certifications</Title>
        <div>Adobe Certified Expert Illustrator</div>
      </SingleSection>
      <SingleSection widthFull={true} col={true}>
        <Title>Basic Stuff</Title>
        <div>
          <p className="body">
            I am an extremely motivated and focused individual with a passion
            for solving problems. I can do a myriad of tasks but have yet to
            focus deeply on one piece of the tech stack pie. I tend to learn things in a
            rapid manner and upon specialization, I will have the unique
            advantage of being able to talk design, full stack development,
            security, and cloud systems design. When I have the time, I really
            enjoy competing in slam poetry competitions. I always try to make
            room in my schedule for long hikes and am currently working on
            getting myself back into competitive paintball.
          </p>
        </div>
      </SingleSection>
    </div>
  );
}
