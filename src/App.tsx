import React, { useRef } from "react";
import "./App.css";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar.tsx";
import Profile from "./Components/Pages/Profile.tsx";
import About from "./Components/Pages/About.tsx";
import Experience from "./Components/Pages/Experience.tsx";
import Projects from "./Components/Pages/Projects.tsx";
import Contact from "./Components/Pages/Contact.tsx";
import Bisu from "./Components/Pages/Bisu.tsx";
import Footer from "./Components/Footer.tsx";

// import ScrollReveal from "scrollreveal";

const App: React.FC = () => {
  // Ref for scrolling target
  const ref = useRef<HTMLDivElement | null>(null);

  // Framer Motion scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // // ScrollReveal initialization
  // ScrollReveal({
  //   reset: true,
  //   distance: "80px",
  //   duration: 2000,
  //   delay: 200,
  // });

  return (
    <Router>
      {/* motion.div allows using MotionValue safely */}
      <motion.div className="main" id="App" style={{ y }}>
        <div className="navbar">
          <Navbar />
        </div>

        <div className="contents" ref={ref}> 
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
      </motion.div>
    </Router>
  );
};

export default App;