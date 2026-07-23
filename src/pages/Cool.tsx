import { Navbar } from "../Navbar"
import "../styles/Home.css"

function Cool() {
    return (
        <div>
            <Navbar />
            <div className="main-body">
                <h2 style={{textAlign: "center", margin: 0, fontSize: "30pt"}}>Sans</h2>
                <p>jcw87 recreated the Sans fight from Undertale at <a href="https://jcw87.github.io/c2-sans-fight/">jcw87.github.io/c2-sans-fight/</a>.
                    They made it so other people can make and play their own custom attacks, so I made a couple of my own attacks in the forms of .csv files.</p>
                <p><a href="https://github.com/Titanium-Lung/Sans-Attacks">Github</a></p>
                <h3 style={{textAlign: "center"}}>Claustrophobia</h3>
                <div className="flexbox">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ws9yJ6C9at8?si=28JU518x41osijK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <h3 style={{textAlign: "center"}}>Stronger</h3>
                <p style={{textAlign: "center"}}>This one was made for a larger video project.</p>
                <div className="flexbox">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/veW79YDJVUM?si=I3rmfr0Yg8kAe4te" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Cool