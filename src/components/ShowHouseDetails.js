import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { FaBed } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import Navbar from "./Navbar";

function ShowHouseDetails(props) {
  const [house, setHouse] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/house/${id}`)
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowHouseDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/house/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error form ShowHouseDetails_deleteClick");
      });
  };

  const HouseItem = (
    <div>
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
      {/* <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Location</td>
            <td>{house.name}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Room</td>
            <td>{house.rooms}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Price</td>
            <td>{house.price}</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );

  return (
    <div className="ShowHouseDetails">
      <Navbar />
      <div className="col-md-10 m-auto">
        <br /> <br />
        <Link
          to="/show-house-list"
          className="btn btn-outline-warning float-left"
        >
          Show House List
        </Link>
      </div>
      <br />

      <div className="col-md-10 m-auto">{HouseItem}</div>

      {/* <div className="col-md-6 m-auto">

            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={() => {
                onDeleteClick(house._id);
              }}
            >
              Delete House
            </button>
          </div> */}
      {/* <div className="col-md-6 m-auto">
            <Link
              to={`/edit-house/${house._id}`}
              className="btn btn-outline-info btn-lg btn-block"
            >
              Edit House
            </Link>
          </div> */}
    </div>
  );
}

export default ShowHouseDetails;
