import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <a href="/blogr-landing-page">
        <img src={logo} alt="blogr" className="footer__img" />
      </a>
      <div className="footer__container">
        <h4>Product</h4>
        <ul>
          <li>
            <a href="/blogr-landing-page">Overview</a>
          </li>
          <li>
            <a href="/blogr-landing-page">Pricing</a>
          </li>
          <li>
            <a href="/blogr-landing-page">Marketplace</a>
          </li>
          <li>
            <a href="/blogr-landing-page">Features</a>
          </li>
          <li>
            <a href="/blogr-landing-page">Integrations</a>
          </li>
        </ul>
      </div>
      <div className="footer__container">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="/blogr-landing-page">About</a>
          </li>
          <li>
            <a href="/blogr-landing-page">Team</a>
          </li>
          <li>
            <a href="/blogr-landing-page">Blog</a>
          </li>
          <li>
            <a href="/blogr-landing-page">Careers</a>
          </li>
        </ul>
      </div>
      <div className="footer__container">
        <h4>Connect</h4>
        <ul>
          <li>
            <a href="/blogr-landing-page">Contact</a>
          </li>
          <li>
            <a href="/blogr-landing-page">Newsletter</a>
          </li>
          <li>
            <a href="/blogr-landing-page">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
