import React from "react";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import "../Styles/Home.css";

function Home(props) {
  return (
    <div className="home">
      <div className="about">
        <div className="aboutMe">
          <h2>Vaibhav Randhave</h2>
          <h5>Actimize Developer at TCS</h5>
          <p>
            I am a highly analytical developer with 2+ years of experience in
            languages like HTML, CSS,<br></br> JavaScript, java, SQL. I have
            developed web solutions that meet client requirements.
          </p>
        </div>

        <div className="promt">
          <p>
            <b>Key responsibilities:</b>
            <br></br>
            Designing and Coding Rules and Coding Rule sets Preparing Alert
            Workflows and Routing Policies Working on VTL files, managing
            back-end data with Oracle SQL Testing alert workflows with selenium
            java BDD framework. developing and deploying REST API with java and
            tomcat.<br></br>
            <br></br>
            Experience: 2021 – Present.
          </p>
          <div className="socialIcons">
          <LinkedIn
            style={{ fontSize: 45, marginRight: 9, cursor: "pointer" }}
          />

          <GitHub style={{ fontSize: 40, marginRight: 9, cursor: "pointer"}} />
          <Email style={{ fontSize: 45, marginRight: 9, cursor: "pointer" }} />
        </div>
          </div>
         
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
