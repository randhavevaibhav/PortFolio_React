import React from "react";

import "../Styles/Home.css";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Cred from "../Components/Cred";
import Experience from "./Experience";

function Home(props) {
  function setCollapseAttributes(identifier) {
    const element = document.getElementById(identifier);

    const toggleAtrribute = element.getAttribute("class");

    if (toggleAtrribute.includes("show")) {
      element.removeAttribute("class");

      element.setAttribute("class", "navbar-collapse collapse");
    }
  }
  return (
    <div>
      {/* navbar */}
      
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top navbarScroll">
     
         
      
        <div className="container">
            <Cred/>
          <a className="navbar-brand " id="brand" href="#">
            VAIBHAV
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            onClick={(event) => {
              setCollapseAttributes("navbarSupportedContent");
            }}
          >
            <Navbar />
          </div>
        </div>
      </nav>
      {/* main banner */}
      <div className="bgimage" id="home"></div>

      <section className="container-fluid section" id="headingText">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero_text">
            <div className="typeanimation">
              <h2 className="hero_title">Hi, it's me Vaibhav</h2>
            </div>

            <p className="hero_desc">
              I am a professional web developer from pune.
            </p>
          </div>
        </div>
      </section>
      {/* about section */}
      <About />
      <Experience/>
      {/* services section*/}

      <Services />
      {/* portfolio section*/}
      <Portfolio />
      {/* contact section*/}

      <Contact />
      {/* footer section*/}
      <Footer />
    </div>
  );
}

export default Home;
