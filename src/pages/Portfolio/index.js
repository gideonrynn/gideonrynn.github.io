import React, { useState, useContext } from 'react';
import Project from "../../components/Project"
import { ProjectContext } from '../../context/ProjectContext'

const Portfolio = () => {

    const [projects, setProjects] = useContext(ProjectContext);

    return (
        // for each project in the list, create a project card 
        <div>
            {projects.map(project => (
                <Project title={project.title} screenshot={project.screenshot}/>
            ))}

        </div>
    );
  }
  
export default Portfolio;
  