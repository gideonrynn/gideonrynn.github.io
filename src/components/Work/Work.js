import CurrentProject from '../CurrentProject/CurrentProject'
import React, {useState, useEffect} from 'react'
import './Work.css'

const Work = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);

    const currentProject = "life-plus-project2"

    useEffect(() => {

        setLoading(true);
        fetch("https://api.github.com/users/gideonrynn/repos")
        //take the response and convert to json
        .then(response => response.json())
        .then(setData)
        .then(() => setLoading(false))
        // throw in catch
        .catch(setError)
        // fetch(`https://api.github.com/users/gideonrynn`)
        // //take the response and convert to json
        // .then(response => response.json())
        // .then(setData)
        // .then(() => setLoading(false))

        // console.log(data);
    }, []); 

    // const getGitHubInfo = () => {
    //     // setLoading(true);

    //     fetch(`https://api.github.com/users/gideonrynn/repos`)
    //     //take the response and convert to json
    //     .then(response => response.json())
    //     .then(setData)
    //     .then(() => setLoading(false))
    //     // throw in catch
    //     .catch(setError)
    // }

    // const filter = () => {

    // }

     //to handle loading state
    if (loading) {
        return <h1>Loading...</h1>;
    } 
    console.log(data);
    
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if there's no data, return nothing
  if (!data) return null

//   can't do this as it causes a rerender
//   if (data) {
//         console.log(data);
//         setCurrentProject()
//         console.log(currentProject);
//     }
    

    return (
        <div className="main-work">
            <div className="work-text-content">
                <p>Work section</p>
            </div>
            <CurrentProject/>

            {/* <div className="work-images">
                
            </div> */}
        </div>
    )
}

export default Work
