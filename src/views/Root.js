import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "../components/Navigation/Navigation";


const Root = () => {
    return(
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Root;