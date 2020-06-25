import React, { Fragment } from "react";
import { ReactComponent as Logo2 } from "assets/logo2.svg";
import { ReactComponent as Mail } from "assets/mail.svg";
import { ReactComponent as Phone } from "assets/phone.svg";
import { ReactComponent as Location } from "assets/location.svg";
import bags from "assets/bags.svg";
import butter from "assets/plate.svg";
import logo from "assets/logo.png";
import grid1 from "assets/grid_img.svg";
import Button from "components/Button";
import ContactForm from "../ContactForm";
import { main, contact, contactform, footer, items, hero_text, grid } from "./style.module.css";

const Home = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <Logo2 />
          <div className={contact}>
            <div>
              <Phone />
              <p>08130302400</p>
            </div>
            <div>
              <Mail />
              <p>shea-sales@ladgroup.org</p>
            </div>
          </div>
        </nav>
        <div className={hero_text}>
          <h1 className="text-light">Pioneering in oil-seed processing in Nigeria</h1>
          <p className="text-light">
            Welcome, kindly note that our website is currently under development
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
      </header>
      {/* <section className={main}>
        <div className="container py-4">
          <div className="text-center">
            <h4>Are you a dealer? If yes, please fill the form below</h4>
            <p>DEALER DATA CAPTURE</p>
          </div>
          <div className={`py-5 ${contactform}`}>
            <ContactForm />
          </div>
        </div>
      </section> */}

      <main>
        <h1>LadShea</h1>
        <p>100% natural, organic, refined shea butter with no smoky smell</p>

        <section className={grid}>
          <img src={butter} alt="bowl of butter" />
          <aside>
            <h2>General Enquiry</h2>
            <p>
              Want to make an enquiry about our different range of products and services? Feel free
              to reach out to us.
            </p>
            <Button label="Make enquiry" />
          </aside>
        </section>

        <section className={grid}>
          <aside>
            <h2>General Enquiry</h2>
            <p>
              Are you a distributor in the shea butter sector? Kindly click on the link below to
              register as one of our distributors.
            </p>
            <Button label="Register" />
          </aside>
          <img src={bags} alt="agro sacks" />
        </section>

        <section className={grid}>
          <img src={grid1} alt="nuts" />
          <aside>
            <h2>General Enquiry</h2>
            <p>
              Do you deal in supplying of resources and equipments (e.g sheanut, diesel, spare
              parts, etc) Why not join our list of suppliers? .
            </p>
            <Button label="Register" />
          </aside>
        </section>
      </main>
      <footer className={`text-center py-5 ${footer}`}>
        <h2>LadGroup</h2>
        <img src={logo} alt="ladgroup logo" />
        <div className={`${items}`}>
          <div>
            <Location />
            <p>
              Factory address - Kilometer 4, Sagamu Benin Expressway, Ikenne-Remo, Ogun State,
              Nigeria.
            </p>
          </div>
          <div>
            <Location />
            <p>Office address - 24, Abimbola street, Ilasamaja Isolo, Lagos, Nigeria</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
