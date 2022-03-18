import React from "react";
import Welcome from "../components/Welcome";
import Features from "../components/Features";
import Faqs from "../components/Faqs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <Features />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
