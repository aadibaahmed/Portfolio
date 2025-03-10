import React from "react";
import {FaGithub } from "react-icons/fa";
import {FaFile } from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import {useState} from 'react';
import MyResume from '../assets/Ahmed_Adiba_Resume.pdf';

const Socials = () => {
    const Github_function = ()  => {
        window.open('https://github.com/aadibaahmed')
    }

    const [Email, setEmail] = useState(false);

    const Email_function = () => {
        setEmail(!Email)
    }
    if(Email) {
        document.body.classList.add('active-modal');
    }
    else{
        document.body.classList.remove('active-modal');
    }
    // const [Resume, setResume] = Resume_function => ({

    // });
    const Resume_function = () => {
        window.open(MyResume)
    }
    return(
        <div id="Socials">
            <h1 className = "Socials"  style={{backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '2rem'}}>About Me</h1>
                <div>
                    <span style={{padding: '200px' }}>
                        <button id = "Github" className= "Icons" onClick= {Github_function} ><FaGithub/></button>
                    </span>
                    <span style={{padding: '200px' }}>
                        <button className="Icons" onClick={Email_function}><FaMailBulk/></button>
                       {
                        Email && (
                            <div className= "modal">
                            <div className="overlay">
                                <div className="modal-content">
                                    <h1>Here are some ways to contact me: </h1>
                                    <div style={{textAlign: 'center'}}>
                                        <h2> <MdEmail/> : adiba.labonno@gmail.com </h2>
                                        <h2> <FaPhone/> : 832-923-1343</h2>
                                    </div>
            
                                <button className= 'close-modal' onClick={Email_function}> Close </button>
                                </div>
                            </div>
                        </div>
                        )
                       }
                    </span>
                    <span style={{padding: '200px' }}>
                        <button id = 'Resume' className="Icons" onClick= {Resume_function} ><FaFile/></button>
                    </span>
                    
                </div>
        </div>

    )

}
export default Socials