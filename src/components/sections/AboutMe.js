import React from "react";
import PageSection from "./../utility/Sections/PageSection";
import AboutMeInfo from "./aboutMe/aboutMeInformation";
export default function AboutMe(props) {
  return (
    <PageSection secid="about-me" color="about">
      <AboutMeInfo />
    </PageSection>
  );
}
