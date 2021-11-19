import { useState, useEffect } from "react";

import icon from "../images/icon-arrow-dark.svg";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import Button from "./Button";
import NavItem from "./NavItem";

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
        <img src={logo} alt="logo" />
      </div>

      <img
        className="menu-icon"
        src={toggleMenu ? close : hamburger}
        alt="hamburger menu icon"
        onClick={() => setToggleMenu(!toggleMenu)}
      />

      {(toggleMenu || screenWidth > 500) && (
        <nav>
          <ul>
            <NavItem
              icon={icon}
              name="Product"
              listItem1="Product1"
              listItem2="Product2"
              listItem3="Product3"
            />

            <NavItem
              icon={icon}
              name="Company"
              listItem1="Company1"
              listItem2="Company2"
              listItem3="Company3"
            />

            <NavItem
              className="list-divider"
              icon={icon}
              name="Connect"
              listItem1="Contact"
              listItem2="Newsletter"
              listItem3="LinkedIn"
            />

            <li>
              <a href="/#" className="navbar__link">
                Login
              </a>
            </li>

            <li className="nav-btn">
              <a href="/#">
                <Button text="Sign Up" type="btn--gradient" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
