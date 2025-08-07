import React from "react";

const Boost = () => {
  return (
    <section className="mx-auto bg-purple-950  boost-bg flex flex-col gap-5">
      <div className="max-w-[1000px] px-8 mx-auto py-[4rem] flex flex-col items-center flex flex-col gap-5">
        <h1 className="text-white font-bold text-2xl">
          Boost your links today
        </h1>
        <button className="bg-cyan-400 hover:bg-cyan-200 font-bold text-xl text-white px-4 py-2 rounded-3xl cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Boost;
