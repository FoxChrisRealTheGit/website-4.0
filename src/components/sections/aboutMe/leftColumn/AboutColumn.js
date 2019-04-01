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
          src="./images/jpg/ataraxydualitypose.jpg"
          alt="christopher fox duiality pose"
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
            focus on one piece of the tech stack pie. As I learn things in a
            rapid manner, which ever area I do focus on will give me a unique
            advantage to my peers as I can talk design, full stack development,
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
