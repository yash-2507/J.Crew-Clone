import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import Kids from "./Kids";
import Mens from "./Mens";
import Women from "./Women";
import ProductPage from "./ProductPage";

export default function Index() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<MainPage />}></Route>
                <Route exact path="/mens" element={<Mens />}></Route>
                <Route exact path="/women" element={<Women />}></Route>
                <Route exact path="/kids" element={<Kids />}></Route>
                <Route exact path="/products" element={<ProductPage />} />
            </Routes>
            <Footer />
        </>
    );
}
