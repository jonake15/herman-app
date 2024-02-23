import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../index.css";

//Login Form
const Login = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleFormSubmission = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/api/users/login", {
        username,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.Login) {
          navigate("/admin-page");
        } else {
          navigate("/sign-up");
          alert("You are not yet registered");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleInput = () => {
    console.log("Input Changed");
  };
  return (
    <>
      <Navbar />
      <div className="loginCont">
        <div className="form">
          <h1>Login</h1>
          <form onSubmit={handleFormSubmission} className="formLogin">
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required="required"
            />
            {/* <input
            type="email"
            name="email"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Email"
          /> */}
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
            <Link to="/sign-up">Don't have an account?Sign Up</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
