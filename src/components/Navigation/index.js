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
              <NavLink exact to="/products/raw-shea" activeClassName="selected">
                Products
              </NavLink>
            </li>
            <li className={nav_item}>
              <NavLink exact to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
            <li className={nav_item}>
              More
              <span className="pl-2">
                <i className="fa fa-caret-down"></i>
              </span>
              {/* <NavDropdown title="More" id="nav-dropdown">
                <NavDropdown.Item  href="/about">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
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
            {/* <li className={nav_item}>
              <i className="fa fa-search"></i>
            </li> */}
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
