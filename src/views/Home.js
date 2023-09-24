import React from "react";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div style={{ height: 300 + "vh" }}>
      Home
      <Slider autoPlay={3} />
      <div style={{fontSize: 2 + "rem"}}>Nex sction after slider</div>
    </div>
  );
};

export default Home;
