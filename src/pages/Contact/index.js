import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall, FiMail } from "react-icons/fi";

import { contactPageForm } from "utils/validationSchema";
import Leading from "components/leading";
import { TextInput, SelectInput, TextAreaInput } from "components/Input";
import Button from "components/Button";

import { main } from "style/layout.module.css";
import {
  contact_container,
  contact_form,
  conact_details,
  map_container,
  group,
  conact_details_group,
  social_contacts
} from "./style.module.css";
import { item_icon, item_text } from "components/Footer/style.module.css";

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
        <h1>Contact Us</h1>
      </div>

      <div className={contact_container}>
        <section>
          <div className={contact_form}>
            <p>Feel free to contact us any time. We will get back to you as soon as we possible!</p>
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
                  <TextAreaInput name="messageBody" label="Message" placeholder="Your message here" />
                  <Button label="Send" size="large" type="submit" />
                </Form>
              )}
            </Formik>
          </div>
        </section>

        <section>
          <div className={social_contacts}>
            <p>contact us</p>
            <div className={conact_details_group}>
              {/* <p>Info</p> */}
              <div className={conact_details}>
                <p className={group}>
                  <span className={item_icon}>
                    <GoLocation />
                  </span>
                  <span className={item_text}>
                    Factory address - Kilometer 4, Sagamu Benin Expressway, Ikenne-Remo, Ogun State, Nigeria.
                  </span>
                </p>
                <p className={group}>
                  <span className={item_icon}>
                    <GoLocation />
                  </span>
                  <span className={item_text}>
                    Office address - 24, Abimbola Street, Ilasamaja Isolo, Lagos, Nigeria
                  </span>
                </p>
                <p className={group}>
                  <span className={item_icon}>
                    <FiPhoneCall />
                  </span>
                  <span className={item_text}>+234 801 234 5678</span>
                </p>
                <p className={group}>
                  <span className={item_icon}>
                    <FiMail />
                  </span>
                  <span className={item_text}>info@ladgroup.org</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className={map_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9911795075805!2d3.3280544150647273!3d6.522795895281887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e87c7f0e47f%3A0x61145c25f72b8a5f!2s24%20Abimbola%20St%2C%20Isaga%20Tedo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1594975409965!5m2!1sen!2sng"
            title="lagGroup ffice location"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
          />
        </div>
      </section>

      <Leading />
    </Fragment>
  );
};

export default Contact;
