import React from 'react';
import {LinkedIn} from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import {Email} from '@material-ui/icons';
import '../Styles/Home.css';

function Home(props) {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi!! my name is Vaibhav</h2>
                <div className='promt'>
                    <p>A Software Developer with passion for learning and creating.</p>
                    <LinkedIn/>
                    <GitHub/> 
                    <Email/>
                </div>

            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
                    </li>
                    <li className='item'>
                        <h2>Programming Languages</h2>
                        <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;