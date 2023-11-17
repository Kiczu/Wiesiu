import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import * as yup from "yup";
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
    name: '',
    email: '',
    phone: '',
    message: '',
  };

const ContactForm = () => {
  const onSubmit = (values, { resetForm }) => {
    
    console.log("Wysłano:", values);
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
          <Field type="text" id="name" name="name" placeholder="Imię i nazwisko"/>
          <ErrorMessage className="form-error-message" name="name" component="div" />
        </div>

        <div className="contact-form-input">
          <Field type="email" id="email" name="email" placeholder="Adres e-mail"/>
          <ErrorMessage className="form-error-message" name="email" component="div" />
        </div>

        <div className="contact-form-input">
          <Field type="text" id="phone" name="phone" placeholder="Telefon komórkowy"/>
          <ErrorMessage className="form-error-message" name="phone" component="div" />
        </div>

        <div className="contact-form-input">
          <Field as="textarea" id="message" name="message" placeholder="Twoja wiadomość" rows="10"/>
          <ErrorMessage className="form-error-message" name="message" component="div" />
        </div>

        <div>
          <Button type="submit" variant={"blue"}>Wyślij</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
