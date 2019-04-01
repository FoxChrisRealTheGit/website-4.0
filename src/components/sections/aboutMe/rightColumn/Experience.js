import React from "react";

/* import functions */
import Title from "../../../utility/Titles/Title";
import SingleSection from "../../../utility/Sections/SingleSection";
import ExperienceBlock from "../../../utility/Blocks/ExperienceBlock";
export default function Experience(props) {
  return (
    <SingleSection col={true}>
      <Title>Experience</Title>
      <ExperienceBlock name="Web Design" duration="~ 4 years" />
      <ExperienceBlock name="Web Development" duration="~ 1 1/2 years" />
      <ExperienceBlock name="Graphic Design" duration="~ 4 years" />
      <ExperienceBlock
        name="Information Technology Security"
        duration="> 1 year"
      />
      <ExperienceBlock name="Poetry" duration="~ 15 years" />
      <ExperienceBlock name="Playwriting" duration="~ 5 years" />
      <ExperienceBlock name="Prose" duration="~ 3 years" />
      <ExperienceBlock name="Slam Poetry" duration="~ 5 years" />
      <ExperienceBlock name="Storytelling" duration="~ 4 years" />
    </SingleSection>
  );
}
