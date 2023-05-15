import "./contactstyle.css"
import linkdlen from "../Photos/linkdlen.svg"
import github from "../Photos/github.svg"
export default function Contact(){
    return(
        <div className="contactContainer">
            <p className="aboutme">Contact Me<span>()</span></p>
            <div className="letContact">
                <h1>Get in touch</h1>
                <p>Feel free to reach out if you have any questions, think we could work together, or just want to connect ✌️</p>
                <p className="email">atrgoutibilal@gmail.com</p>  
                <p className="freelance">Freelance status: <span className="Available">Available for work</span></p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/bilal-atrgouti-98b202237/" target="_blank"><img src={linkdlen} alt="" className="linko" /></a>
                    <a href="https://github.com/atrgouti" target="_blank"><img src={github} alt=""  /></a>
                </div>
            </div>
        </div>
    )
}