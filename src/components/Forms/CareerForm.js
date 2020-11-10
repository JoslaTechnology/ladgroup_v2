import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { careerPageForm } from "utils/validationSchema";
import { generateFileUrl, submitFormData } from "lib/client";
import { careerformContent } from "./mailcontent";

import doAlert from "utils/doAlert";
import Button from "components/Button";
import { ButtonSpinner } from "components/loader";
import { TextInput, SelectInput, TextAreaInput, NumberInput, FileInput } from "components/Input";

import { contact_form } from "./style.module.css";
import { header } from "./style.module.css";

const CareerForm = ({ setShowModal }) => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    cv: null,
    coverLetter: null,
    messageBody: ""
  };

  const handleSubmit = async (values, setSubmitting) => {
    setSubmitting(true);
    const fileData = await generateFileUrl([values.cv, values.coverLetter]);

    if (fileData) {
      const body = careerformContent(values, fileData);

      try {
        const data = await submitFormData(body);
        if (data.status === "success") {
          doAlert("Submitted successfully", "success");
          setSubmitting(false);
          setShowModal(false);
        } else if (data.includes("You are not authorised to access this API service")) {
          doAlert("Application unsuccessful, try again", "error");
          setSubmitting(false);
        }
      } catch (error) {
        doAlert("Application unsuccessful, try again", "error");
        setSubmitting(false);
      }
    } else {
      doAlert("file upload failed, try again", "error");
      setSubmitting(false);
    }
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
              <FileInput
                name="cv"
                label="CV (max: 1mb)"
                setFieldValue={setFieldValue}
                placeholder="upload your CV"
                multiple
              />
              <FileInput
                name="coverLetter"
                label="Cover Letter (max: 1mb)"
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
