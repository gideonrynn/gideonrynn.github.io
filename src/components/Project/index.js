/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./style.css";
import { Col } from 'react-bootstrap';


const Project = ({title, screenshot, image_alt, app_link, github_link, stretched_link }) => {
    return (
        <Col>
        <div className="col-lg-4 col-md-6 col-sm-12 my-1">

            <div className="card card-hov bg-white text-white mw-100 mh-100">

                            
                <img className="card-img" src={screenshot} alt={image_alt}/>

                    <div className="card-img-overlay d-flex justify-content-center align-items-end">

                        <p className="card-text p-2">{title}

                        <br/>
                            <a href={app_link} target="_blank"> App</a> 
                                    &nbsp;<a href="#" target="_blank"> | </a>&nbsp;
                                    <a href={github_link} target="_blank"> Repo </a>

                        </p>

                        <a href={stretched_link} className="stretched-link" target="_blank"></a>

                    </div> 

            </div>

        </div>
        </Col>    
    )
}

export default Project;