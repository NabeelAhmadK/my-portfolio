import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span> Nabeel Ahmad <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li> */}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
