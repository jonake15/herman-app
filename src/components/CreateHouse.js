import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateHouse = () => {
  const navigate = useNavigate();
  const [house, setHouse] = useState({
    name: "",
    isbn: "",
    price: "",
    rooms: "",
  });

  const onChange = (e) => {
    setHouse({ ...house, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/api/house", house)
      .then((res) => {
        setHouse({
          name: "",
          isbn: "",
          price: "",
          rooms: "",
        });

        navigate("/");
      })
      .catch((err) => {
        console.log("Error in Log book");
      });
  };

  return (
    <div>
      <Link to="/">Show House</Link>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={house.name}
          onChange={onChange}
          placeholder="Enter House Name"
        />
        <input
          type="text"
          name="isbn"
          value={house.isbn}
          onChange={onChange}
          placeholder="Enter ISBN "
        />
        <input
          type="number"
          name="price"
          value={house.price}
          onChange={onChange}
          placeholder="Enter price"
        />
        <input
          type="number"
          name="rooms"
          value={house.rooms}
          onChange={onChange}
          placeholder="Enter number of rooms"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateHouse;
