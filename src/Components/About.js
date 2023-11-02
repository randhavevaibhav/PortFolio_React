import React from 'react';

function About() {
    return (
        <>
            <section className="container mt-4 pt-4 section" id="about">
    <h1 className="text-center"  id="navAbout" >About Me</h1>
    <div className="row mt-4">
      <div className="col-lg-6">
      <dotlottie-player
      className="lottie-image-01"
  src="https://lottie.host/8b1638b2-dd01-4968-b6d9-020659eacf86/K7eqADpRyh.lottie"
  background="transparent"
  speed={1}
  style={{ 
  }}
  loop=""
  autoPlay=""
/>

      </div>
      <div className="col-lg-6">
        <p>
          {" "}
          Hello, I’m Vaibhav, a web developer.

I’ve been working as a web developer for a few years now, and I’m passionate about everything that goes into making websites work well and look beautiful. The web is my passion because it’s where I can find the most exciting projects to work on. It’s also where I get to express my creativity in ways that are hard to find elsewhere.
        </p>
        
        <div className="row mt-3">
          <div className="col-md-6">
          <p>Programming languages known :</p>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Oracle SQL and PL/SQL</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col-md-6">
          <p>Frameworks/libraries:</p>
            <ul>
              <li>BDD Selenium Java (for automation testing)</li>
              <li>React Js</li>
              <li>Jersey (for REST API)</li>
              <li>Pygame</li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <p>
            {" "}
            My background in programming has given me an understanding of how the software works and why it works the way it does. This allows me to ensure your project is running smoothly, even if you’re not always able to see what’s going on under the hood.
          </p>
        </div>
      </div>
    </div>
  </section>
        </>
    );
}

export default About;