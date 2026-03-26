import React, { useState } from "react";
import "./Navbar.css";
import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-content">
      <NavLink to="/Profile" className="logo">
        DenzeL
      </NavLink>

      <div
        className={`items ${isMenuOpen ? "show" : "hide"}`}
        onClick={closeMenu}
      >
        <NavLink
          to="/Profile"
          className={({ isActive }) => (isActive ? "a active" : "a")}
          onClick={closeMenu}
        >
          Profile
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "a active" : "a")}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/Experience"
          className={({ isActive }) => (isActive ? "a active" : "a")}
          onClick={closeMenu}
        >
          Experience
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) => (isActive ? "a active" : "a")}
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? "a active" : "a")}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>

      <div className="buttons">
        <div
          className={`button-menu ${isMenuOpen ? "hide" : "show"}`}
          onClick={toggleMenu}
        >
          <div className="menu-row">
            <div className="menu-col"></div>
            <div className="menu-col"></div>
          </div>
          <div className="menu-row">
            <div className="menu-col"></div>
            <div className="menu-col"></div>
          </div>
        </div>

        <LiaTimesSolid
          className={`close-icon ${isMenuOpen ? "show" : "hide"}`}
          onClick={toggleMenu}
          size={38}
        />
      </div>
    </nav>
  );
};

export default Navbar;