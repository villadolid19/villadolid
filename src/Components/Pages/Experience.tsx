import React from "react";

import "./Experience.css";

// Front-end
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

// Framework
import { FaReact } from "react-icons/fa";

// Back-end
import { FaPhp } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";

const Experience: React.FC = () => {

  // useEffect(() => {
  //   const sr = ScrollReveal({
  //     reset: true,
  //     distance: "80px",
  //     duration: 2000,
  //     delay: 200,
  //   });

  //   sr.reveal(".exp-sec", { origin: "left" });
  //   sr.reveal(".tech-skills", { origin: "right" });
  // }, []);


  return (
    <section className="Experience" id="Experience">
      <div className="greetings">
        <p>Explore My</p>
        <h1>Experience</h1>
      </div>

      <div className="exp-sec">
        <div className="component">
          <h1>Front-End Development</h1>

          <div className="icon-text">
            <div className="icon">
              <ImHtmlFive2 className="html" />
            </div>
            <div className="text">
              <h3>HTML</h3>
              <p>Intermediate</p>
            </div>
          </div>

          <div className="icon-text">
            <div className="icon">
              <FaCss3 className="css" />
            </div>
            <div className="text">
              <h3>CSS</h3>
              <p>Basic</p>
            </div>
          </div>

          <div className="icon-text">
            <div className="icon">
              <SiTailwindcss className="tcss" />
            </div>
            <div className="text">
              <h3>Tailwind CSS</h3>
              <p>Intermediate</p>
            </div>
          </div>

          <div className="icon-text">
            <div className="icon">
              <TbBrandJavascript className="js" />
            </div>
            <div className="text">
              <h3>JavaScript</h3>
              <p>Basic</p>
            </div>
          </div>
        </div>

        <div className="component">
          <h1>Framework</h1>

          <div className="icon-text">
            <div className="icon">
              <FaReact className="react" />
            </div>
            <div className="text">
              <h3>React.js</h3>
              <p>Basic</p>
            </div>
          </div>
        </div>

        <div className="component">
          <h1>Back-End Development</h1>

          <div className="icon-text">
            <div className="icon">
              <FaPhp className="php" />
            </div>
            <div className="text">
              <h3>PHP</h3>
              <p>Basic</p>
            </div>
          </div>

          <div className="icon-text">
            <div className="icon">
              <GrMysql className="sql" />
            </div>
            <div className="text">
              <h3>MySQL</h3>
              <p>Basic</p>
            </div>
          </div>

          <div className="icon-text">
            <div className="icon">
              <FaDatabase className="db" />
            </div>
            <div className="text">
              <h3>Database</h3>
              <p>Basic</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-skills">
        <div className="skills">
          <div className="div-sec">
            <h1>Other Related Skills:</h1>
            <ul>
              <li>Objective Oriented Programming (OOP)</li>
              <li>Structured Query Language (SQL)</li>
              <li>C Language</li>
              <li>Git</li>
            </ul>
          </div>

          <div className="div-sec">
            <h1>Microsoft Office:</h1>
            <ul>
              <li>Word</li>
              <li>PowerPoint</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;