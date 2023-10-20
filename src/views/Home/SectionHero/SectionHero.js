import React from "react";
import Button from "../../../components/Button/Button";
import heroImage from "../../../assets/Home/SectionHero/Warstwa-6.webp";
import "./SectionHero.scss";

const SectionHero = () => {

  return (
    <section className="section-home section-hero">
      <div className="section-hero-desc">
        <p>
          Kto wykradł jabłka z książęcego ogrodu? Komu potrzebna jest żywa woda
          i dlaczego w ziemi można znaleźć poszczerbione garnki? Poznaj komiksy
          o Wiesławie i odkryj barwny i zaskakujący świat zapomnianych
          słowiańskich baśni!
        </p>
        <Button>Więcej</Button>
      </div>
      <div className="section-hero-image">
        <img src={heroImage} alt="O wiesławie i słonecznym koniu" />
      </div>
    </section>
  );
};

export default SectionHero;
