import React, { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import DistributorForm from "components/Forms/DistributorForm";
import SupplierForm from "components/Forms/SupplierForm";
import Modal from "components/Modal";

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
import carousel1 from "assets/carousel1.png";
import carousel2 from "assets/carousel2.png";
import carousel3 from "assets/carousel3.png";
import carousel4 from "assets/carousel4.png";

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
  const [showDistributorModal, setShowDistributorModal] = useState(false);
  const [showSupplierModal, setShowSupplierModal] = useState(false);
  // const toggleModal = () => setShowModal(!showModal);

  return (
    <Fragment>
      {showDistributorModal ? (
        <Modal close={setShowDistributorModal} color="#fff">
          <DistributorForm setShowDistributorModal={setShowDistributorModal} />
        </Modal>
      ) : (
        ""
      )}
      {showSupplierModal ? (
        <Modal close={setShowSupplierModal} color="#fff">
          <SupplierForm setShowSupplierModal={setShowSupplierModal} />
        </Modal>
      ) : (
        ""
      )}
      <main className={main}>
        <Carousel fluid>
          <Carousel.Item>
            <img src={carousel1} alt="First slide" />
            <Carousel.Caption>
              <h1>Pioneering shea nut processing in Nigeria</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel2} alt="Third slide" />
            <Carousel.Caption>
              <h1>Pioneering shea nut processing in Nigeria</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel3} alt="Third slide" />
            <Carousel.Caption>
              <h1>Pioneering shea nut processing in Nigeria</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel4} alt="Third slide" />
            <Carousel.Caption>
              <h1>Pioneering shea nut processing in Nigeria</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
            <iframe
              src="https://www.youtube.com/embed/T5MZnykBSMg"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="ladgroup promo"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="our_products">
        <div className="container">
          <h2 className={sub_heading}>Our products</h2>
          <div className={`${grid_2x2} scale_effect`}>
            <div className={product}>
              {/* <img src={product1} alt="Raw shea butter" /> */}
              <p>For distributors</p>
              <h3>Raw shea butter</h3>
            </div>
            <div className={product}>
              {/* <img src={product2} alt="Organic shea butter" /> */}
              <p>Available on order</p>
              <h3>Organic shea butter</h3>
            </div>
            <div className={product}>
              {/* <img src={product3} alt="De oiled cake" /> */}
              <p>Well processed</p>
              <h3>De oiled cake</h3>
            </div>
            <div className={`${product} unavailable`}>
              {/* <img src={product4} alt="Refined shea butter" /> */}
              <p>Available soon</p>
              <h3>Refined shea butter</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="distributors">
        <div className="container">
          <h2 className={sub_heading}>Join Our Growing List of Distributors/Suppliers</h2>
          <div className={`${grid_2x2} scale_effect`}>
            <div className={`${product} cursor`} onClick={() => setShowDistributorModal(true)}>
              <img src={supplier1} alt="Raw shea butter" />
              <p>Register as a distributor</p>
              <h3>Distributor registration</h3>
            </div>
            <div className={`${product} cursor`} onClick={() => setShowSupplierModal(true)}>
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
              <h3>Pioneering in shea nut production</h3>
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
