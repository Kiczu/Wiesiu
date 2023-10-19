import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/Button/Button";
import "./SectionMeetings.scss";

const SectionMeetings = () => {
  return (
    <section className="section-home section-meetings">
      <SectionTitle>Spotkania i warsztaty</SectionTitle>
      <div className="section-meetings-container">
        <p className="description">
          Chcesz wiedzieć, jak powstają komiksy? Co było pierwsze dymek, czy
          kreska? A może intryguje Cię świat zapomnianej słowiańszczyzny i
          chcesz wiedzieć, co kiedyś opowiadano dzieciom do snu. Takie i inne
          ciekawostki czekają na spotkaniu z autorem Wiesława – Maciejem
          Kisielem.
        </p>
        <Button>Napisz do mnie</Button>
      </div>
    </section>
  );
};

export default SectionMeetings;
