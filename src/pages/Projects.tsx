import { Navbar } from "../Navbar"
import "../styles/Home.css"
import basketpong_front_page from "../assets/basketpong front page.png"
import basketpong_in_action from "../assets/basketpong in action.png"
import basketpong_video from "../assets/basketpong.mov"

function Projects() {
    return (
        <div>
            <Navbar/>
            <div style={{marginTop: 0}} className="main-body">
                <h2 style={{textAlign: "center"}}>Basketpong</h2>
                <p>Basketpong is a mashup between Basketball and Pong. Ever played one of those 2D basketball games where the little characters have to throw the ball into the hoop?
                    This game is like that, except the entire opposite wall is your basket, and each player has a Pong paddle to block the other player from hitting their wall.</p>
                <p>Players can't move past their half of the court, and it's first to 5 points.</p>
                <p>I made it using Godot, using GDScript, which is a language specific to Godot. It's like Python. I had a hard time with the Physics, since the ball would keep bouncing the wrong direction.
                    I found and installed a physics engine, and that mostly fixed the problem. I made the assets myself, and all the UI myself as well.
                </p>
                <p>I don't currently have a way for other people to play it. I'll work on that.</p>
                <p>Github link: <a href="https://github.com/Titanium-Lung/basketpong">Basketpong</a></p>
                <div className="top-pics">
                    <img className="picture" src={basketpong_front_page}/>
                    <img className="picture" src={basketpong_in_action}/>
                </div>

                <div className="flexbox">
                    <video style={{margin: "auto"}} width="700" controls>
                        <source src={basketpong_video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <h2 style={{textAlign: "center", marginTop: "1rem"}}>This Website!</h2>
                <p>The website that you're looking at right now! I built all of the HTML and CSS myself, and had to learn a lot about both of them in the process.
                    I do have some Javascript, for example the header at the top of the page is in one file, and I have a Javascript file to put it at the top of each page.
                </p>
                <p>It's still a work in progress, and I hope to improve on it over time, especially the visuals.</p>

                <h2 style={{textAlign: "center", marginTop: "1rem"}}>Skater Infestation</h2>
                <p>Skater Infestation is a game I made in High School using Unity for the Oculus Quest. It works pretty well, and I'm quite proud of it.</p>
                <p>I had to struggle through doing things in 3D, and sometimes everything would just break. But I kept researching solutions and eventually made a finished product.</p>
                <p>I made 3D assets in Blender, partially modifying the work of others (who were credited).</p>
                <p>I posted it on <a href="https://titaniumlung.itch.io/skater-infestation">Itch.io</a></p>
            </div>
        </div>
    )
}

export default Projects