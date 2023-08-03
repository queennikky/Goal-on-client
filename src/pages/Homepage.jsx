import React from "react";
import bro from "../assets/bro.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container d-block d-lg-flex justify-content-lg-between align-items-lg-center gap-2 mt-5 pb-4">
      <div className="text-center">
        <img className="img-logo" src={bro} alt="main image" />
      </div>
      <div className="mt-3 mt-md-0 img-text">
        <h2 className="fw-bold">
          Improve Productivity By Managing{" "}
          <span className="blue-text">Your Goals</span>{" "}
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur. Ut nisl nisl cursus massa sed.
          Turpis ac aliquet lacinia justo turpis amet at arcu. Diam vulputate
          suspendisse aliquam enim sagittis cursiodio ultrices. Condimentum
          lacus nunc rhoncus massa. Tortorstiu ultricies neque aliquam sit non.
          Diam vehicula dignissimepei pellentesque eros vitae. Viverra in vitae
          nunc lorem eget lciou imperdiet tortor. Ac mauris vel non amet eget
          egestas inoriou pellentesque commodo amet. Facilisi sed ut nisi
          pellentesque diam egestas et turpis donor amet.
        </p>
        <div className="d-flex align-items-center gap-2">
          <Link to="/all" className="text-decoration-none">
          <button className="blue-bg btn1 text-white p-2 d-block mt-2">
            Manage Goals
          </button>
        </Link>
          <Link to="/create" className="text-decoration-none blue-text fw-bold">
            <button className="blue-bg btn1 text-white p-2 d-block mt-2">

          + New Goal
            </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
