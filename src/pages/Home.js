import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import React from "react";
import Properties from "../components/Properties/Properties";

var ip = require("ip");
const ipLocation = require("iplocation");

const Home = () => {
  const [loc, setLoc] = React.useState("");

  const updateLoc = async () => {
    const myIp = ip.address();
    console.log(myIp);
    const loc = await ipLocation(myIp);
    console.log(loc);
  };
  React.useEffect(() => {
    updateLoc();
  }, [loc]);
  return (
    <div>
      <Navbar />
      <Hero />
      <Properties />
    </div>
  );
};

export default Home;
