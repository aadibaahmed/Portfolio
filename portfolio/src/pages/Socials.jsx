import React from "react";
import {FaGithub } from "react-icons/fa";
import {FaFile } from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
// import ReactDOM from 'react-dom';

const Socials = () => {
    return(
        <div id="Socials">
            <h1 className = "Socials"  style={{backgroundColor: 'rgba(43, 41, 41, 0.62)', padding: '2rem'}}>Socials</h1>
                <div>
                    <span style={{padding: '200px' }}>
                    <button id = 'Github' className= "Icons"><FaGithub/></button>
                    {/* <script>
                        document.getElementById("Github") = function () {
                            window.open("https://github.com/aadibaahmed")
                        };
                    </script> */}
                    </span>
                    <span style={{padding: '200px' }}>
                    <button className="Icons"><FaFile/></button>
                    </span>
                    <span style={{padding: '200px' }}>
                    <button className="Icons"><FaMailBulk/></button>
                    </span>
                    
                </div>
        </div>

    )

}
export default Socials