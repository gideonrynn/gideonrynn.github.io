import React, {useState, createContext} from 'react';
import dulynoted from '../images/dulynoted.JPG'
import fulcrumapp from '../images/fulcrumapp.JPG'
import harvey from '../images/harvey.jpg'
import lifeplustracker from '../images/lifeplustracker.JPG'
import plan from '../images/plan.jpg'
import fifthelement from '../images/fifthelement.jpg'

// so it can be used in different components as needed
export const ProjectContext = createContext();

// holds project info and passes it to the children
export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      category: "features",
      title: "Feed Harvey Logger",
      screenshot: harvey,
      image_alt: "Harvey Image",
      app_link: "https://fathomless-lake-45236.herokuapp.com/",
      github_link: "https://github.com/gideonrynn/feed-harvey-food-logger-hw13",
      stretched_link: "https://fathomless-lake-45236.herokuapp.com/",
      id: "1"
      
    },
    {
      category: "features",
      title: "What's To Do",
      screenshot: plan,
      image_alt: "Day Planner Image",
      app_link: "https://gideonrynn.github.io/whats-to-do-day-planner-homework5/",
      github_link: "https://github.com/gideonrynn/whats-to-do-day-planner-homework5",
      stretched_link: "https://gideonrynn.github.io/whats-to-do-day-planner-homework5/",
      id: "2"
    },
    {
        category: "features",
        title: "Fulcrum Employee CMS",
        screenshot: fulcrumapp,
        image_alt: "Fulcrum App Image",
        app_link: "https://github.com/gideonrynn/fulcrum-employee-tracker-cms-homework12",
        github_link: "https://github.com/gideonrynn/fulcrum-employee-tracker-cms-homework12",
        stretched_link: "https://github.com/gideonrynn/fulcrum-employee-tracker-cms-homework12",
        id: "3"
        
      },
    

      {
        category: "features",
        title: "Life+ Self-Care App",
        screenshot: lifeplustracker,
        image_alt: "Health Boi Image",
        app_link: "https://life-plus-app.herokuapp.com/",
        github_link: "https://github.com/gideonrynn/life-plus-project2",
        stretched_link: "https://life-plus-app.herokuapp.com/",
        id: "4"
        
      },

      {
        category: "other",
        title: "Fifth Element Quiz",
        screenshot: fifthelement,
        image_alt: "Quiz Screenshot Image",
        app_link: "https://gideonrynn.github.io/fifthelement-code-quiz-homework4/",
        github_link: "https://github.com/gideonrynn/fifthelement-code-quiz-homework4",
        stretched_link: "https://gideonrynn.github.io/fifthelement-code-quiz-homework4/",
        id: "5"
        
      },

      {
        category: "other",
        title: "Duly Noted Note Taker",
        screenshot: dulynoted,
        image_alt: "TeamSprite Image",
        app_link: "https://hidden-retreat-96452.herokuapp.com/",
        github_link: "https://github.com/gideonrynn/dulynoted-note-taker-hw11",
        stretched_link: "https://hidden-retreat-96452.herokuapp.com/",
        id: "6"
        
      }
  ]);

  return(
    <ProjectContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectContext.Provider>
  )
}