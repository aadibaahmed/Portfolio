import React from "react"
import violin from '../assets/orch.jpg'
import piano from '../assets/piano.jpg'
import guitar from '../assets/guitar.jpg'
import game from '../assets/xen.jpg'
import poo from '../assets/poopoo.jpg'
import art from '../assets/art.jpg'



const my_interests = [
    {name: 'Piano',
    image: piano,
    link: 'https://drive.google.com/file/d/1rbSprEfEw9BaqB-2PUuorgvkonOSMZ3k/view?usp=sharing'
    },
    {name: 'Violin',
    image: violin,
    link: 'https://drive.google.com/file/d/1U2GppR4ydzar6wLevjND22bpGHjk-Mph/view?usp=sharing'
    },
    {name: 'Guitar',
    image: guitar,
    link: 'https://drive.google.com/file/d/14kC6qM--C-19_RnYZEKNZ5Yoys5x7Jg8/view?usp=sharing'
    },
    {name: 'Art',
    image: art,
    link: ''
    },
    {name: 'Games',
    image: game,
    link: ''
    },
    {name: 'Winnie The Pooh',
    image: poo,
    link: ''
    }
]
const Interests = () =>{
    return(
        <div  style={{textAlign: 'center'}} id="Interests">  
        <div className="Interestss">
            <h1>Interests</h1>
                <p>Other than programming, I love music, art, and gaming. Some instruments I can play are the violin, piano, and guitar.
                    Ever since I was young, I loved gaming and playing different genres of games. My favorite game is the Xenoblade Chronicles
                    series. I also love FPS games and have played them since I was around seven. I also love art and my primary goal right now
                    is to be able to draw sprites and create animations for my own 2D game. One other thing I love is Winnie The Pooh!
                    I have a collection of the character thatI have been collecting since I was a child.
                </p>
                </div> 
                <div className="project_box" style={{textAlign: 'center'}}> 
                        {my_interests.map((project) => (
                            <div>
                            <h2>{project.name}</h2>
                                <img className = 'image' src={project.image} style={{width: '200px', height: '200px', borderRadius: '8px'}}/>
                                <br></br>
                                <a href={project.link} class="button">View</a>
                                <br></br>
                            </div>
                        ))}
                </div>  
                <br></br>
        </div>
    )
}
export default Interests