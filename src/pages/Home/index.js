import React, { Fragment } from "react";
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

import {
  main,
  commitment_container,
  commitment_text,
  grid_2x2,
  grid_1x5,
  indicator_group,
  product
} from "./style.module.css";
import { sub_heading } from "style/layout.module.css";

import Leading from "components/leading";

const Home = () => {
  return (
    <Fragment>
      <main className={main}>
        <img src={banner} alt="" />
        <h1>Pioneering in oil-seed processing in Nigeria</h1>
      </main>

      <section className="commitment">
        <div className="container">
          <h2 className={sub_heading}>Our commitment to you</h2>
          <div className={commitment_container}>
            <div className={commitment_text}>
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
        <h2 className={sub_heading}>Our products</h2>
        <div className={`${grid_2x2} scale_effect`}>
          <div className={product}>
            <img src={product1} alt="Raw shea butter" />
            <p>For distributors</p>
            <h3>Raw shea butter</h3>
          </div>
          <div className={product}>
            <img src={product2} alt="Organic shea butter" />
            <p>Available on order</p>
            <h3>Organic shea butter</h3>
          </div>
          <div className={product}>
            <img src={product3} alt="De oiled cake" />
            <p>Well processed</p>
            <h3>De oiled cake</h3>
          </div>
          <div className={`${product} unavailable`}>
            <img src={product4} alt="Refined shea butter" />
            <p>Available soon</p>
            <h3>Refined shea butter</h3>
          </div>
          {/* </div> */}
        </div>
      </section>

      <section className="distributors">
        <div className="container">
          <h2 className={sub_heading}>Join Our Growing List of Distributors/Suppliers</h2>
          <div className={`${grid_2x2} scale_effect`}>
            <div className={product}>
              <img src={supplier1} alt="Raw shea butter" />
              <p>Register as a distributor</p>
              <h3>Distributor registration</h3>
            </div>
            <div className={product}>
              <img src={supplier2} alt="Organic shea butter" />
              <p>Register as a supplier</p>
              <h3>Supplier registration</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="indicators">
        <div className="container">
          <h2 className={sub_heading}>Key Indicators</h2>
          <div className={grid_1x5}>
            <div className={indicator_group}>
              <img src={indicator1} alt="Raw shea butter" />
              <p>Track record</p>
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
              <h4>3</h4>
            </div>
            <div className={indicator_group}>
              <img src={indicator4} alt="Raw shea butter" />
              <p>Quality check</p>
              <h4>A+</h4>
            </div>
            <div className={indicator_group}>
              <img src={indicator5} alt="Raw shea butter" />
              <p>Packaging</p>
              <h4>A+</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className={`${grid_2x2} scale_effect`}>
            <div className={product}>
              <img src={gallery1} alt="Raw shea butter" />
              <p>CEO message</p>
              <h3>Leading for others to follow</h3>
            </div>
            <div className={product}>
              <img src={gallery2} alt="Organic shea butter" />
              <p>News</p>
              <h3>Sahel Capital to Invest in Ladgroup - Nipc</h3>
            </div>
          </div>
        </div>
      </section>

      <Leading />
    </Fragment>
  );
};

export default Home;
