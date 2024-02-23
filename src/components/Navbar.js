import React from "react";
import {
  FaHandHoldingMedical,
  FaHome,
  FaTimes,
  FaRegUser,
  FaBars,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { useRef } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const humMenu = useRef();
  const humClose = useRef();
  const ulContent = useRef();
  const ul = useRef();

  const handleClick = () => {
    humMenu.current.classList.toggle("hide");
    humClose.current.classList.toggle("show");
    ulContent.current.classList.toggle("blocks");
    ul.current.classList.toggle("ul-block");
    const newDiv = document.createElement("div");
    ul.current.appendChild(newDiv);
    newDiv.classList.add("back");
  };

  return (
    <>
      <div ref={ul} className="navbar-test">
        <ul onClick={handleClick}>
          <li ref={humMenu}>
            <FaBars />
          </li>
          <li ref={humClose}>
            <FaTimes />
          </li>
        </ul>
        <ul>
          <li>ESTATE-HEROS</li>
        </ul>
        <ul ref={ulContent}>
          <li>
            <NavLink className="link" to="/">
              <FaHome />
              &nbsp; HOME
            </NavLink>
          </li>
          <li>
            {" "}
            <label for="link">
              <NavLink className="link" to="/show-house-list">
                <FaBoxArchive /> &nbsp;BUY
              </NavLink>
            </label>
          </li>
          <li>
            {" "}
            <label for="link">
              <NavLink className="link" to="/show-home-list">
                <FaBoxArchive /> &nbsp;RENT
              </NavLink>
            </label>
          </li>
          <li>
            {" "}
            <label>
              <NavLink className="link" to="/services">
                <FaHandHoldingMedical />
                &nbsp;SERVICES
              </NavLink>
            </label>
          </li>
          <li>
            {" "}
            <label>
              <NavLink className="link" to="/about-us">
                <FaPhoneAlt />
                &nbsp;ABOUT US
              </NavLink>
            </label>
          </li>
          <li>
            {" "}
            <label>
              <NavLink className="link" to="/contact-us">
                <FaPhoneAlt />
                &nbsp;CONTACT US
              </NavLink>
            </label>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/sign-up" style={{ color: "black" }}>
              <FaRegUser />
            </NavLink>
          </li>
        </ul>
        {/* <main><Outlet /></main> */}
      </div>
    </>
  );
};

export default Navbar;
