import React, { useEffect, useRef } from "react";
import "./Profile.css";

import Pic1 from "../Assets/Don-1.jpg";
import { FaGithub } from "react-icons/fa6";
import Resume from "../Assets/Villadolid-Resume CV.pdf";
import ScrollReveal from "scrollreveal";
import Type from "typed.js";
// import { Link } from "react-scroll";

const Profile: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  const openResume = () => {
    window.open(Resume, "_blank");
  };

  const openGit = () => {
    window.open("https://github.com/", "_blank");
  };

  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".img-sec", { origin: "top" });
    sr.reveal(".text-sec", { origin: "bottom" });
  }, []);

  // Type.js
  useEffect(() => {
    if (!el.current) return;

    const typed = new Type(el.current, {
      strings: ["A Front-end Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="Profile" id="Profile">
      <div className="components">
        <div className="img-sec">
          <img src={Pic1} className="pic" alt="Denzel Villadolid" />
          <div className="circle"></div>
        </div>

        <div className="text-sec">
          <p className="hello" id="hello">
            Hello, I'm
          </p>
          <h1 className="name" id="name">
            Denzel Dax Darryl C. Villadolid
          </h1>
          <p className="front" id="front">
            <span ref={el}></span>
          </p>

          <div className="buttons-sec">
            <button className="dl-cv" onClick={openResume}>
              Download CV
            </button>

            <div className="git-sec">
              <FaGithub className="git-img" onClick={openGit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;