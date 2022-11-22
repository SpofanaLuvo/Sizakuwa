import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import Services from "../components/Services/Services";
import PopularServices from "../components/Popular-services/PopularServices";
import Contact from "../components/Contact/Contact";

import { BrowserRouter} from "react-router-dom"

const Home = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <HeroSection />
        <AboutUs />
        <Services />
        <PopularServices />
        <Contact />
      </Fragment>
    </BrowserRouter>
  );
};

export default Home;
