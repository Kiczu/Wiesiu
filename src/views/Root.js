import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "../components/Navigation/Navigation";
import Shop from "../components/Shop/Shop";


const Root = () => {
    return(
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/shop" exact element={<Shop />} />
            </Routes>
        </Router>
    )
}

export default Root;