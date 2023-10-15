import React from 'react';
import ProjectItem from '../Components/ProjectItem';

import '../Styles/Projects.css';
import{ProjectList} from '../helpers/ProjectList'

function Projects() {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>

               {ProjectList.map((project,idx)=>{

                    return(<ProjectItem id ={idx} name={project.name} image={project.image} video={project.video}/>)

               })}
            </div>
            
        </div>
    );
}

export default Projects;