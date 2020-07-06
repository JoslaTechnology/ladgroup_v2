import React from "react";
import Dropd from "react-dropd";
import { ReactComponent as Logo } from "assets/logo2.svg";
import { ReactComponent as Location } from "assets/location.svg";

import { footer, items, item_icon, item_text, footer_links, social_icons } from "./style.module.css";

const Footer = () => {
  return (
    <footer className={footer}>
      <div className="container">
        <div className={`${items}`}>
          <div>
            <Logo />
            <p>
              <span className={item_icon}>
                <Location />
              </span>
              <span className={item_text}>
                Factory address - Kilometer 4, Sagamu Benin Expressway, Ikenne-Remo, Ogun State, Nigeria.
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className={item_icon}>
                <Location />
              </span>
              <span className={item_text}>Office address - 24, Abimbola Street, Ilasamaja Isolo, Lagos, Nigeria</span>
            </p>
          </div>
        </div>

        <hr />

        <div className={footer_links}>
          <dl>
            <dt>Products</dt>
            <dd>
              <a href="#!">Raw shea butter</a>
            </dd>
            <dd>
              <a href="#!">Organic shea butter</a>
            </dd>
            <dd>
              <a href="#!">De oiled cake</a>
            </dd>
          </dl>

          <dl>
            <dt>Company</dt>
            <dd>
              <a href="#!">About Us</a>
            </dd>
            <dd>
              <a href="#!">Board members</a>
            </dd>
          </dl>

          <dl>
            <dt>Join us</dt>
            <dd>
              <a href="#!">Careers</a>
            </dd>
          </dl>

          <dl>
            <dt>Support</dt>
            <dd>
              <a href="#!">Contact us</a>
            </dd>
          </dl>

          <dl>
            <dt>Media</dt>
            <dd>
              <a href="#!">News</a>
            </dd>
          </dl>

          <div className="social-media">
            <h5>Follow Us</h5>
            <ul className={social_icons}>
              <li>
                <a href="#!">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        {/* <div className="language">
          <p>Language</p>
          <Dropd
            placeholder="Choose a language"
            onOpen={(currentItem, event) => console.log(event.target)}
            list={["English"]}
          />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
