import React from "react";
import { Link } from "react-router-dom";
import { contact, contact_text } from "./style.module.css";
import Button from "components/Button";

const Leading = () => {
  return (
    <section className="contact-us">
      <div className={contact}>
        <div className={contact_text}>
          <p>Pioneering in shea nut production</p>
          <Link to="/contact">
            <Button label="Contact us" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Leading;
