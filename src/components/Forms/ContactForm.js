import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { contactPageForm } from "utils/validationSchema";
import client, { uploadFileAndGenerateURL } from "lib/client";
import { contactForm } from "../../utils/mailcontent";
// import { app } from "base";

import doAlert from "utils/doAlert";
import { TextInput, SelectInput, TextAreaInput } from "components/Input";
import { ButtonSpinner } from "components/loader";
import Button from "components/Button";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    category: "",
    messageBody: ""
  };

  const selectOptions = [
    { value: "", title: "Select message category" },
    { value: "general", title: "general" },
    { value: "enquiry", title: "enquiry" }
  ];
  const handleSubmit = async (values, setSubmitting, resetForm) => {
    const body = contactForm(values);
    try {
      const data = await client(body);
      if (data.success === true) {
        doAlert("Submitted successfully", "success");
        setSubmitting(false);
      }
    } catch (error) {
      doAlert("Unsuccessful, try again later", "error");
      setSubmitting(false);
    }
  };

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={contactPageForm}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values, setSubmitting, resetForm);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput name="name" label="Name" placeholder="Enter your name" />
            <TextInput name="email" label="Email" placeholder="Enter your email addres" />
            <SelectInput name="category" label="Message category" options={selectOptions} selected={""} />
            <TextAreaInput name="messageBody" label="Message" placeholder="Your message here" />
            <Button size="large" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <p>
                  <ButtonSpinner />
                </p>
              ) : (
                "Send"
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default ContactForm;
