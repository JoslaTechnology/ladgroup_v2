import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { careerPageForm } from "utils/validationSchema";
import { header } from "./style.module.css";
import { TextInput, SelectInput, TextAreaInput, NumberInput } from "components/Input";
import Button from "components/Button";

import { contact_form } from "./style.module.css";

const CareerForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    cv: "",
    coverLetter: "",
    messageBody: ""
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const selectOptions = [
    { value: "", title: "Select nationality" },
    { value: "nigeria", title: "Nigeria" }
  ];

  return (
    <Fragment>
      <header className={header}>
        <h1>General application (submit cv)</h1>
      </header>

      <div className={contact_form}>
        <Formik
          initialValues={initialValues}
          validationSchema={careerPageForm}
          onSubmit={(value) => {
            handleSubmit(value);
          }}
        >
          {() => (
            <Form>
              <TextInput name="name" label="Full Name" placeholder="Enter your full name" />
              <TextInput name="email" label="Email" placeholder="Enter your email addres" />
              <NumberInput name="phoneNumber" label="Phone Number" placeholder="Enter your phone number" />
              <SelectInput name="nationality" label="Select nationality" options={selectOptions} selected={""} />
              <TextInput name="cv" label="CV" placeholder="provide url to CV (eg. google drive, dropbox)" />
              <TextInput
                name="coverLetter"
                label="Cover letter"
                placeholder="provide url to cover letter (eg. google drive, dropbox)"
              />
              <TextAreaInput
                name="messageBody"
                label="Reason for interest"
                placeholder="Why whould you like to work with us?"
              />

              <Button label="Send" size="large" type="submit" />
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default CareerForm;
