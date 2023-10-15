import React from 'react';
import {useNavigate} from 'react-router-dom';

function ProjectItem({image,name,id,video}) {
    const navigate = useNavigate();
    return (
        <div className='projectItem' onClick={()=>{
            navigate("/project/"+id)
        }}>
            <div  className='bgImage'>
                    <video src={video} autoPlay loop muted></video>
            </div>
            <h1>{name}</h1>
        </div>
    );
}

export default ProjectItem;