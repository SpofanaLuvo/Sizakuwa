import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
// import ChooseUs from "../components/Choose-us/ChooseUs";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import PopularServices from "../components/Popular-services/PopularServices";
// import { Company } from "sib-api-v3-sdk";
import Contact from "../components/Contact/Contact";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <PopularServices />
      {/* <Company /> */}
      {/* <ChooseUs /> */}
      {/* <Features /> */}
      <Contact />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
