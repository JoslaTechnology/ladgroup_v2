import React from "react";
import videoClip from "assets/video.svg";
import product1 from "assets/product1.svg";
import product2 from "assets/product2.svg";
import product3 from "assets/product3.svg";
import product4 from "assets/product4.svg";
import supplier1 from "assets/supplier1.png";
import supplier2 from "assets/supplier2.png";
import indicator1 from "assets/indicator1.svg";
import indicator2 from "assets/indicator2.svg";
import indicator3 from "assets/indicator3.svg";
import indicator4 from "assets/indicator4.svg";
import indicator5 from "assets/indicator5.svg";
import gallery1 from "assets/gallery1.svg";
import gallery2 from "assets/gallery2.svg";
import banner from "assets/banner.png";
import contact_us from "assets/contact_us.png";

import { main, flex_2, grid_2x2, body, grid_1x5, indicator_group, contact, contact_text } from "./style.module.css";
import Button from "components/Button";

const Home = () => {
  return (
    <div className={body}>
      <main className={main}>
        <img src={banner} alt="" />
        <h1>Pioneering in oil-seed processing in Nigeria</h1>
      </main>

      <section className="commitment">
        <div className="container">
          <h2>Our commitment to you</h2>
          <div className={flex_2}>
            <div>
              <h3>
                To be the foremost company in Agro Commodities Marketing and Processing in Nigeria and West africa
              </h3>
              <p>
                <br />
                Contributing significantly to the economy of Nigeria and west africa through its non-oil export
                earnings. Generating capacity and provision of employment opportunities to Nigerian citizens.
              </p>
            </div>
            <img src={videoClip} alt="clip of product packaging " />
          </div>
        </div>
      </section>

      <section className="our_products">
        <div className="container">
          <h2>Our products</h2>
          <div className={`${grid_2x2} opacity_effect`}>
            <img src={product1} alt="Raw shea butter" />
            <img src={product2} alt="Organic shea butter" />
            <img src={product3} alt="De oiled cake" />
            <img src={product4} alt="Refined shea butter" />
          </div>
        </div>
      </section>

      <section className="distributors">
        <div className="container">
          <h2>Join Our Growing List of Distributors/Suppliers</h2>
          <div className={grid_2x2}>
            <img src={supplier1} alt="Raw shea butter" />
            <img src={supplier2} alt="Organic shea butter" />
          </div>
        </div>
      </section>

      <section className="indicators">
        <div className="container">
          <h2>Key Indicators</h2>
          <div className={grid_1x5}>
            <div className={indicator_group}>
              <img src={indicator1} alt="Raw shea butter" />
              <p>Experience</p>
              <h4>45 years</h4>
            </div>
            <div className={indicator_group}>
              <img src={indicator2} alt="Raw shea butter" />
              <p>International export</p>
              <h4>Yes</h4>
            </div>
            <div className={indicator_group}>
              <img src={indicator3} alt="Raw shea butter" />
              <p>Products</p>
              <h4>4+</h4>
            </div>
            <div className={indicator_group}>
              <img src={indicator4} alt="Raw shea butter" />
              <p>Products</p>
              <h4>A+</h4>
            </div>
            <div className={indicator_group}>
              <img src={indicator5} alt="Raw shea butter" />
              <p>Plant capability</p>
              <h4>Oil seeds</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className={grid_2x2}>
            <img src={gallery1} alt="Raw shea butter" />
            <img src={gallery2} alt="Organic shea butter" />
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className={contact}>
          <img src={contact_us} alt="contact us" />
          <div className={contact_text}>
            <p>Leading for others to follow</p>
            <Button label="Contact us" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
