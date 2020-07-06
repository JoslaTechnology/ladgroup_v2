import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosGlobe } from "react-icons/io";
// import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Flag } from "assets/nigerian_flag.svg";
import { header, nav_item, flag, envelope } from "./style.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <header className={header}>
        <nav>
          <ul>
            <li className={nav_item}>
              <NavLink exact to="/products" activeClassName="selected">
                Products
              </NavLink>
            </li>
            <li className={nav_item}>
              <NavLink exact to="/support" activeClassName="selected">
                Support
              </NavLink>
            </li>
            <li className={nav_item}>
              More
              <span className="pl-2">
                <i className="fa fa-caret-down"></i>
              </span>
            </li>
          </ul>
          <span className="nav-brand">
            {/* <Logo /> */}
            <Link to="/">
              <h1>LOGO</h1>
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
