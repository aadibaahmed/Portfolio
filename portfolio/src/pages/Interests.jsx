import React from "react";

const my_interests = [
    {name: 'Piano'},
    {name: 'Violin'},
    {name: 'Guitar'},
    {name: 'Art'},
    {name: 'Games'},
    {name: 'Winnie The Pooh'}
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
                                <br></br>
                            </div>
                        ))}
                </div>  
                <br></br>
        </div>
    )
}
export default Interests