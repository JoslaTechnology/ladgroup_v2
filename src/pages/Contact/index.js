import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { contactPageForm } from "utils/validationSchema";
import Leading from "components/leading";
import { TextInput, SelectInput, TextAreaInput } from "components/Input";
import Button from "components/Button";

import { main } from "style/layout.module.css";
import { contact_container, contact_form, conact_details, input_section, group, conact_details_group } from "./style.module.css";
import { item_icon, item_text } from "components/Footer/style.module.css";

import { ReactComponent as Location } from "assets/location.svg";

const handleSubmit = (values) => {
  console.log(values);
};

const Contact = () => {
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

  return (
    <Fragment>
      <div className={main}>
        <h1>Careers</h1>
      </div>

      <div className={contact_container}>
        <section className={input_section}>
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
                  <SelectInput name="category" label="Message category" options={selectOptions} selected={""} />
                  <TextAreaInput name="messageBody" label="Message" placeholder="Your message here" large />
                  <Button label="Send" large />
                </Form>
              )}
            </Formik>
          </div>
        </section>

        <section>
          <div>
            <p>contact us</p>
            <div className={conact_details_group}>
              <p>Info</p>
              <div className={conact_details}>
                <p className={group}>
                  <span className={item_icon}>
                    <Location />
                  </span>
                  <span className={item_text}>
                    Factory address - Kilometer 4, Sagamu Benin Expressway, Ikenne-Remo, Ogun State, Nigeria.
                  </span>
                </p>
                <p className={group}>
                  <span className={item_icon}>
                    <Location />
                  </span>
                  <span className={item_text}>
                    Office address - 24, Abimbola Street, Ilasamaja Isolo, Lagos, Nigeria
                  </span>
                </p>
                <p className={group}>
                  <span className={item_icon}>
                    <Location />
                  </span>
                  <span className={item_text}>+234 801 234 5678</span>
                </p>
                <p className={group}>
                  <span className={item_icon}>
                    <Location />
                  </span>
                  <span className={item_text}>info@ladgroup.org</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Leading />
    </Fragment>
  );
};

export default Contact;
