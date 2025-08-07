import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Shortlink from "../components/Shortlink";
import AdvanceStat from "../components/AdvanceStat";
import Boost from "../components/Boost";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Shortlink />
      <AdvanceStat />
      <Boost />
    </>
  );
};

export default Home;
