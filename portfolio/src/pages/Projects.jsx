import React from "react";
import todo from '../assets/todo.png'
import hanoi from '../assets/hanoi.jpg'
import characters from '../assets/characters.png'
import copy from '../assets/copy_move.jpg'
import portfolio_pic from '../assets/portfolio.png'
import library from '../assets/lib.jpg'
import research from '../assets/research.jpg'

const in_progress =[
    {name: '2D Pixel Game', 
    description: 'Creating a small 2D game where characters go around an open world to complete tasks and discover new items. Learned to create 2D sprites and animations, while using GD script to code and interact with characters and items in the game.',
    Tech: 'Godot Engine, Aseprite, GD Script', 
    link:'https://github.com/aadibaahmed/WinnieGame',
    Image: characters},
    {name: 'Identify Copy Move Forgery', 
    Tech: 'Python, OpenCV',
    description: 'Given a dataset of copy-move forged images, attempting to create a code base to highlight the forged region correctly. Implemented a block division-based analysis to identify copied areas of an image.',
    link: 'https://github.com/aadibaahmed/CVR',
    Image: copy},
    {name: 'Library Management System',
    description: 'A library management system that allows users to check out books, add new books, and remove books from the library. Learned how to connect a database to store user information and book data.',
    Tech: 'React JS, Node JS, MySQL',
    Image: library,
    link: ''
    },
    {name: 'Cognitive Child Developtment Research',
    description: 'Currently I am under a research Cohort that focuses on understanding child development based on how they initiate and interact with objects and parents.',
    Tech: 'Python, OpenCV, Statistics',
    Image: research,
    link: ''
    }
]
const completed = [
    {name: 'To-Do-List',
    description: 'Designed a To-Do list using ExpressJS and implemented a server/client configuration. Learned how to connect a database to add, remove, and store tasks according to the users choice.',
    Tech: 'ExpressJS, ReactJS, MongoDB',
    link: 'https://github.com/aadibaahmed/ToDoList',
    Image: todo},
    {name: 'Personal Portfolio', 
    description: 'A portfolio using react, where all the projects are layed out in a single page. Learned how to use React components and how to create a single page application.',
    Tech: 'React, HTML, CSS', 
    link: 'https://github.com/aadibaahmed/Portfolio',
    Image: portfolio_pic},
    {name: 'Tower-Hanoi', 
    description: 'An assembly code-based solution for the Tower Hanoi (A well-known mathematical problem). The project uses stack pointers and recursive algorithms.',
    Tech: 'ARM Assembly',
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
                                <img className = 'image' src={project.Image} style={{width: '200px', height: '200px', borderRadius: '20px'}}/>   
                                <h2 style={{backgroundColor: 'rgba(0, 0, 0, 0.397)', padding: '2rem'}}>{project.name}</h2>
                                    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.57)', padding: '2rem'}}>
                                        <h3>{project.Tech}</h3>
                                        <p>
                                            {project.description}
                                            <div className= "project_box">
                                            </div>
                                        </p>
                                        <a href={project.link}>Access on GitHub</a>
                                    </div>
                            </div>
            
                        ))}
                </div>  

                <p div className="Projectsdec">Here are some of the projects I am currently working on:</p>

                <div className="project_box" style={{textAlign: 'center'}}> 
                    {in_progress.map((project) => (
                        <div>
                            <img className = 'image' src={project.Image} style={{width: '200px', height: '200px', borderRadius: '8px'}}/>
                            <h2 style={{backgroundColor: 'rgba(0, 0, 0, 0.397)', padding: '2rem'}}>{project.name}</h2>
                            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.57)', padding: '2rem'}}>    
                                <h3>{project.Tech}</h3>
                                <p>
                                    {project.description}
                                </p>
                                <a href={project.link}>Access on GitHub</a>
                            </div>
                        </div>
        
                    ))}
                </div>  

                <br></br>

        </div> 
    )
}
export default Projects