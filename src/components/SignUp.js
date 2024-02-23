import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../index.css";

//Login Form
const SignUp = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleFormSubmission = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/api/users/register", {
        username,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log("Cannot connect"));
  };

  const handleInput = () => {
    console.log("Input Changed");
  };
  return (
    <>
      <Navbar />
      <div className="loginCont">
        <div className="form">
          <h1>Sign Up</h1>
          <form onSubmit={handleFormSubmission} className="formLogin">
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required="required"
            />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <span>
              <a href="/">Show Password</a>
            </span>
            <button type="submit">Submit</button>
          </form>
          <span>
            <Link to="/login">Already have an account?Login</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
