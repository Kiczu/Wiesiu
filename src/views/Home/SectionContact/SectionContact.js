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
            <label>
              <input type="text" placeholder="Imię" />
            </label>
            <label>
              <input
                type="email"
                id="email"
                pattern=".+@globex\.com"
                placeholder="Adres e-mail"
                required
              />
            </label>
          </form>
        </div>
        <div className="informations-container">
          <p>+48 555 555 555</p>
          <p>kontakt@wiesiu.pl</p>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
