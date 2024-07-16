import React, { useRef } from "react";
import Hero from "../components/Hero";
import Consultation from "../components/Consultation";
import Services from "../components/Services";
import Process from "../components/Process";
import About from "../components/About";
import ChooseUs from "../components/ChooseUs";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import AboutDesc from "../components/AboutDesc";
import AboutWork from "../components/AboutWork";

const Index = () => {
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = () => {
    processRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero
        scrollToServices={scrollToServices}
        scrollToProcess={scrollToProcess}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
      />
      <div ref={contactRef}>
        <Consultation />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={processRef}>
        <Process scrollToContact={scrollToContact}/>
      </div>
      <AboutDesc />
      <div ref={aboutRef}>
        <About />
      </div>
      <AboutWork />
      <ChooseUs />
      <Certifications />
      <Footer scrollToContact={scrollToContact}/>
    </div>
  );
};

export default Index;
