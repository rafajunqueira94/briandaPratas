import React from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MainProducts from "../components/MainProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Announcement />
      <Header />
      <Navbar />
      <Banner />
      <MainProducts />
      <Footer />
    </>
  );
};

export default Home;