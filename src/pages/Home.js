import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HouseCard from "../components/HouseCard/HouseCard";
import React from "react"
var ip = require('ip');
const ipLocation = require("iplocation");


const Home = () => {
  const [loc, setLoc] = React.useState("")

  const updateLoc = async () => {
    const myIp = ip.address()
    console.log(myIp)
    const loc = await ipLocation(myIp);
    console.log(loc)
  }
  React.useEffect(() => {
    updateLoc()
  }, [])
  return (
    <div>
      <Navbar />
      <Hero />
      <HouseCard />
    </div>
  );
};

export default Home;
