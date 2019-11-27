import React, { useState, useEffect } from "react";
import "./Project.css";
import Button from "../../components/button/Button";

export default function Projects() {

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Projects</h1>
      <div className="repo-cards-div-main">

      </div>
      <Button text={"More Projects"} className="project-button" href="https://github.com/saadpasta" newTab={true} />
    </div>
  );
}
