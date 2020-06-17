import React, { Fragment } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Phone } from "assets/phone.svg";
import { ReactComponent as Location } from "assets/location.svg";
import ContactForm from "../ContactForm";
import { hero, container, main, contactform, footer, items, hero_text } from "./style.module.css";

const Home = () => {
  return (
    <Fragment>
      <header className={container}>
        <nav className="text-center">
          <Logo />
        </nav>
      </header>
      <section className={hero}>
        {/* <div className="text-center pt-5"> */}
          <div className={hero_text}>
            <h1 className="text-light">Pioneering in Seed-Oil production in Nigeria</h1>
            <p className="text-light">
              Welcome, Kindly note that our website is currently under development
            </p>
          </div>
          {/* <div className="duration text-light">
            <span>
              <sup>DAYS</sup>
              <h1>10</h1>
            </span>
            <span>
              <sup>HOURS</sup>
              <h1>10</h1>
            </span>
            <span>
              <sup>MINUTES</sup>
              <h1>10</h1>
            </span>
          </div> */}
        {/* </div> */}
      </section>
      <section className={main}>
        <div className="container py-4">
          <div className="text-center">
            <h4>Are you a dealer? If yes, please fill the form below</h4>
            <p>DEALER DATA CAPTURE</p>
          </div>
          <div className={`py-5 ${contactform}`}>
            <ContactForm />
          </div>
        </div>
      </section>
      <footer className={`text-center py-5 ${footer}`}>
        <h2>LadGroup</h2>
        <div className={`${items}`}>
          <div>
            <Location />
            <p>Office address - 24, Abimbola street, Ilasamaja Isolo, Lagos, Nigeria</p>
          </div>
          <div>
            <Location />
            <p>
              Factory address - Kilometer 4, Sagamu Benin Expressway, Ikenne-Remo, Ogun State,
              Nigeria.
            </p>
          </div>
          <div>
            <Phone />
            <p>08130302400, shea-sales@ladgroup.org</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
