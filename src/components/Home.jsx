import React from "react";
import "../assets/styles/home.css";
import "../assets/fonts/fonts.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import myImg from "../assets/images/IMG_7547.jpg"

function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: [
        "React Development",
        "JavaScript Programming",
        "Full Stack Development",
        "Web Design",
        "Cyber Security",
        "Open Source"
      ],
      typeSpeed: 60,
      backSpeed: 50,
      loop: true,
    };

    // Pass the ref to Typed.js
    const typed = new Typed(typedElement.current, options);

    // Cleanup function to destroy Typed.js instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className="main" id="home-main">

      <div className="container" id="home">
        <div className="textFields">
          <h2>Hey,</h2>
          <h2>I'm Atharv Kasar</h2>
          <h4>Full Stack Web Developer</h4>
          <h5>
            - I'm interested in <span id="typedText" ref={typedElement}></span>{" "}
          </h5>

          <div className="bottom">
            <a href="/resume.pdf" download>
                <button id="resumeBtn">Resume</button>
            </a>
        </div>

        </div>

        <div className="imageDiv">
            <img src={myImg} alt="img" draggable="false" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
