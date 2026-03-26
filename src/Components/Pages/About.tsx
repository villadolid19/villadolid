import React, { useEffect } from "react";
import "./About.css";

import Pic1 from "../Assets/Don-2.jpg";
import { GiAchievement } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

import ScrollReveal from "scrollreveal";
// import { FaFileCircleCheck } from "react-icons/fa6";
// import { FcEditImage, FcFeedback } from "react-icons/fc";

const About: React.FC = () => {
  // Use useEffect to avoid running ScrollReveal on every render
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".img", { origin: "top" });
    sr.reveal(".about-sec", { origin: "bottom" });
  }, []);

  return (
    <section className="About" id="About">
      <div className="greetings">
        <p>Get To Know More</p>
        <h1>About Me</h1>
      </div>

      <div className="content">
        <img src={Pic1} className="img" alt="Profile" />

        <div className="about-sec">
          <div className="exp-edu">
            <div className="item">
              <GiAchievement className="icon" />
              <h3>Achieved</h3>
              <p>5 months Self-study</p>
              <ul>
                <li>Front-end Development</li>
              </ul>
              <p>2 months Self-study</p>
              <ul>
                <li>Back-end Development</li>
              </ul>
            </div>

            <div className="item">
              <FaGraduationCap className="icon" />
              <h3>Education</h3>
              <p>
                Bachelors Degree
                <br />
                Bachelor of Science in Computer Science
              </p>
            </div>
          </div>

          <div className="seeking-sec">
            <p>
              Seeking a challenging position where I can leverage my skills to
              develop innovative software solutions and contribute to the growth
              and success of the organization. I studied both frontend and
              backend development during my last year as a student. Currently, I
              code as a hobby while eagerly waiting for a job opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;