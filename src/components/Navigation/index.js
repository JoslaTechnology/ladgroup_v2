import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoIosGlobe, IoMdMenu, IoMdClose } from "react-icons/io";
import { ReactComponent as Logo } from "assets/newLogo.svg";
import { ReactComponent as Flag } from "assets/nigerian_flag.svg";
import { header, nav_item, flag, envelope, nav_brand, nav_toggle, nav_list, nav_list2, open, active } from "./style.module.css";

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseNav = () => setIsCollapsed(true);
  const closeNav = () => setIsCollapsed(false);

  return (
    <Fragment>
      <header className={header}>
        <nav className={isCollapsed ? `${open}` : ""}>
          <div className={nav_toggle}>
            <IoMdMenu fontSize="30px" onClick={collapseNav} />
            <IoMdClose fontSize="30px" onClick={closeNav} />
          </div>

          <ul className={nav_list}>
            <li className={nav_item}>
              <NavDropdown title="Products" className="nav-dropdown">
                <NavDropdown.Item href="/products/raw-shea">Raw shea butter</NavDropdown.Item>
                <NavDropdown.Item href="/products/organic-shea">Organic shea butter</NavDropdown.Item>
                <NavDropdown.Item href="/products/de-oiled-cake">De oiled cake</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className={nav_item}>
              <Link  to="/about">
                About
              </Link>
            </li>
            <li className={nav_item}>
              <NavDropdown title="More" className="nav-dropdown">
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
                <NavDropdown.Item href="/media">Media</NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>

          <ul className={nav_list2}>
            <li className={nav_item}>
              <NavLink activeClassName={active} to="/about">About</NavLink>
            </li>
            <li className={nav_item}>
              <NavLink activeClassName={active} to="/products/raw-shea">Raw shea butter</NavLink>
            </li>
            <li className={nav_item}>
              <NavLink activeClassName={active} to="/products/organic-shea">Organic shea butter</NavLink>
            </li>
            <li className={nav_item}>
              <NavLink activeClassName={active} to="/products/de-oiled-cake">De oiled cake</NavLink>
            </li>

            <li className={nav_item}>
              <NavLink activeClassName={active} to="/careers">Careers</NavLink>
            </li>
            <li className={nav_item}>
              <NavLink activeClassName={active} to="/Media">Media</NavLink>
            </li>
            <li className={nav_item}>
              <NavLink activeClassName={active} to="/contact">Contact Us</NavLink>
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
