import { useState, useEffect } from "react";

import icon from "../images/icon-arrow-dark.svg";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import Button from "./Button";

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
            <li>
              <div>
                <span className="active">Product</span>
                <img src={icon} alt="arrow dark" className="active" />
              </div>

              <ul className="dropdown-list">
                <li>
                  <a href="/#" className="dropdown-list__link">
                    Product1
                  </a>
                </li>
                <li>
                  <a href="/#" className="dropdown-list__link">
                    Product2
                  </a>
                </li>
                <li>
                  <a href="/#" className="dropdown-list__link">
                    Product3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div>
                <span className="active">Company</span>
                <img src={icon} alt="arrow dark" />
              </div>

              <ul className="dropdown-list">
                <li>
                  <a href="/#" className="dropdown-list__link">
                    Company1
                  </a>
                </li>
                <li>
                  <a href="/#" className="dropdown-list__link">
                    Company2
                  </a>
                </li>
                <li>
                  <a href="/#" className="dropdown-list__link">
                    Company3
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-divider">
              <div>
                <span className="active">Connect</span>
                <img src={icon} alt="arrow dark" />
              </div>

              <ul className="dropdown-list list-divider__dropdown">
                <li>
                  <a href="/#" className="dropdown-list__link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/#" className="dropdown-list__link">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="/#" className="dropdown-list__link">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/#" className="navbar__link">
                Login
              </a>
            </li>
            <li>
              <a href="/#">
                <Button text="Sign Up" type="btn--gradient" />
              </a>
              {/* <Button text="Start for Free" type="btn--solid" />
            <Button text="Learn More" type="btn--outline" /> */}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
