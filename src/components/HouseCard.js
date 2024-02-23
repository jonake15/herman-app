import React from "react";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const HouseCard = ({ house }) => {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="houses"
        height={200}
      />
      <div className="desc">
        <h2>
          <Link to={`/show-house/${house._id}`}>{house.name}</Link>
        </h2>
        <h3>
          <FaBed />
          &nbsp; Rooms:
          {house.rooms}
        </h3>
        <h3>
          <FaDollarSign />
          &nbsp;Price:{house.price}
        </h3>
        <Link to={`/show-house/${house._id}`}>
          <button className="btnCard">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;
