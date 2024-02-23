import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="container">
        <div class="row">
          <div className="col-sm-3 card">
            <Link to="/rent">Rent</Link>
          </div>
          <div className="col-sm-3 card py-auto">One of three columns</div>
          <div className="col-sm-3 card">One of three columns</div>
          <div className="col-sm-3 card">
            One of three columns
            <button className="btn btn-primary">Hello</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
