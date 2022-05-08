import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import Kids from "./Kids";
import Mens from "./Mens";
import Women from "./Women";
import KidsProductPage from "./KidsProduct/KidsProductPage";
import SingleProduct from "./SingleProduct";
import ProductPage from "./MensProduct/ProductPage";
import { get_products } from "../features/Product/productSlice";
import { useDispatch } from "react-redux";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_products());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/mens" element={<Mens />}></Route>
        <Route exact path="/women" element={<Women />}></Route>
        <Route exact path="/kids" element={<Kids />}></Route>
        <Route exact path="/products/mens" element={<ProductPage />} />
        <Route exact path="/products/mens/:id" element={<SingleProduct />} />
        <Route exact path="/products/kids" element={<KidsProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}
