import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

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

const INITIAL_VALUES = { name: "", phoneNumber: "", email: "", message: "" };

const ContactForm = () => {
  const onSubmit = (values, { resetForm }) => {
    // Tutaj możesz obsłużyć wysłanie formularza, np. wysłać dane na serwer
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
        <div>
          <label htmlFor="name">Imię:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="phone">Numer telefonu:</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>

        <div>
          <label htmlFor="message">Wiadomość:</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="div" />
        </div>

        <div>
          <button type="submit">Wyślij</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
