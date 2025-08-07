import React from "react";
import shortenbg from "../assets/bg-shorten-mobile.svg";
import desshortenbg from "../assets/bg-shorten-desktop.svg";

const Shortlink = () => {
  return (
    <section className="flex items-center justify-center translate-y-[-5rem] max-w-[1000px] mx-auto">
      <div className="w-[90%] md:w-[90%]">
        <div
          className="bg-purple-950 py-[2rem] shorten-bg px-[1rem] md:px-[3rem] bg-no-repeat bg-center bg-cover w-full rounded-lg mb-[2rem]"
          //   style={{ backgroundImage: `url("${shortenbg}")` }}
          //   md:style={{ backgroundImage: `url("${desshortenbg}")` }}
        >
          <form className="flex flex-col md:flex-row md:gap-5">
            <div className="mb-5 w-full">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className="bg-white px-2 h-[45px] w-full rounded"
              />
              <p className="text-red-400 absolute">please add a link</p>
            </div>
            <button className="bg-blue-500 w-full md:w-[10rem] text-white h-[45px] rounded-xl">
              Shorten it!
            </button>
          </form>
        </div>

        {/* shorten link result  */}
        <div className="flex flex-col md:flex-row md:justify-between bg-white py-3 rounded-md md:items-center">
          <span className="mb-4 md:mb-0 border-b md:border-0 border-gray-300 px-4 pb-3 md:pb-0 ">
            google.com
          </span>

          <div className="flex flex-col md:flex-row md:items-center md:gap-0 gap-2 w-full md:w-auto">
            <a
              href="#"
              target="_blank"
              className="px-4 text-blue-500 font-bold"
            >
              result link
            </a>
            <div className="mx-4 md:block">
              <button className="bg-blue-500 text-white h-[40px] rounded-lg px-6 md:px-8 w-full md:w-auto">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shortlink;
