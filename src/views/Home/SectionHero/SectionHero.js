import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../../../components/Button/Button";
import heroImage from "../../../assets/Home/SectionHero/Warstwa-6.webp";
import "./SectionHero.scss";

const SectionHero = () => {
  return (
    <section className="section-home section-hero">
      <div className="section-hero-desc">
        <div className="section-hero-desc-container">
          <h1>Wiesław - Baśnie Słowiańskie</h1>
          <p>
            Kto wykradł jabłka z książęcego ogrodu? Komu potrzebna jest żywa
            woda i dlaczego w ziemi można znaleźć poszczerbione garnki? Poznaj
            komiksy o Wiesławie i odkryj barwny i zaskakujący świat zapomnianych
            słowiańskich baśni!
          </p>
          <Link to="/#bookstore">
            <Button>Więcej</Button>
          </Link>
        </div>
      </div>
      <div className="section-hero-image">
        <img src={heroImage} alt="O wiesławie i słonecznym koniu" />
      </div>
    </section>
  );
};

export default SectionHero;
