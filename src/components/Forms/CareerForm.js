import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import doAlert from "utils/doAlert";
import { careerPageForm } from "utils/validationSchema";
import { header } from "./style.module.css";
import { TextInput, SelectInput, TextAreaInput, NumberInput, FileInput } from "components/Input";
import Button from "components/Button";

import { contact_form } from "./style.module.css";
import { ButtonSpinner } from "components/loader";

const CareerForm = ({ setShowModal }) => {
  // const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    cv: null,
    coverLetter:  null,
    messageBody: ""
  };

  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(true);
    console.log(values);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    sleep(3000).then(() => {
      setSubmitting(false);
      doAlert("Submitted successfully", "success");
      setShowModal(false);
    });
  };

  const selectOptions = [
    { value: "", title: "Select nationality" },
    { value: "nigerian", title: "Nigerian" }
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
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <TextInput name="name" label="Full Name" placeholder="Enter your full name" />
              <TextInput name="email" label="Email" placeholder="Enter your email addres" />
              <NumberInput name="phoneNumber" label="Phone Number" placeholder="Enter your phone number" />
              <SelectInput name="nationality" label="Select nationality" options={selectOptions} selected={""} />
              <FileInput name="cv" label="CV (max: 80kb)" setFieldValue={setFieldValue} placeholder="upload your CV" multiple/>
              <FileInput
                name="coverLetter"
                label="Cover Letter (max: 80kb)"
                setFieldValue={setFieldValue}
                placeholder="upload your cover letter"
              />
              <TextAreaInput
                name="messageBody"
                label="Reason for interest"
                placeholder="Why whould you like to work with us?"
              />

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
      </div>
    </Fragment>
  );
};

export default CareerForm;
