import React from "react";
import "./Projects.css";

import { NavLink } from "react-router-dom";

import Login from "../Assets/Log-in.jpg";
import Portfolio from "../Assets/Portfolio.png";
// import Dash from "../Assets/Dashboard.jpg";
// import Anal from "../Assets/Analytics.jpg";
// import Rept from "../Assets/Report.jpg";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects: React.FC = () => {
  return (
    <div className="Projects" id="Projects">
      <div className="greetings">
        <p>Explore My</p>
        <h1>Projects</h1>

        <div className="proj-sec">
          
          <div className="proj-div">
            <img src={Login} alt="BISU Alumni Tracer System" />
            <div className="info">
              <h2>BISU Alumni Tracer System</h2>
              <NavLink to="/Bisu" className="a">
                <FaArrowUpRightFromSquare className="icon" />
              </NavLink>
            </div>
          </div>

          <div className="proj-div">
            <img src={Portfolio} alt="First Portfolio" />
            <div className="info">
              <h2>First Portfolio</h2>
              <NavLink to="https://denzel-villadolid.vercel.app/" className="a">
                <FaArrowUpRightFromSquare className="icon" />
              </NavLink>
            </div>
          </div>

          <div className="proj-div">
            <div className="info">
              <h2>Upcoming</h2>
              {/* <NavLink to="/Profile" className="a">
                <FaArrowUpRightFromSquare className="icon" />
              </NavLink> */}
            </div>
          </div>

          <div className="proj-div">
            <div className="info">
              <h2>Upcoming</h2>
              {/* <NavLink to="/Profile" className="a">
                <FaArrowUpRightFromSquare className="icon" />
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;