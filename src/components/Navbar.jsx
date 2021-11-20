import { useState, useEffect } from "react";

import iconDark from "../images/icon-arrow-dark.svg";
import iconLight from "../images/icon-arrow-light.svg";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import Button from "./Button";
import NavItem from "./NavItem";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [button, setButton] = useState

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
              listItem1="Product1"
              listItem2="Product2"
              listItem3="Product3"
            />

            <NavItem
              className="nav-list-item"
              icon={screenWidth > 700 ? iconLight : iconDark}
              name="Company"
              listItem1="Company1"
              listItem2="Company2"
              listItem3="Company3"
            />

            <NavItem
              className="list-divider nav-list-item"
              icon={screenWidth > 700 ? iconLight : iconDark}
              name="Connect"
              listItem1="Contact"
              listItem2="Newsletter"
              listItem3="LinkedIn"
            />

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
