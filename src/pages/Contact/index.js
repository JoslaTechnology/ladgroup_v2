import React, { Fragment } from "react";
import Leading from "components/leading";
import { TextInput } from "components/Input";


import { main, contact_grid, contact_form } from "style/layout.module.css";

const Contact = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>Careers</h1>
      </div>

      <div className={contact_grid}>
        <p>Feel free to contact us any time. We will get back to you as soon as we possible!</p>
        <div className={contact_form}>
          <TextInput label="Name" placeholder="Enter your name" />
          <TextInput label="Email" placeholder="Enter your email addres" />
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
