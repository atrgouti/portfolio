import { useState } from "react"
import logo from "../Photos/logo.svg"
import linkdlen from "../Photos/linkdlen.svg"
import github from "../Photos/github.svg"
import contact from "../Photos/contact.svg"
import "./Navbarstyle.css"
export default function NavBar(){

    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(!isClicked)
    }

    const divClassName = isClicked ? 'container active' : 'container';

    return(
        <div className={divClassName}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Projects</a> 
                </li>
                <li className="contactLink">
                    <a href="#">Contact</a> 
                </li>
            </ul>
            <div className="contact">
                <a href="https://www.linkedin.com/in/bilal-atrgouti-98b202237/" target="_blank"><img className="linkdlenIcon" src={linkdlen} alt="" /></a>
                <a href="https://github.com/atrgouti" target="_blank"><img className="githubIcon" src={github} alt="" /></a>
                <a href="#"><span className="span">
                    <p className="contactMe">Contact Me</p>
                    <img src={contact} alt="" />
                </span></a>
            </div>
            <div className="burger" onClick={handleClick}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
        </div>
    );
};