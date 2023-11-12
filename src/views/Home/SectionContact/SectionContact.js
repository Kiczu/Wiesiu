import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PhoneIcon from "../../../assets/Home/SectionContact/Telefon_iko.webp";
import MailIcon from "../../../assets/Home/SectionContact/Mail_iko.webp";
import FacebookIcon from "../../../assets/Home/SectionContact/facebook.webp";
import InstagramIcon from "../../../assets/Home/SectionContact/instagram.webp";
import "./SectionContact.scss";

const SectionContact = ({ colorTitle }) => {
  return (
    <section className="section-home section-contact">
      <SectionTitle color={colorTitle}>Kontakt</SectionTitle>
      <div className="section-contact-container">
        <div className="form-container">
          <form>formularz</form>
        </div>
        <div className="contact-desc">
          <h3>MAMY.TO-PRACOWNIA <br></br>GRAFICZNA</h3>
          <p>
            ul. Kolejowa 28, <br></br>
            55-300 Środa Śląska<br></br>
            NIP: 792 199 35 25
          </p>
          <p className="contact-icon">
            <img src={PhoneIcon} alt="phone icon" />
            +48 505 640 150
          </p>
          <p className="contact-icon">
            <img src={MailIcon} alt="mail icon" />
            KONTAKT@WIESIU.PL
          </p>
          <div className="socials-container">
            <img
              className="social-icon"
              src={FacebookIcon}
              alt="facebook icon"
            />
            <img
              className="social-icon"
              src={InstagramIcon}
              alt="instagram icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
