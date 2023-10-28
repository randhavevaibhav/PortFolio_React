import React from "react";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import "../Styles/Home.css";
import { Hidden } from "@material-ui/core";

function Home(props) {

  function setCollapseAttributes(identifier)
  {
    const element = document.getElementById(identifier);
    
    const toggleAtrribute = element.getAttribute("class");
    
    if(toggleAtrribute.includes("show"))
    {
      
      element.removeAttribute("class");
     
      element.setAttribute("class", "navbar-collapse collapse");
     

    }
   
   

  }
  return (
  <div>
<>
  {/* load javascript after loading all html content */}
  {/* navbar */}
  {/* https://getbootstrap.com/docs/5.2/components/navbar/ */}
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top navbarScroll">
    <div className="container">
      <a className="navbar-brand " href="#">
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
      <div className="collapse navbar-collapse" id="navbarSupportedContent" onClick={(event)=>{setCollapseAttributes("navbarSupportedContent")}}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active"  >
            <a className="nav-link " href="#home" 
           
        >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* main banner */}
  {/* https://getbootstrap.com/docs/5.2/layout/containers/ */}
  {/* https://getbootstrap.com/docs/5.2/layout/grid/ */}
  <section className="container-fluid section bgimage" id="home">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero_text">
        <h2 className="hero_title">Hi, it's me Vaibhav</h2>
        <p className="hero_desc">
          I am a professional react developer from pune.
        </p>
      </div>
    </div>
  </section>
  {/* about section */}
  <section className="container mt-4 pt-4 section" id="about">
    <h1 className="text-center">About Me</h1>
    <div className="row mt-4">
      <div className="col-lg-6">
        <img src="images/about.jpeg" className="image_about" alt="" />
      </div>
      <div className="col-lg-6">
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged
        </p>
        <div className="row mt-3">
          <div className="col-md-6">
            <ul>
              <li>Windsurfing</li>
              <li>Mountain-climbing</li>
              <li>Brain-surgery</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Creative-writing</li>
              <li>Gymnastics</li>
              <li>Landscape painting</li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <p>
            {" "}
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* services section*/}
  {/* https://getbootstrap.com/docs/5.2/components/card/#about */}
  <section className="container section" id="services">
    <h1 className="text-center">Services</h1>
    <div className="row">
      <div className="col-lg-4 mt-4">
        <div className="card servicesText">
          <div className="card-body">
            <i className="fas servicesIcon fa-clock" />
            <h4 className="card-title mt-3">Website Development</h4>
            <p className="card-text mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-4">
        <div className="card servicesText">
          <div className="card-body">
            <i className="fas servicesIcon fa-layer-group" />
            <h4 className="card-title mt-3">Website Design</h4>
            <p className="card-text mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-4">
        <div className="card servicesText">
          <div className="card-body">
            <i className="far servicesIcon fa-check-circle" />
            <h4 className="card-title mt-3">Website Deployment</h4>
            <p className="card-text mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 mt-4">
        <div className="card servicesText">
          <div className="card-body">
            <i className="fas servicesIcon fa-search" />
            <h4 className="card-title mt-3">SEO</h4>
            <p className="card-text mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-4">
        <div className="card servicesText">
          <div className="card-body">
            <i className="fas servicesIcon fa-shield-alt" />
            <h4 className="card-title mt-3">DevOps</h4>
            <p className="card-text mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-4">
        <div className="card servicesText">
          <div className="card-body">
            <i className="fas servicesIcon fa-wrench" />
            <h4 className="card-title mt-3">QA</h4>
            <p className="card-text mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* portfolio section*/}
  <section className="section" id="portfolio">
    <div className="container mt-3">
      <h1 className="text-center">Portfolio</h1>
      <div className="row">
        <div className="col-lg-4 mt-4">
          <div className="card">
            <img
              className="card-img-top"
              src="images/portfolioImage1.jpeg"
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">YouTube Clone</h4>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-center">
                <a href="#" className="btn btn-success">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card">
            <img
              className="card-img-top"
              src="images/portfolioImage4.jpeg"
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">Quiz App</h4>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-center">
                <a href="#" className="btn btn-success">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card">
            <img
              className="card-img-top"
              src="images/portfolioImage3.jpeg"
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">Product Landing Page</h4>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-center">
                <a href="#" className="btn btn-success">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-4 mt-4">
          <div className="card">
            <img
              className="card-img-top"
              src="images/portfolioImage4.jpeg"
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">Messaging Service</h4>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-center">
                <a href="#" className="btn btn-success">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card">
            <img
              className="card-img-top"
              src="images/portfolioImage1.jpeg"
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">Twitter Clone</h4>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-center">
                <a href="#" className="btn btn-success">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="card">
            <img
              className="card-img-top"
              src="images/portfolioImage4.jpeg"
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">Blog App</h4>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-center">
                <a href="#" className="btn btn-success">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact section*/}
  {/* https://getbootstrap.com/docs/5.2/forms/overview */}
  <section className="container mt-3 section" id="contact">
    <h1 className="text-center">Contact Me</h1>
    <div className="row mt-4">
      <div className="col-lg-6">
        {/* to edit google map go to https://www.embed-map.com type your location, generate html code and copy the html  */}
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            color: "red",
            width: 500,
            height: 500
          }}
        >
          <div
            id="embedmap-canvas"
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
          >
            <iframe
              style={{ height: "100%", width: "100%", border: 0 }}
              frameBorder={0}
              src="https://www.google.com/maps/embed/v1/place?q=Pune&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
          <a
            className="googlemaps-html"
            href="https://www.embed-map.com"
            id="get-data-forembedmap"
          >
            https://www.embed-map.com
          </a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "#embedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}\n                  "
            }}
          />
        </div>
      </div>
      <div className="col-lg-6">
        {/* form fields */}
        <form id="form" method="post">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control form-control-lg"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="form-control mt-3"
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-control mt-3"
            placeholder="Subject"
          />
          <div className="mb-3 mt-3">
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={5}
              placeholder="Project Details"
              defaultValue={""}
            />
          </div>
          <button type="submit" name="submit" className="btn btn-success mt-3">
            Contact Me
          </button>
        </form>
      </div>
    </div>
  </section>
  {/* footer section*/}
  <footer className="container-fluid footer" id="footer">
    {/* social media icons */}
    <div className="social-icons mt-4">
      <a href="https://www.facebook.com/" target="_blank">
        <i className="fab fa-facebook" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <i className="fab fa-instagram" />
      </a>
      <a href="https://www.twitter.com/" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <i className="fab fa-linkedin" />
      </a>
      <a href="https://www.twitch.tv/" target="_blank">
        <i className="fab fa-twitch" />
      </a>
    </div>
  </footer>
</>




  </div>
  );
}

export default Home;
