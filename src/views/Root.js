import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HOME, SHOP} from "../paths";
import Home from "./Home";
import Navigation from "../components/Navigation/Navigation";
import Shop from "../components/Shop/Shop";

const Root = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path={HOME} exact element={<Home />} />
        <Route path={SHOP} element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default Root;
