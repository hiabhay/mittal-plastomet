import React from "react";
import Section from "./Section";
import Navbar from "./Navbar";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import bg1 from "../assets/images/bg-1.png";
import bg2 from "../assets/images/bg-2.png";
import Arrow from "../assets/images/Arrow.png";
import "../assets/customCss.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Hero = ({
  scrollToServices,
  scrollToProcess,
  scrollToAbout,
  scrollToContact,
}) => {
  return (
    <Section>
      <div
        style={{
          position: "relative",
          zIndex: 10, // Background z-index
          minHeight: "100vh",
        }}
      >
        <Navbar
          scrollToServices={scrollToServices}
          scrollToProcess={scrollToProcess}
          scrollToAbout={scrollToAbout}
          scrollToContact={scrollToContact}
          style={{ zIndex: 50 }}
        />
        <div
          style={{
            position: "absolute",
            top: "24%",
            left: "52%",
            transform: "translate(-50%, -50%)",
            fontSize: "2rem",
            zIndex: -10, // Hero text z-index
          }}
        >
          <div className="sm:hidden xs:hidden">
            <div className="text-indigo-900 font-semibold text-[55px] ml-28 w-[900px]">
              RECHARGE
              <span className="text-cyan-600 text-[60px]"> YOUR LIFE WITH</span>
            </div>
            <div className="flex -mt-4">
              <div className="text-cyan-600 font-semibold text-[60px] ml-60">
                SOLAR{" "}
              </div>
              <img className="h-[75px] w-auto mt-5 ml-2" src={Arrow} />
              <div className="text-indigo-900 font-semibold text-[55px] mt-2 ml-3">
                ENERGY
              </div>
            </div>
          </div>
          <div className="hidden sm:block xs:block -z-10 -mt-16 w-screen flex-col justify-center">
            <div className="w-fit mx-auto text-indigo-900 text-[25px] font-bold">
              RECHARGE <span className="text-cyan-600">YOUR LIFE WITH</span>
            </div>
            <div className="w-fit mx-auto text-indigo-900 text-[25px] font-bold flex">
              SOLAR <img className="h-[40px] w-auto ml-1 mr-1" src={Arrow} />
              <span className="text-cyan-600">ENERGY</span>
            </div>
            <div className="w-fit mx-auto text-sm font-bold text-indigo-900">
              | Bhopal’s path to zero bills & |
            </div>
            <div className="w-fit mx-auto text-sm font-bold text-indigo-900">
            Eliminate electricity bills in indore |
            </div>
          </div>
        </div>
        <div className="w-auto absolute top-[37%] left-[23%] text-2xl font-bold text-indigo-900 sm:hidden">
          | Bhopal’s path to zero bills & Eliminate electricity bills in indore
          |
        </div>
      </div>

      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={2000}
        bullets={true}
        buttons={false}
        fillParent={true}
        className="slider"
      >
        <div
          data-src={bg1}
          className="slider-image sm:translate-x-custom-small"
        />
        <div
          data-src={bg2}
          className="slider-image sm:translate-x-custom-small"
        />
      </AutoplaySlider>
    </Section>
  );
};

export default Hero;
