import React from "react";
import SectionHero from "./SectionHero/SectionHero";
import SectionComics from "./SectionComics/SectionComics";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <SectionHero />
      <SectionComics />
    </>
  );
};

export default Home;
