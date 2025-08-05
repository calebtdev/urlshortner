import React from "react";
import aboutImage from "../assets/illustration-working.svg";

const Hero = () => {
  return (
    <section className="bg-white max-w-[1440px] py-[3rem] pb-[10rem] md:pb-[10rem] mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 bg-white max-w-[1000px] px-6 mx-auto gap-5">
        <img
          src={aboutImage}
          className="order-1 md:order-2 pb-5 translate-x-[2rem] md:translate-x-[5rem]"
          alt=""
        />
        <div className="order-2 md:order-1 text-center md:text-start md:flex flex-col items-center md:items-start justify-enter">
          <h1 className="font-bold text-3xl md:text-[3rem] mb-1 md:mb-3">
            More than just shorter links
          </h1>
          <p className="text-gray-400 md:text-[1.5rem] mb-[1rem]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a
            href="#"
            className="bg-blue-400  py-1 md:py-3 px-3 md:px-6 text-white rounded-2xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
