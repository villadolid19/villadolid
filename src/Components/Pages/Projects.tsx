import React from "react";
import "./Projects.css";

import { NavLink } from "react-router-dom";

import Login from "../Assets/Log-in.jpg";
import candijay from "../Assets/candijay.png"

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
            <img src={candijay} alt="Candijay landing Page" />
            <div className="info">
              <h2>Candijay Test</h2>
              <NavLink to="https://candijay-test.vercel.app/" className="a">
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