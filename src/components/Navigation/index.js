import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { IoIosGlobe } from "react-icons/io";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Flag } from "assets/nigerian_flag.svg";
import { header, nav_item, flag, envelope, nav_brand } from "./style.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <header className={header}>
        <nav>
          <ul>
            <li className={nav_item}>
              <NavDropdown title="Products" className="nav-dropdown">
                <NavDropdown.Item href="/products/raw-shea">Raw shea butter</NavDropdown.Item>
                <NavDropdown.Item href="/products/organic-shea">Organic shea butter</NavDropdown.Item>
                <NavDropdown.Item href="/products/de-oiled-cake">De oiled cake</NavDropdown.Item>
              </NavDropdown>

            </li>
            <li className={nav_item}>
              <NavLink exact to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
            <li className={nav_item}>
              <NavDropdown title="More" className="nav-dropdown">
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
                <NavDropdown.Item href="/media">Media</NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>

          <span className={`${nav_brand}`}>
            <Link to="/">
              <Logo />
            </Link>
          </span>

          <ul>
            <li className={`${nav_item} ${flag}`}>
              <Flag />
            </li>
            <li className={nav_item}>
              <IoIosGlobe />
            </li>
            <li className={`${nav_item} ${envelope}`}>
              <i className="fa fa-envelope text-info"></i>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navigation;
