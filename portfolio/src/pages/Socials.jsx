import React from "react";
import {FaGithub } from "react-icons/fa";
import {FaFile } from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
// import React, {useState} from 'react';

const Socials = () => {
    const Github_function = ()  => {
        window.open('https://github.com/aadibaahmed')
    }
    // const [Email, setEmail] = useState(false);
    // const [Resume, setResume] = Resume_function => ({

    // });
    return(
        <div id="Socials">
            <h1 className = "Socials"  style={{backgroundColor: 'rgba(43, 41, 41, 0.62)', padding: '2rem'}}>Socials</h1>
                <div>
                    <span style={{padding: '200px' }}>
                        <button id = "Github" className= "Icons" onClick= {Github_function} ><FaGithub/></button>
                        <script>
                        </script>
                    </span>
                    <span style={{padding: '200px' }}>
                        <button id = 'Email' className="Icons"><FaFile/></button>
                    </span>
                    <span style={{padding: '200px' }}>
                        <button id = 'Resume' className="Icons"><FaMailBulk/></button>
                    </span>
                    
                </div>
        </div>

    )

}
export default Socials