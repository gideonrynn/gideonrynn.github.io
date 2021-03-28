import React from 'react'
import projectImage from '../../img/so-white.png'

const CurrentProject = () => {
    return (
        <div>
            <p className="project-title">Pros and Cons</p>
            <img className="project-image" src={projectImage} alt=""/>
        </div>
    )
};

export default CurrentProject;
