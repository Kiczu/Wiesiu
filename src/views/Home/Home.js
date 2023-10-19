import React from "react";
import useuseWooCommerceProducts from "../../hooks/useWooCommerceProducts";
import SectionHero from "./SectionHero/SectionHero";
import SectionMeetings from "./SectionMeetings/SectionMeeting";
import SectionSlider from "./SectionSlider/SectionSlider";
import InstagramFeed from "../../components/InstagramFeed/InstagramFeed";
import "./Home.scss";

const Home = () => {
  const comics = useuseWooCommerceProducts(18);
  const collections = useuseWooCommerceProducts(23);
  const gadgets = useuseWooCommerceProducts(19);

  return (
    <>
      <SectionHero />
      <SectionSlider
        products={comics}
        sectionTitle={"Księgarnia"}
        buttonText={"Do sklepu"}
      />
      <SectionMeetings />
      <SectionSlider
        products={collections}
        sectionTitle={"Kolekcje"}
        buttonText={"Do sklepu"}
      />
      <SectionSlider
        products={gadgets}
        sectionTitle={"Gadżety"}
        buttonText={"Do sklepu"}
      />
      <InstagramFeed />
    </>
  );
};

export default Home;
