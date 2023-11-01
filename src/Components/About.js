import React from 'react';

function About() {
    return (
        <>
            <section className="container mt-4 pt-4 section" id="about">
    <h1 className="text-center"  id="navAbout" >About Me</h1>
    <div className="row mt-4">
      <div className="col-lg-6">
        <img src="images/about.jpeg" className="image_about" alt="" />
      </div>
      <div className="col-lg-6">
        <p>
          {" "}
          Designing and Coding Rules and Coding Rule sets Preparing Alert Workflows and Routing Policies Working on VTL files, managing back-end data with Oracle SQL Testing alert workflows with selenium java BDD framework.
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
        </>
    );
}

export default About;