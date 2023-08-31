import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";


const Root = () => {
    return(
        <Router>

            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Root;