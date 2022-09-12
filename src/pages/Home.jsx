import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
// import ChooseUs from "../components/Choose-us/ChooseUs";
// import Features from "../components/Feature-section/Features";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import PopularServices from "../components/Popular-services/PopularServices";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <PopularServices />
      {/* <ChooseUs />
      <Features /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
