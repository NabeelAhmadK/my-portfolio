import React from "react";
import "./Experience.css";
import Button from "../../components/button/Button";
import { StyleSheet, Text, View } from "react";

export default function Experience() {
  return (
    <div className="main" id="experience">
      <div className="experience-main-div">
        <div className="experience-text-div">
          <h1 className="experience-heading">Experience </h1>
          <div>
              <label className="mb-3 font-weight-bold d-flex align-items-center bg-light p-2">
                <i class="fa fa-1-5x fa-briefcase mr-2 text-muted"></i>
                  <span>Odine Solutions
                      <small className="form-text mt-0 text-muted">
                      <i className="fas fa-user"></i> Software Engineer &nbsp;
                      <i className="fas fa-calendar"></i> Aug 2018 - Present &nbsp;
                      <i className="fas fa-map-pin"></i> Lahore, Pakistan
                      </small>
                  </span>
              </label>
          </div>

          <div>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Development of REST API's in Node Js.
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Writing reusable, testable, and efficient code.
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Writing API Definitions in Swagger.
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Integration of Data Storage Solutions.
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Developing new products in core Javascript, Node.js
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Development of User-Interface with latest front-end technologies (Angular / React Js)
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Writing JavaScript, HTML and CSS.
            </p>
          </div>

          <div style={{marginTop: "20px"}}>
              <label className="mb-3 font-weight-bold d-flex align-items-center bg-light p-2">
                <i class="fa fa-1-5x fa-briefcase mr-2 text-muted"></i>
                  <span>Verscom Technologies
                      <small className="form-text mt-0 text-muted">
                      <i className="fas fa-user"></i> Interne Developer &nbsp;
                      <i className="fas fa-calendar"></i> July 2017 - Sept 2017 &nbsp;
                      <i className="fas fa-map-pin"></i> Lahore, Pakistan
                      </small>
                  </span>
              </label>
          </div>

          <div>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Developing and maintaining the front end and back end functionalities of websites
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Writing cross browser compliant HTML, CSS & JavaScript (Angular 4).
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Writing back-end Web APIs with NodeJS (Express).
            </p>
            <p className="subTitle experience-text" style={{fontSize: "15px", fontWeight: "bold"}}>
            ◾ Handling database (PostgreSQL) and Sequelize (ORM).
            </p>
          </div>
        </div>

        <div className="experience-image-div">
          <img
            alt="Saad Working"
            src={require("../../assests/images/developerActivity.svg")}
          ></img>
        </div>
      </div>
    </div>
  );
}
