import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { contactPageForm } from "utils/validationSchema";
import Leading from "components/leading";
import { TextInput } from "components/Input";

import { main, contact_grid, contact_form } from "style/layout.module.css";

const handleSubmit = (values) => {
  console.log(values);
};

const Contact = () => {
  const initialValues = {
    name: "",
    email: ""
  };

  return (
    <Fragment>
      <div className={main}>
        <h1>Careers</h1>
      </div>

      <div className={contact_grid}>
        <p>Feel free to contact us any time. We will get back to you as soon as we possible!</p>
        <div className={contact_form}>
          <Formik
            initialValues={initialValues}
            validationSchema={contactPageForm}
            onSubmit={(value) => {
              handleSubmit(value);
            }}
          >
            {() => (
              <Form>
                <TextInput name="name" label="Name" placeholder="Enter your name" />
                <TextInput name="email" label="Email" placeholder="Enter your email addres" />
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <p>contact us</p>
        </div>
      </div>

      <Leading />
    </Fragment>
  );
};

export default Contact;
