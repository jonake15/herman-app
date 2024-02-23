import React from "react";
import { Link } from "react-router-dom";

const HouseTable = ({ house }) => {
  return (
    <div className="desc">
      <table>
        <tr>
          <th>
            <Link to={`/show-house/${house._id}`}>{house.name}</Link>
          </th>
          <th> {house.rooms}</th>
          <th>{house.price}</th>
          <th>
            <Link to={`/show-house/${house._id}`}>add</Link>
          </th>
          <th>
            {" "}
            <Link to={`/show-house/${house._id}`}>view</Link>
          </th>
          <th>
            <Link to={`/show-house/${house._id}`}>delete</Link>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default HouseTable;
