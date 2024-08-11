import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.scss";

const validationSchema = yup.object().shape({
  name: yup.string().required("To pole jest wymagane"),
  email: yup
    .string()
    .email("Nieprawidłowy adres email")
    .required("To pole jest wymagane"),
  message: yup.string().required("To pole jest wymagane"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Nieprawidłowy numer telefonu")
    .required("To pole jest wymagane"),
});

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const onSubmit = (values, { resetForm }) => {
    emailjs
      .send(
        process.env.REACT_APP_FORMIK_SERVICE_ID,
        process.env.REACT_APP_FORMIK_TEMPLATE_ID,
        values,
        {
          publicKey: process.env.REACT_APP_FORMIK_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success(`Pomyślnie wysłano formularz! Dzięki za kontakt!`);
        },
        (err) => {
          toast.error(`Niestety nie udało się wysłać formularza - ${err}`);
        }
      );
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="contact-form-input">
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Imię i nazwisko"
          />
          <ErrorMessage
            className="form-error-message"
            name="name"
            component="div"
          />
        </div>

        <div className="contact-form-input">
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Adres e-mail"
          />
          <ErrorMessage
            className="form-error-message"
            name="email"
            component="div"
          />
        </div>

        <div className="contact-form-input">
          <Field
            type="text"
            id="phone"
            name="phone"
            placeholder="Telefon komórkowy"
          />
          <ErrorMessage
            className="form-error-message"
            name="phone"
            component="div"
          />
        </div>

        <div className="contact-form-input">
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Twoja wiadomość"
            rows="10"
          />
          <ErrorMessage
            className="form-error-message"
            name="message"
            component="div"
          />
        </div>

        <div>
          <Button variant={"blue"}>Wyślij</Button>
        </div>
        <ToastContainer
          className={"contactForm-toast"}
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Form>
    </Formik>
  );
};

export default ContactForm;
