import React from "react";
import {FaGithub } from "react-icons/fa";
import {FaFile } from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";

const Socials = () => {
    return(
        <div>
            <h1 className = "Socials">Socials</h1>
                <a href= "file:///C:/Users/adiba/Downloads/Ahmed_Adiba_Resume.pdf"> Resume </a>
                <div className="Icons">
                    <button><FaGithub/></button>
                    <button><FaFile/></button>
                    <button><FaMailBulk/></button>
                </div>
        </div>

    )

}
export default Socials