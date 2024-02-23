import React from "react";
import { Link } from "react-router-dom";

//Child component(props.objName)
const House = ({ house }) => {
  return (
    <>
      <div className="houseContainer">
        <div className="imgContainer">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="House in bugolo"
          />
        </div>
        <div className="houseContent">
          <h2>
            <Link to={`/show-house/${house._id}`}>{house.name}</Link>
          </h2>
          <h3>{house.name}</h3>
          {/* <h2>{props.name}</h2>
          <div className="flexbox">
            <p>Price: {props.price}</p>
            <p>
              <i class="fa fa-bed"></i> Rooms: {props.rooms}
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default House;
