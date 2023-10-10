import React from "react";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed";

const Home = () => {
  return (
    <div>
      Home
      <InstagramFeed />
      <div style={{ fontSize: 2 + "rem" }}>Nex sction after slider</div>
    </div>
  );
};

export default Home;
