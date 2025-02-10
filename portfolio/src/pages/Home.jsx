import React from 'react'
import pooh from '../assets/pooh.jpg'

const Home = () => {
    return (
    <body >             
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <img src={pooh}  className = 'image' style={{width: '400px', height: '400px', marginRight: '200px', padding: '2rem', position: 'absolute', right: '20px'}}/>
        </div>
        <div className = "Introduction" id='Home'>
            
            <head>portfolio</head>
            <h1>My Portfolio</h1>
        </div>
        <div>
                <p className = "Introduction">Hello! My name is Ahmed Adiba, I am currently a junior majoring in Computer Science at University of Houston.
                    I was born in Bangladesh and moved to the U.S at the age of nine. Ever since I was young, I have been inspired
                    by technology and the impact it has on our daily lives. I am passionate about learning new technologies and how
                    they can be used to solve real-world problems. I like working on solo projects in my free time to improve my skills
                    and become a better developer. I hope that one day I will be able to use my skills to contribute to the tech industry.
                </p>
        </div>
    </body>
    )
}
export default Home