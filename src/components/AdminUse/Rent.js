import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import HouseTable from "./HouseTable";

const Rent = () => {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/house")
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowHouseList");
      });
  }, []);

  const houseList =
    house.length === 0
      ? "there is no house record!"
      : house.map((house, k) => {
          return (
            <>
              <tr>
                <th>Name</th>
                <th>Room</th>
                <th>Price</th>
                <th>Add</th>
                <th>View</th>
                <th>Delete</th>
              </tr>
              <HouseTable house={house} key={k} />
            </>
          );
        });

  return <div>{houseList}</div>;
};

export default Rent;
