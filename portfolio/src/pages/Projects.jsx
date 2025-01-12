import React from "react";

const in_progress =[
    {id: 1, name: '2D Pixel Game', description: 'Creating a small 2D game where characters go around an open world to complete tasks and discover new items. Learned to create 2D sprites and animations, while using GD script to code and interact with characters and items in the game.'},
    {id: 2, name: 'Identify Copy Move Forgery', description: 'Given a dataset of copy-move forged images, attempting to create a code base to highlight the forged region correctly. Implemented a block division-based analysis to identify copied areas of an image.'},
    {id: 2, name: 'Personal Portfolio', description: 'Given a dataset of copy-move forged images, attempting to create a code base to highlight the forged region correctly. Implemented a block division-based analysis to identify copied areas of an image.'}
]
const completed = [
    {id: 1, name: 'To-Do-List', description: 'Designed a To-Do list using ExpressJS and implemented a server/client configuration. Learned how to connect a database to add, remove, and store tasks according to the users choice.'},
    {id: 2, name: 'Dungeon RPG', description: 'Created a text-based role-playing game where players can traverse a dungeon, and interact with enemies/loot through the terminal.'},
    {id: 3, name: 'Tower-Hanoi', description: 'An assembly code-based solution for the Tower Hanoi (A well-known mathematical problem). The project uses stack pointers and recursive algorithms.'}
]
const Projects = () =>{


    return(
        <div style={{textAlign: 'center'}} id="Projects">   
            <div className="Projectsdec">
                <h1>Projects</h1>
                    <p>I've done a few projects in my free time, they are on my GitHub. Here are the ones I have completed so far:</p>
                    </div>
                    <div className="project_box" style={{textAlign: 'center'}}> 
                        {completed.map((project) => (
                            <div>
                            <h2>{project.name}</h2>
                                <p>
                                    {project.description}
                                </p>
                            </div>
            
                        ))}
                </div>  

                <p div className="Projectsdec">Here are some of the projects I am currently working on:</p>

                <div className="project_box" style={{textAlign: 'center'}}> 
                    {in_progress.map((project) => (
                        <div>
                           <h2>{project.name}</h2>
                            <p>
                                {project.description}
                            </p>
                        </div>
        
                    ))}
                </div>  

                <br></br>

        </div> 
    )
}
export default Projects