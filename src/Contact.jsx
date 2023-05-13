import "./contactstyle.css"
export default function Contact(){
    return(
        <div className="contactContainer">
            <p className="aboutme">Contact Me<span>()</span></p>
            <div className="letContact">
                <h1>Get in touch</h1>
                <p>Feel free to reach out if you have any questions, think we could work together, or just want to connect ✌️</p>
                <p className="email">atrgoutibilal@gmail.com</p>  
                <p className="freelance">Freelance status: <span className="Available">Available for work</span></p>
            </div>
        </div>
    )
}