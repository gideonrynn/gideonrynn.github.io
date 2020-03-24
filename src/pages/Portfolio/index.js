import React, { useState, useContext } from 'react';
import Project from "../../components/Project"
import { ProjectContext } from '../../context/ProjectContext'

const Portfolio = () => {

    const [projects, setProjects] = useContext(ProjectContext);

    return (
        // for each project in the list, create a project card 
        <div>
            {projects.map(project => (
                <Project key={project.id} title={project.title} screenshot={project.screenshot} image_alt={project.image_alt} app_link={project.app_link} github_link={project.github_link} stretched_link={project.stretched_link}/>
            ))}

        </div>
    );
  }
  
export default Portfolio;
  