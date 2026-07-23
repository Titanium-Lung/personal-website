

export function Navbar() {
    return (
        <header className="header">
            <div className="titles">
                <div className="left">
                    <h2 className="home"><a className="home" href="/">HOME</a></h2>
                </div>
                <div className="center">
                    <h1><a className="menu-inner" href="/">COOPER MILES</a></h1>
                </div>
                <div className="right">
                
                </div>
            </div>

            <hr className="top-line" />

            <div className="menu-bar">
                <a href="/projects" className="menu-inner">
                    <h2 className="bar-text">Projects</h2>
                </a>
                <a href="/cool" className="menu-inner">
                    <h2 className="bar-text">Cool Things</h2>
                </a>
                <a href="/about" className="menu-inner">
                    <h2 className="bar-text">More About Me</h2>
                </a>
            </div>

            <hr className="top-line"/>
        </header>
    )
}