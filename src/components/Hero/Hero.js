import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./Hero.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/house2.jpg" alt="bg" className="image-container" />
      <h1>NOW IT'S EASY TO FIND YOUR HOME</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          route="signin"
        >
          LOGIN
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          route="signup"
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
