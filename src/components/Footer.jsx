import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <section className="py-10 bg-black">
      <div className="max-w-[1000px] mx-auto flex flex-row justify-between">
        <div>
          <img src={logo} alt="" className="filter brightness-0  invert" />
        </div>
        <div className="flex flex-row gap-[5rem]">
          <div className="flex flex-col gap-5">
            <span className="text-white">Features</span>
            <ul className="text-gray-400 flex flex-col gap-2">
              <li className="hover:text-cyan-500 cursor-pointer">
                Link Shortening
              </li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-white">Resources</span>
            <ul className="text-gray-400 flex flex-col gap-2">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-white">Company</span>
            <ul className="text-gray-400 flex flex-col gap-2">
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-row gap-5">
            <img
              src={facebook}
              alt="facebook-icon"
              className="w-5 h-5 hover:filter hover:color-red-200  hover:invert cursor-pointer"
            />
            <img src={twitter} alt="twitter-icon" className="w-5 h-5" />
            <img src={pinterest} alt="pinterest-icon" className="w-5 h-5" />
            <img src={instagram} alt="instagram-icon" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
