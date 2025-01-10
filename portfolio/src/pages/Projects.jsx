import React from "react";

export const Projects = () =>{
    return(
        <div style={{textAlign: 'center'}} className= "Projectsdec">   
            <h1>Projects</h1>
            <p>I've done a few projects in my free time, they are on my GitHub. Here are the ones I have completed so far:
            </p>

            <li>
                <a href= "/Completed">Completed Projects</a>
                <br></br>
                <p>Here are some of the projects I am currently working on:</p>
            </li>

            <li>
                <a href= "/WinnieThePooh">Winnie The Pooh Game</a>
                <br></br>
            </li>

            <li>
                <a href= "/Copy_Move">Identify Copy Move Forgery</a>
                <br></br>
            </li>

        </div> 
    )
}
export default Projects