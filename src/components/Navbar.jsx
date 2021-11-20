import { useState, useEffect } from "react";

import iconDark from "../images/icon-arrow-dark.svg";
import iconLight from "../images/icon-arrow-light.svg";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import Button from "./Button";
import NavItem from "./NavItem";
import DropdownListItem from "./DropdownListItem";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/#">
          <img src={logo} alt="logo" />
        </a>
      </div>

      {(toggleMenu || screenWidth > 700) && (
        <nav>
          <ul className="nav-list">
            <NavItem
              className="nav-list-item"
              icon={screenWidth > 700 ? iconLight : iconDark}
              name="Product"
            >
              <DropdownListItem listItem="Overview" />
              <DropdownListItem listItem="Pricing" />
              <DropdownListItem listItem="Marketplace" />
              <DropdownListItem listItem="Features" />
              <DropdownListItem listItem="Integrations" />
            </NavItem>

            <NavItem
              className="nav-list-item"
              icon={screenWidth > 700 ? iconLight : iconDark}
              name="Company"
            >
              <DropdownListItem listItem="About" />
              <DropdownListItem listItem="Team" />
              <DropdownListItem listItem="Blog" />
              <DropdownListItem listItem="Careers" />
            </NavItem>

            <NavItem
              className="list-divider nav-list-item"
              icon={screenWidth > 700 ? iconLight : iconDark}
              name="Connect"
            >
              <DropdownListItem listItem="Contact" />
              <DropdownListItem listItem="Newsletter" />
              <DropdownListItem listItem="LinkedIn" />
            </NavItem>

            <li className="nav-list-item">
              <a href="/#" className="navbar__link">
                Login
              </a>
            </li>

            <li className="nav-btn nav-list-item">
              <a href="/#">
                <Button
                  text="Sign Up"
                  type={screenWidth > 700 ? "btn--solid" : "btn--gradient"}
                />
              </a>
            </li>
          </ul>
        </nav>
      )}

      <img
        className="menu-icon"
        src={toggleMenu ? close : hamburger}
        alt="hamburger menu icon"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
    </div>
  );
}
