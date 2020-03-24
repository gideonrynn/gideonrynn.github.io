/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./style.css";


const Project = ({title}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-1">

                        <div className="card card-hov bg-white text-white mw-100 mh-100">

                            
                            <img className="card-img" src="assets/images/harvey.jpg" alt="Harvey"/>

                            <div className="card-img-overlay d-flex justify-content-center align-items-end">

                                <p className="card-text p-2">{title}</p>

                                <a href="https://fathomless-lake-45236.herokuapp.com/" className="stretched-link" target="_blank"></a>

                            </div>

                        </div>

                        <p className="card-content border rounded text-center"><a href="https://github.com/gideonrynn/feed-harvey-food-logger-hw13">Link to Repo</a></p>

                    </div>
               
    )
}

export default Project;