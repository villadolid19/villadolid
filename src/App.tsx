import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar.tsx";
import Profile from "./Components/Pages/Profile.tsx";
import About from "./Components/Pages/About.tsx";
import Experience from "./Components/Pages/Experience.tsx";
import Projects from "./Components/Pages/Projects.tsx";
import Contact from "./Components/Pages/Contact.tsx";
import Bisu from "./Components/Pages/Bisu.tsx";
import Footer from "./Components/Footer.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div className="main" id="App">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="contents"> 
          <Routes>
            <Route path="/" element={<Navigate to="/Profile" />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Bisu" element={<Bisu />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;