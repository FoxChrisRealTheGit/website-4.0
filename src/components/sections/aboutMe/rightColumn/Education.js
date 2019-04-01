import React from "react";

/* import functions */
import Title from "../../../utility/Titles/Title";
import SingleSection from "../../../utility/Sections/SingleSection";
import EducationBlock from "../../../utility/Blocks/EducationBlock";
export default function Education(props) {
  return (
    <SingleSection col={true}>
      <Title>Education</Title>
      <EducationBlock
        programName="Master's of Cyber Security"
        schoolName="Southern New Hampshire University"
        yearsAttended="December 2018 - June 2020"
        location="Online"
      />
      <EducationBlock
        programName="Bachelor of Graphic Design and Media Arts"
        schoolName="Southern New Hampshire University"
        yearsAttended="June 2017 - October 2018"
        location="Online"
      />
      <EducationBlock
        programName="Self Study ~1000 hours of videos"
        schoolName="Lynda.com, AWS Training, Khan Academy, Cybery.com, Youtube.com"
        yearsAttended="March 2017 - Present"
        location="Online"
      />
      <EducationBlock
        programName="Web Development Bootcamp"
        schoolName="Devmountain"
        yearsAttended="November 2017 - March 2018"
        location="Provo, UT"
      />
    </SingleSection>
  );
}
