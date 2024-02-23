import React from "react";
import { utils } from "../../data";
import House from "./House";
import Navbar from "../Navbar";
import HouseList from "./HouseList";
import FooterSection from "../FooterSection";

const Houses = () => {
  const { image, name, price, rooms } = utils;
  return (
    <>
      <Navbar />
      <HouseList />
      <FooterSection />
    </>
  );
};

export default Houses;
