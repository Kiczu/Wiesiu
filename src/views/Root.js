import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return(
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Footer />} />
            </Routes>
        </Router>
    )
}

export default Root;