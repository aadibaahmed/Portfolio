import React from "react";
import dungeon from '../assets/dungeon.jpg'
import todo from '../assets/todo.png'
import pooh from '../assets/pooh.jpg'
import hanoi from '../assets/hanoi.jpg'
import { MdRoundedCorner } from "react-icons/md";

const in_progress =[
    {name: '2D Pixel Game', 
    description: 'Creating a small 2D game where characters go around an open world to complete tasks and discover new items. Learned to create 2D sprites and animations, while using GD script to code and interact with characters and items in the game.',
    Tech: 'Godot Engine, Aseprite, GD Script', 
    link:'https://github.com/aadibaahmed/WinnieGame',
    Image: pooh},
    {name: 'Identify Copy Move Forgery', 
    Tech: 'Python, OpenCV',
    description: 'Given a dataset of copy-move forged images, attempting to create a code base to highlight the forged region correctly. Implemented a block division-based analysis to identify copied areas of an image.',
    link: 'https://github.com/aadibaahmed/CVR',
    Image: pooh},

    {name: 'Personal Portfolio', 
    description: 'A portfolio using react',
    Tech: 'React, HTML, CSS', 
    link: 'https://github.com/aadibaahmed/Portfolio',
    Image: pooh}
]
const completed = [
    {name: 'To-Do-List',
    description: 'Designed a To-Do list using ExpressJS and implemented a server/client configuration. Learned how to connect a database to add, remove, and store tasks according to the users choice.',
    link: 'https://github.com/aadibaahmed/ToDoList',
    Image: todo},
    {name: 'Dungeon RPG', 
    description: 'Created a text-based role-playing game where players can traverse a dungeon, and interact with enemies/loot through the terminal.',
    link: 'https://github.com/aadibaahmed/DungeonRPG',
    Image: dungeon},
    {name: 'Tower-Hanoi', 
    description: 'An assembly code-based solution for the Tower Hanoi (A well-known mathematical problem). The project uses stack pointers and recursive algorithms.',
    link: 'https://github.com/aadibaahmed/Tower-Hanoi',
    Image: hanoi}
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
                                <img className = 'image' src={project.Image} style={{width: '200px', height: '200px', borderRadius: '8px'}}/>   
                                <h2>{project.name}</h2>

                                    <h3>{project.Tech}</h3>
                                    <p>
                                        {project.description}
                                        <div lassName= "project_box">
                                        </div>
                                    </p>
                                    <a href={project.link}>Access on GitHub</a>
                            </div>
            
                        ))}
                </div>  

                <p div className="Projectsdec">Here are some of the projects I am currently working on:</p>

                <div className="project_box" style={{textAlign: 'center'}}> 
                    {in_progress.map((project) => (
                        <div>
                            <img className = 'image' src={project.Image} style={{width: '200px', height: '200px', borderRadius: '8px'}}/>
                            <h2>{project.name}</h2>
                            <h3>{project.Tech}</h3>
                            <p>
                                {project.description}
                            </p>
                            <a href={project.link}>Access on GitHub</a>
                        </div>
        
                    ))}
                </div>  

                <br></br>

        </div> 
    )
}
export default Projects