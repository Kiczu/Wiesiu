import React from "react";
import { Link } from "react-router-dom";
import { BsPhoneVibrate } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import ContactForm from "../../../components/ContactForm/ContactForm";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FacebookIcon from "../../../assets/Home/SectionContact/facebook.webp";
import InstagramIcon from "../../../assets/Home/SectionContact/instagram.webp";
import "./SectionContact.scss";

const SectionContact = ({ colorTitle, id }) => {
  return (
    <section id={id} className="section-home section-contact">
      <SectionTitle color={colorTitle}>Kontakt</SectionTitle>
      <div className="section-contact-container">
        <div className="form-container">
          <ContactForm />
        </div>
        <div className="contact-desc">
          <h3>MAMY.TO-PRACOWNIA <br></br>GRAFICZNA</h3>
          <p>
            ul. Kolejowa 28, <br></br>
            55-300 Środa Śląska<br></br>
            NIP: 792 199 35 25
          </p>
          <p className="contact-icon">
            <i>
              <BsPhoneVibrate />
            </i>
            +48 505 640 150
          </p>
          <p className="contact-icon">
            <i>
            <IoMailOutline />
            </i>
            KONTAKT@WIESIU.PL
          </p>
          <div className="socials-container">
            <Link to={"https://www.facebook.com/WieslawBasnieSlowianskie"}>
            <img
              className="social-icon"
              src={FacebookIcon}
              alt="facebook icon"
            />
            </Link>
            <Link to={"https://www.instagram.com/wieslawbasnieslowianskie/"}>
            <img
              className="social-icon"
              src={InstagramIcon}
              alt="instagram icon"
            />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
