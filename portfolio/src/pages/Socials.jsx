import React from "react";
import {FaGithub } from "react-icons/fa";
import {FaFile } from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import ReactDOM from 'react-dom';

const Socials = () => {
    return(
        <div id="Socials">
            <h1 className = "Socials">Socials</h1>
                <div>
                    <button className="Icons"><FaGithub/></button>
                    <button className="Icons"><FaFile/></button>
                    <button className="Icons"><FaMailBulk/></button>
                </div>
        </div>

    )

}
export default Socials