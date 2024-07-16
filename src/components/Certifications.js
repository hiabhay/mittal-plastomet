import React from "react";
import Section from "./Section";
import apollo from "../assets/images/apollo.png";
import bsi from "../assets/images/bsi.png";
import isi from "../assets/images/isi.png";
import msme from "../assets/images/msme.png";
import mpm from "../assets/images/mpm.png";

const Certifications = () => {
  return (
    <Section>
      <div className="ml-12 mt-12 sm max-w-full sm:ml-4 sm:mt-6 sm:w-11/12">
        <div className="font-bold text-2xl sm:text-lg w-auto">CERTIFICATIONS</div>
        <div className="font-semibold text-5xl sm:text-4xl mt-6">
          Certifications upholding our
        </div>
        <div className="font-semibold text-5xl sm:text-4xl text-cyan-600 mt-2">
          quality standards
        </div>
        <div className="w-[700px] sm:w-full font-semibold text-lg sm:text-sm text-neutral-500 text-justify mt-6">
          The certifications we hold are crucial for maintaining our high
          standards of quality. These validate our commitment to excellence and
          ensure that our processes and products consistently meet or exceed
          industry benchmarks.
        </div>
      </div>
      <div className="ml-[26%] sm:ml-0 sm:left-6 sm:w-11/12 flex w-fit mt-12 relative left-20 sm:flex-col">
        <div className="flex ml-24 sm:flex sm:ml-0 sm:justify-between">
          <div className="w-[145px] h-[130px] border">
            <img className="mt-6 ml-4 w-[100px] h-auto" src={apollo}></img>
            <div className="text-sm mt-6 ml-8">STRUCTURE</div>
          </div>
          <div className="w-[130px] h-[130px] border ml-6 sm:ml-0 sm:mr-6">
            <img className="mt-6 ml-7 w-[80px] h-auto" src={bsi}></img>
            <div className="text-sm mt-3 ml-16 sm:ml-12 sm:pl-2">BIS</div>
          </div>
        </div>
        <div className="flex sm:justify-between sm:mt-10">
          <div className="w-[130px] h-[130px] border ml-4 sm:ml-0 sm:w-[145px]">
            <img className="mt-6 ml-4 w-[100px] h-auto" src={isi}></img>
            <div className="text-sm mt-1 ml-12 pl-2">ISI</div>
          </div>
          <div className="w-[130px] h-[130px] border ml-4 sm:ml-0 sm:mr-6">
            <img className="mt-6 ml-5" src={msme}></img>
            <div className="text-sm mt-2 ml-12">MSME</div>
          </div>
        </div>
        <div className="w-[130px] h-[130px] border ml-4 sm:mt-10 sm:w-[145px] sm:ml-0">
          <img className="mt-6 ml-10" src={mpm}></img>
          <div className="text-sm mt-2 ml-8">MPMKVVCL</div>
        </div>
      </div>
      <div className="flex justify-center mt-12 sm:hidden">
        <div className="w-[1200px] h-[250px] flex flex-col items-center bg-gradient-to-r from-indigo-900 to-cyan-600 rounded-2xl">
          <div className="text-white text-lg font-semibold mt-6">
            CONTACT US AT
          </div>
          <div className="text-white text-4xl font-semibold mt-2">
            marketing@mplindia.com
          </div>
          <div className="text-white mt-7 text-md leading-snug">
            Guaranteed reduction in your electricity bill!
          </div>
          <div className="w-[800px] text-white mt-3 text-md font-thin text-center">
            We are an army of passionate designers and engineers who understand
            the need of being with trends when it comes solar solutions that
            helps users craft colorful success stories, and that too, under an
            effective budget!
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
