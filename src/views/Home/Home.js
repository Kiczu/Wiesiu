import React from "react";
import SectionHero from "./SectionHero/SectionHero";
import "./Home.scss";
import SectionMeetings from "./SectionMeetings/SectionMeeting";

const Home = () => {
  return (
    <>
      <SectionHero />
      <SectionMeetings />
    </>
  );
};

export default Home;
