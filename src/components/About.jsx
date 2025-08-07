import React from "react";
import aboutImage from "../assets/illustration-working.svg";

// Hero component represents the top section of the page with a heading, description, and CTA button
const Hero = () => {
  return (
    // Main section with white background, responsive padding, and maximum width
    <section className="bg-white max-w-[1440px] py-[3rem] md:px-12 pb-[10rem] md:pb-[8rem] mx-auto overflow-hidden">
      {/* Grid container for layout with two columns on medium screens and above */}
      <div className="grid md:grid-cols-2 bg-white max-w-[1000px] px-6 items-center md:px-0 mx-auto gap-5">
        {/* Illustration image, ordered second on larger screens for layout purposes */}
        <img
          src={aboutImage}
          className="order-1 md:order-2 pb-5 translate-x-[2rem] md:translate-x-[5rem]"
          alt=""
        />

        {/* Text content block - title, description, and button */}
        <div className="order-2 md:order-1 text-center md:text-start md:flex flex-col items-center md:items-start justify-center">
          {/* Main heading */}
          <h1 className="font-bold text-3xl md:text-[3rem] mb-1 md:mb-3">
            More than just shorter links
          </h1>

          {/* Supporting paragraph */}
          <p className="text-gray-400 md:text-[1rem] mb-[3rem]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          {/* Call-to-action button */}
          <a
            href="#"
            className="bg-cyan-400 hover:bg-cyan-200 py-3 md:py-3 px-3 md:px-6 text-white rounded-2xl md:rounded-4xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
