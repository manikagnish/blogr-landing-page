import icon from "../images/icon-arrow-light.svg";
import logo from "../images/logo.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/#" className="navbar-link">
              Products
            </a>
            <img src={icon} alt="arrow dark" />
          </li>
          <li>
            <a href="/#" className="navbar-link">
              Company
            </a>
            <img src={icon} alt="arrow dark" />
          </li>
          <li>
            <a href="/#" className="navbar-link">
              Connect
            </a>
            <img src={icon} alt="arrow dark" />
          </li>
          <li>
            <a href="/#" className="navbar-link">
              Login
            </a>
          </li>
          <li>
            <a href="/#">
              <Button text="Sign Up" type="solid" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
