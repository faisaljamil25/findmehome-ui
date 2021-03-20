import React from "react";
import { useHistory } from "react-router";
import "../../App.css";
import { Button } from "../Button/Button";
import "./Hero.css";

function HeroSection() {
  const history = useHistory();
  // const handleClick =()=> {
  //   history.push("/signin");
  // }
  return (
    <div className="hero-container">
      <img src="/house2.jpg" alt="bg" />
      <h1>NOW IT'S EASY TO FIND YOUR HOME</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => history.push("/signin")}
        >
          LOGIN
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => history.push("/signup")}
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
