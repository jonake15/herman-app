import React from "react";
import { utils } from "../../dataHome";
import House from "./House";
import Navbar from "../Navbar";
import abc from "../images/4115337.jpg";

const HomeHouseList = () => {
  const { image, name, price, rooms } = utils;
  return (
    <>
      <div className="houselist">
        {utils.map((data) => {
          const { image, name, price, rooms } = data; //destructuring
          return (
            <House image={image} name={name} price={price} rooms={rooms} />
          );
        })}
      </div>
    </>
  );
};

export default HomeHouseList;
