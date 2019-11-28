import React, { useState, useEffect, Component } from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import { tsConstructorType } from "@babel/types";

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      expandRAAS: false,
      expandRMA: false,
      expandPOS: false,
      expandFYP: false
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore(expand) {
    if (expand == "expandRAAS")
      !this.state[expand]
        ? this.setState({ expandRAAS: true })
        : this.setState({ expandRAAS: false });
    else if (expand == "expandRMA")
      !this.state[expand]
        ? this.setState({ expandRMA: true })
        : this.setState({ expandRMA: false });
    else if (expand == "expandPOS")
      !this.state[expand]
        ? this.setState({ expandPOS: true })
        : this.setState({ expandPOS: false });
    else
      !this.state[expand]
        ? this.setState({ expandFYP: true })
        : this.setState({ expandFYP: false });
  }

  render() {
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Projects</h1>
        <div className="row text-center mt-2 w-100 justify-content-center">
          <div className="card card-custom">
            <div className="text-center m-2">
              <img
                src={require("../../assests/images/logo.png")}
                className="card-img-center w-25"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">RAAS</h5>
              <p className="card-text">
                RAAS aims to become the most advanced automated end-to-end test
                system available on the market that surpasses
                {this.state.expandRAAS ? (
                  <span>
                    any passive monitoring system by enabling network operators
                    to perform preventive and permanent Quality of Service and
                    Quality of Experience Assurance. One of the main features
                    which is Call Generation, CLI Testing, Call Termination,
                    Fraud Detection, Voice Quality.
                  </span>
                ) : (
                  <span></span>
                )}
                <button
                  className="btn btn-sm btn-link"
                  onClick={() => this.showMore("expandRAAS")}
                >
                  {!this.state.expandRAAS ? (
                    <span>View More</span>
                  ) : (
                    <span>View Less</span>
                  )}
                </button>
              </p>
              <a
                href="http://ui-rass.odine.net/"
                className="btn btn-primary btn-sm mt-3"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="card card-custom">
            <div className="text-center m-2">
              <img
                src={require("../../assests/images/rm-s-logo.png")}
                className="card-img-top w-25"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">RingMi Platform</h5>
              <p className="card-text">
                This portal gives facility to platform owner to manage its
                business partner. He can add distributor,{" "}
                {this.state.expandRMA ? (
                  <span>
                    {" "}
                    resellers and agents. Every distributor can add his own
                    resellers and reseller can add his agents. Profit is being
                    distributed to all when the Pin Products or Online Products
                    are sell. Every user can see his activity reports. This
                    Admin Portal manages the Easy Load Portal. Tools &
                    Technologies : Node JS, Redis, Angular 7, JavaScript,
                    PostgreSQL, Docker, pm2.{" "}
                  </span>
                ) : (
                  <span></span>
                )}
                <button
                  className="btn btn-sm btn-link"
                  onClick={() => this.showMore("expandRMA")}
                >
                  {!this.state.expandRMA ? (
                    <span>View More</span>
                  ) : (
                    <span>View Less</span>
                  )}
                </button>
              </p>
              <a
                href="https://service.ringmi.it/admin/login"
                className="btn btn-primary btn-sm mt-3"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="card card-custom">
            <div className="text-center m-2">
              <img
                src={require("../../assests/images/pos-logo.png")}
                className="card-img-top w-25"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Easy Load</h5>
              <p className="card-text">
                Easy Load portal is used by Agents to sell RingMI products,
                International Balance (Topup), and
                {this.state.expandPOS ? (
                  <span>
                    Italy top-up and pin products (Pin Vouchers). Different
                    suppliers API (i.e. Transfer-to, Ding, Prepay Nation etc.)
                    is integrated to send Topup to any International network.
                    Technologies : Node JS, Redis, Angular 6, JavaScript, LCR
                    Based Routing, Preferred Routing, PostgreSQL.{" "}
                  </span>
                ) : (
                  <span></span>
                )}
                <button
                  className="btn btn-sm btn-link"
                  onClick={() => this.showMore("expandPOS")}
                >
                  {!this.state.expandPOS ? (
                    <span>View More</span>
                  ) : (
                    <span>View Less</span>
                  )}
                </button>
              </p>
              <a
                href="https://service.ringmi.it/login"
                className="btn btn-primary btn-sm mt-3"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="card card-custom">
            <div className="text-center m-2">
              {/* <img
                src={require("../../assests/images/manOnTable.svg")}
                className="card-img-top w-25"
                alt="..."
              /> */}
            </div>
            <div className="card-body">
              <h5 className="card-title">Auto Rescue Assistance (FYP)</h5>
              <p className="card-text">
                Auto Rescue Assistance (Final Year Project), Developed an
                automatic accident detection and
                {this.state.expandFYP ? (
                  <span>
                    rescue Android App which will : • Detect the accident
                    according to given parameters, it will then notify the
                    accident location with the victim’s information to the
                    available nearby ambulance drivers. • Send a user’s location
                    as a quick message to emergency contacts to intimate the
                    victims. • Show the nearby emergency spots (i.e. Hospitals
                    and Police Station) on integrated map. Project is developed
                    using Android Technologies (Java, XML, SQLite) , PostgreSQL
                    is used as Data Base, Node JS is used as Server Side or REST
                    API. Admin Panel of this Application is developed using
                    Angular 4.
                  </span>
                ) : (
                  <span></span>
                )}
                <button
                  className="btn btn-sm btn-link"
                  onClick={() => this.showMore("expandFYP")}
                >
                  {!this.state.expandFYP ? (
                    <span>View More</span>
                  ) : (
                    <span>View Less</span>
                  )}
                </button>
              </p>
              <a href="#" className="btn btn-primary btn-sm mt-3 bottom">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
