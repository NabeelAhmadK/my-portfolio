import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Experience />
        {/* <StartupProject /> */}
        {/* <Achievement /> */}
        {/* <Blogs /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}
