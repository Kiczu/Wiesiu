import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./SectionContact.scss";

const SectionContact = ({ colorTitle }) => {
  return (
    <section className="section-home section-contact">
      <SectionTitle colorTitle={colorTitle}>Kontakt</SectionTitle>
      <div className="section-contact-container">
        <div className="form-container">
          <form>
            formularz
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
