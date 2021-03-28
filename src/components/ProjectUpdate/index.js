import React from 'react';
import {Col, Row} from 'react-bootstrap';
import "./index.css"


const ProjectUpdate = () => {

    return(
        <>
            <div className="projectupdate-content" style={{backgroundColor: '#34312d'}}>
                <Row className='m-0'>
                    <Col md={8} className="section-content-left" >
                        <p>Feed Harvey</p>
                        <p>Fifth Element Quiz</p>
                        <p>Fulcrum Employee Management App</p>
                        <p>What's To Do</p>
                    </Col>
                    <Col md={4} className="section-category">
                        {/* <h1>Projects</h1> */}
                    Projects
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProjectUpdate;