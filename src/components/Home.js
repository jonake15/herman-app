import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState();
  const container = useRef();
  const navigate = useNavigate();
  // console.log(heading);
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/users")
      .then((res) => {
        if (res.data.valid) {
          setName(res.data.username);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // const changeColor = () => {
  //   heading.current.style.color = "blue";
  // };

  return (
    <div ref={container} className="universalCont">
      <Navbar />
      <div className="content-1">
        <div className="heroContainer">
          <button>Rent</button>
          <button>{name}</button>

          <form>
            <h2>Select house to your prefernce</h2>

            <select id="cars" name="cars">
              <option value="location">Location</option>
              <option value="bugolobi">Bugolobi</option>
              <option value="buziga">Buziga</option>
              <option value="bunga">Bunga</option>
              <option value="naguru">Naguru</option>
            </select>
          </form>
        </div>
      </div>
      {/* <HomeHouseList /> */}
      <FooterSection />
    </div>
  );
};
export default Home;
