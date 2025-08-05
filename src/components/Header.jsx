import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [menuClick, setClick] = useState(false);

  const toggleNavClick = () => {
    setClick(!menuClick);
  };
  return (
    <header className="header">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex items-center justify-between py-3 md:py-6 bg-white">
        {/* desktop */}
        <nav className="flex max-w-[1000px] mx-auto flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-15">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>

            {/* nav links */}
            <ul className=" hidden md:flex flex-row gap-5 text-gray-500 text-lg font-bold">
              <li className="hover:text-gray-900">
                <a href="#">Features</a>
              </li>
              <li className="hover:text-gray-900">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:text-gray-900">
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex flex-row gap-8 items-center">
            <a
              href="#"
              className="text-gray-500 text-lg font-bold hover:text-gray-900"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-blue-400  py-1 px-3 text-white rounded-2xl"
            >
              Sign Up
            </a>
          </div>
        </nav>

        {/* mobile nav  */}
        {menuClick && (
          <nav className="absolute max-w-[375px] mt-[20rem] left-1/2 flex flex-col transform -translate-x-1/2 md:hidden bg-purple-950 w-[80%] text-center text-white rounded-lg gap-6 py-4">
            <ul className="flex flex-col gap-3 border-b-[0.1px] border-gray-500 py-4 mx-4">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 pb-4 mx-4">
              <li>
                <a href="#">Login</a>
              </li>
              <li className="bg-blue-400 py-2 rounded-3xl">
                <a href="#">Sign up</a>
              </li>
            </ul>
          </nav>
        )}

        {/* menu icons  */}
        <div
          className="font-bold text-3xl text-gray-500 md:hidden lg:hidden"
          onClick={toggleNavClick}
        >
          {menuClick ? (
            <button>
              <i className="fa-solid fa-close"></i>
            </button>
          ) : (
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
