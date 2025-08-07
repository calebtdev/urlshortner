import React from "react";

// Functional component for the "Boost" section
const Boost = () => {
  return (
    // Section with purple background and vertical spacing
    <section className="mx-auto bg-purple-950  boost-bg flex flex-col gap-5">
      {/* Container to center content and apply padding */}
      <div className="max-w-[1000px] px-8 mx-auto py-[4rem] flex flex-col items-center flex flex-col gap-5">
        {/* Heading text */}
        <h1 className="text-white font-bold text-2xl">
          Boost your links today
        </h1>

        {/* Call-to-action button */}
        <button className="bg-cyan-400 hover:bg-cyan-200 font-bold text-xl text-white px-4 py-2 rounded-3xl cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Boost;
