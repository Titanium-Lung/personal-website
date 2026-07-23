import { Navbar } from "../Navbar"
import "../styles/Home.css"

function About() {
    return (
        <div>
            <Navbar />
            <div className="main-body">
                <h2 style={{margin: 0, fontSize: "30pt"}}>Links:</h2>
                <p><a href="https://www.linkedin.com/in/cooper-miles-9b1253376" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="https://github.com/Titanium-Lung" target="_blank" rel="noopener noreferrer">Github</a></p>
                <p><a href="https://www.titaniumlung.com" target="_blank" rel="noopener noreferrer">Website (it's this one)</a></p>
            </div>
        </div>
    )
}

export default About