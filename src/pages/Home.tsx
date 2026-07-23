import { Navbar } from "../Navbar"
import "../styles/Home.css"
import face from "../assets/face.jpeg"
import basketpong_front_page from "../assets/basketpong front page.png"
import basketpong_in_action from "../assets/basketpong in action.png"

function Home() {
    return (
        <div>
            <Navbar />
            <div className="main-body">
                <div className="top-body">
                    <div className="face">
                        <img src={face}/>
                    </div>
                    <div className="main text">
                        <p>Hi! I'm Cooper Miles! This is my Personal Website, so explore around here to learn about me!</p>
                    </div>
                </div>
                <div className="top-project">
                    <h2 style={{textAlign: "center"}}>Top Project</h2>
                    <p>The project I have that I'm the most proud of is a game I made called Basketpong. 
                    Basketpong is a mashup between Basketball and Pong. Ever played one of those 2D basketball games where the little characters have to throw the ball into the hoop?
                    This game is like that, except the entire opposite wall is your basket, and each player has a Pong paddle to block the other player from hitting their wall.</p>
                </div>
                <div className="top-pics">
                    <img className="picture" src={basketpong_front_page}/>
                    <img className="picture" src={basketpong_in_action}/>
                </div>
            </div>
        </div>
    )
}

export default Home