/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Container } from 'react-bootstrap';
import profphoto from "../../images/scdprof1.jpg"
// import resume from "../../resume/Dillard-Resume-0220.pdf"
import Intro from "../../components/Intro"
import ProjectUpdate from "../../components/ProjectUpdate"
import Hobbies from "../../components/Hobbies"
import Contact from "../../components/Contact"
import "./style.css";



function Home() {
    return (
            <Container fluid>
                <Intro/>
                <ProjectUpdate className="ProjectUpdate"/>
                <Hobbies/>
                <Contact/>
                {/* <p>"Capicola jerky pig tongue, salami nostrud porchetta frankfurter chislic commodo meatball corned beef proident.  Nostrud turkey ground round, aliquip duis sausage in cupim reprehenderit do eiusmod fugiat buffalo.  Est corned beef consectetur dolore nulla quis enim irure ex sirloin picanha.  Pastrami tri-tip hamburger short ribs tail dolore spare ribs.  Ham veniam tail doner sunt consectetur, shankle swine excepteur sirloin salami sint.  Cupim in ham mollit beef consequat non pig pork belly ex aliqua ullamco duis ball tip qui.",
                    "Burgdoggen leberkas venison aliquip.  Pork chop kevin pork loin drumstick voluptate pancetta enim cupidatat incididunt.  Et chuck ipsum doner pastrami landjaeger laborum nostrud consequat consectetur ham hock.  Kielbasa cillum proident, fugiat culpa in cupidatat.  Shankle burgdoggen ut lorem andouille.  Biltong tri-tip kielbasa, flank fatback veniam eu filet mignon qui turducken ham sint pariatur short loin ut.  Ut tempor elit shankle excepteur bacon ribeye aliquip ball tip sed dolore bresaola voluptate.",
                    "Fatback ball tip kevin, turkey laborum brisket fugiat aliquip ribeye in corned beef.  Cupidatat swine ut do quis, salami sirloin chicken pig adipisicing sunt excepteur.  Aliqua quis boudin chislic cupidatat picanha, occaecat shoulder corned beef ea capicola salami.  Meatball biltong in ipsum non venison pork chop lorem officia sunt duis pastrami ball tip.  Boudin dolore ullamco andouille, ground round beef drumstick non anim laborum pork in.  Ut laborum qui in cow eu dolore burgdoggen cupidatat chislic sint kielbasa aute.  Adipisicing consectetur magna anim.",
                    "Dolor incididunt et, porchetta venison shoulder sint rump leberkas fatback.  Et kevin burgdoggen boudin, ipsum frankfurter beef eiusmod venison chislic occaecat ea dolor.  Flank aliquip mollit capicola adipisicing cow.  In bacon pariatur duis.  Pork shankle nulla officia.  Reprehenderit sunt id, eu beef spare ribs sausage proident ham hock meatloaf commodo cupidatat picanha in.  Cillum elit landjaeger sunt venison, enim dolore duis spare ribs proident laboris.",
                    "Exercitation esse turkey mollit hamburger venison in ball tip chislic consequat chicken pig ham brisket.  Adipisicing sed meatball, sint in landjaeger pork loin laborum ad non.  Rump salami picanha esse ground round.  Ball tip flank magna brisket pork chop capicola.  Consectetur sausage irure andouille cupidatat tenderloin spare ribs."
                    </p> */}
           
                 
            </Container> 
     
    
    
    )
}

export default Home;