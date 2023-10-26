import React from "react";
import useuseWooCommerceProducts from "../../hooks/useWooCommerceProducts";
import SectionHero from "./SectionHero/SectionHero";
import SectionMeetings from "./SectionMeetings/SectionMeeting";
import SectionSlider from "./SectionSlider/SectionSlider";
import InstagramFeed from "../../components/InstagramFeed/InstagramFeed";
import SectionContact from "./SectionContact/SectionContact";
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
        colorTitle={"black"}
        buttonText={"Do sklepu"}
        variant={"blue"}
      />
      <SectionMeetings />
      <SectionSlider
        products={collections}
        sectionTitle={"Kolekcje"}
        colorTitle={"black"}
        buttonText={"Do sklepu"}
        variant={"blue"}
      />
      <SectionSlider
        products={gadgets}
        sectionTitle={"Gadżety"}
        colorTitle={"black"}
        buttonText={"Do sklepu"}
        variant={"blue"}
      />
      <InstagramFeed />
      <SectionContact colorTitle={'black'} />
    </>
  );
};

export default Home;
