import React from "react";
import fellows from "../assets/fellows.png"
export const HeroSection = () => {
  return (
    <div className="px-[5%] pt-[15%] bg-green-100 bg-image hero">
      <div className="flex flex-col gap-7 justify-center items-center text-center relative pb-52" id="hero">
        <h1 className="text-4xl lg:text-6xl md:text-5xl tracking-wide uppercase drop-shadow-lg text-neutral-300">
          Pay For Houses Easily In <span className="text-green-700">Ni</span>ger
          <span className="text-green-700">ia</span> <br /> Today
        </h1>
        <p className="max-w-5xl mx-auto text-neutral-300">
        We are a group of individuals who aims at making house hunting stress-free for our users and make all parties involved in the process compensated.
        </p>
        <a
          href=""
          className="px-4 py-3 border border-nuetral-800 rounded-md  w-64 backdrop-blur-lg shadow-md text-neutral-300"
        >
          Create an account
        </a>
          <div className="max-w-7xl mx-auto bg-white  w-full rounded-lg shadow-sm  shadow-gray-500 absolute -bottom-12 z-1 ">
            <h2 className="flex items-center justify-center"><span className="pt-5 mr-12"><img src={fellows} alt="fellows" width={"150px"}/> </span><span className=" text-3xl">70%</span> of our users are glad we came into the market</h2>
          </div>
      </div>
    </div>
  );
};
