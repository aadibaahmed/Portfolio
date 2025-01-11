import React from "react";
import {useState} from "react";


export const Projects = () =>{

    function inProgress(){
        const [inProgress_projects, setInProgress] = useState([
            {
                id: 1, name: '2D Pixel Game'
            },
            {
                id: 3, name: 'Identify Copy Move Forgery'
            }
        ]);
    }
    function completed(){
        const [completed_projects, setCompleted] = useState([
            {
                id: 1, name: '2D Pixel Game'
            },
            {
                id: 3, name: 'Identify Copy Move Forgery'
            }
        ]); 

    }

    return(
        <div style={{textAlign: 'center'}} className= "Projectsdec" id="Projects">   
            <h1>Projects</h1>
                <p>I've done a few projects in my free time, they are on my GitHub. Here are the ones I have completed so far:
                </p>
                <p>Here are some of the projects I am currently working on:</p>
                <br></br>

        </div> 
    )
}
export default Projects