import React from "react";

import "../Styles/Home.css";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Experience from "./Experience";
import { useState} from "react";

function Home(props) {
  
 



  
  return (
    <div>
     
       <Navbar />
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
      <Experience />
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
