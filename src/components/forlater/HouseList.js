import React from "react";
import { useState, useEffect } from "react";
import { utils } from "../../data";
import House from "./House";
import axios from "axios";

const HouseList = () => {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/house")
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowHouse");
      });
  }, []);

  const houseList =
    house.length === 0
      ? "No houses"
      : house.map((house, k) => <House house={house} key={k} />);
  const { image, name, price, rooms } = utils;
  return (
    <>
      <div>{houseList}</div>
      {/* <div className="houselist">
        {utils.map((data) => {
          const { image, name, price, rooms } = data; //destructuring
          return (
            <House image={image} name={name} price={price} rooms={rooms} />
          );
        })}
      </div> */}
    </>
  );
};

export default HouseList;
