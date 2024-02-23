import React, { useState, useEffect, useMemo } from "react";
import FooterSection from "./FooterSection";
import axios from "axios";
import { Link } from "react-router-dom";
import HouseCard from "./HouseCard";
import Navbar from "./Navbar";
import "../index.css";

function ShowHouseList() {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/home")
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
      : house.map((home, k) => <HouseCard house={home} key={k} />);

  return (
    <div className="showhouseCont">
      <Navbar />
      <ul className="breadcrumbs">
        <li>
          <Link>Home/</Link>
        </li>
        <li>
          <Link>Rent</Link>
        </li>
      </ul>
      <div className="houselist">{houseList}</div>
      {/* <FooterSection /> */}
    </div>
  );
}

export default ShowHouseList;
