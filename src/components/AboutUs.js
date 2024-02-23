import React, { useState } from "react";
import Navbar from "./Navbar";

const UserProfile = () => {
  const [name, SetName] = useState("Herman Namanya");
  const [position, SetPosition] = useState("Lead Realtor");

  return (
    <>
      {name}
      {position}
    </>
  );
};

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <UserProfile />
        <h1>This is the AboutUs Page</h1>
      </div>
    </>
  );
};

export default AboutUs;
