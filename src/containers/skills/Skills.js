import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img alt="Saad Working" src={require("../../assests/images/developerActivity.svg")}></img>
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">What i do </h1>
          <p className="subTitle skills-text-subtitle">FULL STACK DEVELOPER WHIZ WHO WANT TO EXPLORE EVERY TECH STACK </p>
          <SoftwareSkill />
          <div>
            <p className="subTitle skills-text">✔️ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
            <p className="subTitle skills-text">✔️ Writing reusable, testable, and efficient code.</p>
            <p className="subTitle skills-text">✔️ Writing back-End REST API with NodeJs (Express).</p>
            <p className="subTitle skills-text">✔️ Development of User-Interface with latest Front-End technologies (Angular 7/8) / React Js</p>
            <p className="subTitle skills-text">✔️ Writing API Definitions in Swagger.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
