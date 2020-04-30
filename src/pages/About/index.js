/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "./style.css";
import profphoto from "../../images/scdprof1.jpg"
import resume from "../../resume/Dillard-Resume-0220.pdf"


function About() {
    return (
        <div>
            <div className="container">
         
         {/* <!-- Start Wrapper --> */}
         <div className="wrapper border my-lg-5 my-md-5 my-sm-2">
                 
                 {/* <!-- Start row 1 of 2 --> */}
                 <div className="row"> 
                         
                     {/* <!-- Start column 1 --> */}
                     <div className="col-12">
                             <div className="content m-3">
                             
                         {/* <!-- Border applied to section heading --> */}
                     <div className="sectionheading m-3">
                             <h1>About Me</h1>
                         </div>
 
                         {/* <!-- Start Sub-Row --> */}
                         <div className="row p-2">
 
                             {/* <!-- Start Sub Column 1 of 2 --> */}
                             <div className="col-lg-3 col-md-3 col-sm-9">
                                 <img src={profphoto}  alt="Sarah Dillard" className="img-thumbnail float-left p-2"></img>
                             </div>
                             {/* <!-- End Sub Column 1 of 2 --> */}
 
                             {/* <!-- Start Sub Column 2 of 2 --> */}
                             <div className="col-lg-9 col-md-9 col-sm-12">
                         
                                 <p>As a developer at Northwestern University, I provide production and development support for enterprise applications. I have three years' experience as a business analyst specializing in workflow management and project management services, and received certification as a Full Stack Web Developer at the Northwestern School of Professional Studies.
                                 </p>
                                 {/* <p>In addition to my professional concentrations, my personal interests include videogames (ex/<a href="https://www.playstation.com/en-us/games/detroit-become-human-ps4" target="_blank">Detroit: Become Human</a> for PS4), sci fi content (ex/<a href="https://www.syfy.com/theexpanse/about" target="_blank">The Expanse</a>),  comic books and participation in <a href="https://www.c2e2.com/" target="_blank">comic conventions</a>. I also care for over 20 plants year-around, and maintain two "planted" aquariums, one of which includes my 5 year old fancy goldfish!</p>  */}
                                     
                                 <p> <a href="contact.html">Contact me</a> for interest in my <a href="portfolio.html"> bootcamp projects</a> or inquiries regarding new project requests. Find me on <a href="https://www.linkedin.com/in/sarahcdillard/" target="_blank">LinkedIn</a> and <a href="https://github.com/gideonrynn" target="_blank">GitHub</a>.
                                </p>
                             </div>
                            
                                 <br></br>
                                 
                             {/* <!-- End Sub Column 2 of 2  --> */}
                             </div>
                         
                         {/* <!-- End Sub Row --> */}
                         </div>
                     
                     {/* <!-- End Column 1 --> */}
                     </div> 
 
                 {/* <!-- Ends Row 1 of 2 --> */}
                 </div> 
             
             </div>
             {/* <!-- Ends Content --> */}
 
         </div> 
         {/* <!-- Ends Wrapper --> */}
 
         <div row>
                 
     </div> 
     {/* <!-- Ends Container --> */}
    </div>
    
    )
}

export default About;