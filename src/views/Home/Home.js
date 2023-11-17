import React from "react";
import useWooCommerceProducts from "../../hooks/useWooCommerceProducts";
import SectionHero from "./SectionHero/SectionHero";
import SectionSlider from "./SectionSlider/SectionSlider";
import SectionMeetings from "./SectionMeetings/SectionMeeting";
import InstagramFeed from "../../components/InstagramFeed/InstagramFeed";
import SectionContact from "./SectionContact/SectionContact";
import "./Home.scss";

const Home = () => {
  const comics = useWooCommerceProducts(18);
  const collections = useWooCommerceProducts(23);
  const gadgets = useWooCommerceProducts(19);

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
        backgroundColor={"#edf2ff"}
      />
      <InstagramFeed />
      <SectionContact colorTitle={"black"} />
    </>
  );
};

export default Home;
