import React, { useState } from "react";
import Dropd from "react-dropd";
import { ReactComponent as Logo } from "assets/logo2.svg";
import { ReactComponent as Location } from "assets/location.svg";

import {
  footer,
  items,
  item_icon,
  item_text,
  footer_links,
  social_icons,
  language_box,
  legal,
  legal_links
} from "./style.module.css";

const Footer = () => {
  const languageList = [{ label: "English", value: "english" }];

  const [language, setLanguage] = useState(languageList[0]);

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

        <div className={language_box}>
          <p>Language</p>
          <Dropd
            placeholder="Choose a language"
            value={language.label}
            onItemChange={(currentItem, event) => setLanguage(currentItem)}
            list={languageList}
          />
        </div>

        <hr />

        <div className={legal}>
          <p>
            <i className="fa fa-copyright"></i> Copyright Ladgroup
          </p>
          <div className={legal_links}>
            <ul>
              <li>
                <a href="#!">Terms and conditions</a>
              </li>
              <li>
                <a href="#!">Privacy statement</a>
              </li>
              <li>
                <a href="#!">Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
