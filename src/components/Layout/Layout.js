import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router";
import Home from "../../views/Home";
import Shop from "../Shop/Shop";
import "./Layout.scss"

const Layout = () => {

    return(
        <>
        <header className="menu-container menu">
            <Navigation />
        </header>
        <main>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/shop" exact element={<Shop />} />
            </Routes>
        </main>
        <Footer />
        </>
    )
}

export default Layout;