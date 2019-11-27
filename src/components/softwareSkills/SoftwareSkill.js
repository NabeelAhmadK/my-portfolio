import React from "react";
import "./SoftwareSkill.css";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li className="software-skill-inline software-skill-html" name="html-5">
            <i className="fab fa-html5"></i>
          </li>
          <li className="software-skill-inline software-skill-css" name="css3">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="software-skill-inline software-skill-saas" name="sass">
            <i className="fab fa-sass"></i>
          </li>
          <li className="software-skill-inline software-skill-javascript" name="JavaScript">
            <i className="fab fa-js"></i>
          </li>
          <li className="software-skill-inline software-skill-react" name="reactjs">
            <i className="fab fa-react"></i>
          </li>
          <li className="software-skill-inline software-skill-node" name="nodejs">
            <i className="fab fa-node"></i>
          </li>
          <li className="software-skill-inline software-skill-android" name="android">
            <i className="fab fa-android"></i>
          </li>
          <li className="software-skill-inline software-skill-npm" name="npm">
            <i className="fab fa-npm"></i>
          </li>
          <li className="software-skill-inline software-skill-sql" name="sql-database">
            <i className="fas fa-database"></i>
          </li>
          <li className="software-skill-inline software-skill-angular " name="angular">
            <i className="fab fa-angular"></i>
          </li>
          <li className="software-skill-inline software-skill-docker" name="docker">
            <i className="fab fa-docker"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
