import React, { useState } from "react";
import "../assets/styles/header.css";
import "../assets/fonts/fonts.css";
import { Link } from "react-scroll";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul className={`navbarList ${menuOpen ? "active" : ""}`}>
          <li className="navLink">
            <Link
              to="home-main"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="navLink">
            <Link
                to="projects-main"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                onClick={toggleMenu}
                >Projects</Link>
          </li>
          <li className="navLink">
            <Link
                to="work-main"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                onClick={toggleMenu}
            >Work</Link>
          </li>
          <li className="navLink">
            <Link
                to="about-main"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                onClick={toggleMenu}
            >About Me</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
