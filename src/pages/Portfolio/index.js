import React, { useState, useContext } from 'react';
import Project from "../../components/Project"
import { ProjectContext } from '../../context/ProjectContext'
import { Container, Row } from 'react-bootstrap';

const Portfolio = () => {

    const [projects, setProjects] = useContext(ProjectContext);

    return (
        // for each project in the list, create a project card 
        <Container>

        <div className="wrapper border my-lg-4 my-md-4 my-sm-2">

            <div className="content m-5">
    
                <div className="sectionheading">
                    <h1 className="section-header">Projects</h1>
                </div>
            
           <Row>
            {projects.map(project => (
               <Project key={project.id} title={project.title} screenshot={project.screenshot} image_alt={project.image_alt} app_link={project.app_link} github_link={project.github_link} stretched_link={project.stretched_link}/> 
            ))}
            </Row>
           
           </div>
          
    
        </div>
       
    
        </Container>
   
    );
  }
  
export default Portfolio;
  