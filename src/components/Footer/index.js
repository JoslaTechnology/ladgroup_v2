import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Dropd from "react-dropd";
import logo2 from "assets/footerLogo.svg";
import { ReactComponent as Location } from "assets/location.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import {
  footer,
  items,
  item_icon,
  footer_logo,
  item_text,
  footer_links,
  footer_links2,
  social_icons,
  language_box,
  legal,
  legal_links,
  social_media1,
  social_media2,
  accordion_parent,
  accordion_group,
  accordion_child
} from "./style.module.css";

const Footer = () => {
  const languageList = [{ label: "English", value: "english" }];
  const [language, setLanguage] = useState(languageList[0]);

  const footerLinks = [
    { heading: "Join us", content: "Careers", link: "careers" },
    { heading: "Support", content: "Contact us", link: "contact" },
    { heading: "Media", content: "News", link: "media" }
  ];

  return (
    <footer className={footer}>
      <div className="container">
        <div className={`${items}`}>
          <div>
            <img className={footer_logo} src={logo2} alt="lad group logo" />
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
          <div className={social_media1}>
            <ul className={social_icons}>
              <li>
                <a href="https://www.linkedin.com/company/ladgrouplimited/" target="blank"> 
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              {/* <li>
                <a href="https://web.facebook.com/pages/category/Local-Business/Ladgroup-Limited-1405064996405983/" target="blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li> */}
              {/* <li>
                <a href="#!">
                  <i className="fa fa-twitter"></i>
                </a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/ladgroup_sheabutter/" target="blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <dl>
            <dt>Products</dt>
            <dd>
              <Link to="/products/raw-shea">Raw shea butter</Link>
            </dd>
            <dd>
              <Link to="/products/organic-shea">Organic shea butter</Link>
            </dd>
            <dd>
              <Link to="/products/de-oiled-cake">De oiled cake</Link>
            </dd>
          </dl>

          <dl>
            <dt>Company</dt>
            <dd>
              <Link to="/about">About Us</Link>
            </dd>
            <dd>
              <a href="/about#board">Board members</a>
            </dd>
          </dl>

          <dl>
            <dt>Join us</dt>
            <dd>
              <Link to="/careers">Careers</Link>
            </dd>
          </dl>

          <dl>
            <dt>Support</dt>
            <dd>
              <Link to="/contact">Contact us</Link>
            </dd>
          </dl>

          <dl>
            <dt>Media</dt>
            <dd>
              <Link to="/media">News</Link>
            </dd>
          </dl>

          <div className={footer_links2}>
            <Accordion allowZeroExpanded>
              <AccordionItem className={accordion_group}>
                <AccordionItemHeading>
                  <AccordionItemButton className={accordion_parent}>
                    <h6>Products</h6>
                    <span>
                      <FiChevronDown size="15px" />
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={accordion_child}>
                  <Link to="/products/raw-shea">Raw shea butter</Link>
                </AccordionItemPanel>
                <AccordionItemPanel className={accordion_child}>
                  <Link to="/products/organic-shea">Organic shea butter</Link>
                </AccordionItemPanel>
                <AccordionItemPanel className={accordion_child}>
                  <Link to="/products/de-oiled-cake">De oiled cake</Link>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className={accordion_group}>
                <AccordionItemHeading>
                  <AccordionItemButton className={accordion_parent}>
                    <h6>Company</h6>
                    <span>
                      <FiChevronDown size="15px" />
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={accordion_child}>
                  <Link to="/about">About Us</Link>
                </AccordionItemPanel>
                <AccordionItemPanel className={accordion_child}>
                  <Link to="/about#board">Board members</Link>
                </AccordionItemPanel>
              </AccordionItem>

              {footerLinks.map((item, i) => (
                <AccordionItem className={accordion_group} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className={accordion_parent}>
                      <h6>{item.heading}</h6>
                      <span>
                        <FiChevronDown size="15px" />
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={accordion_child}>
                    <Link to={`/${item.link}`}>{item.content}</Link>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className={social_media2}>
            <h5>Follow Us</h5>
            <ul className={social_icons}>
              <li>
                <a href="https://www.linkedin.com/company/ladgrouplimited/" target="blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              {/* <li>
                <a href="https://web.facebook.com/pages/category/Local-Business/Ladgroup-Limited-1405064996405983/" target="blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li> */}
              {/* <li>
                <a href="#!">
                  <i className="fa fa-twitter"></i>
                </a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/ladgroup_sheabutter/" target="blaank">
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
