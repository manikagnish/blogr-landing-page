import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="hero-section">
      <Navbar />

      <h1 className="hero-section__title">A modern publishing platform</h1>
      <p className="hero-section__mission-statement">
        Grow your audience and build your online brand
      </p>

      <div className="hero-section__btn-container">
        <Button text="Start for free" type="btn--solid hero-section__btn" />
        <Button text="Learn More" type="btn--outline" />
      </div>
    </div>
  );
}

export default HeroSection;
