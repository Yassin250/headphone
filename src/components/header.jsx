import React from "react";
import log from "../image/music.png";
import background from "../image/1.jpeg";
import "./header.css"; 

export default function Header() {
    return (
        <header
            className="hero"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-overlay">
                <div className="logo-area">
                    <img src={log} alt="Logo" />
                    <h1>HEADPHONES</h1>
                </div>

                <nav>
                    <ul>
                        <a href="#">What we do</a>
                        <a href="#">Our result</a>
                        <a href="#">Contact us</a>
                    </ul>
                </nav>
            </div>

            <div className="hero-content">
                <h1>Feel the Sound</h1>
                <h2>Experience music the way it was meant to be heard.</h2>
                <button>CALL TO ACTION</button>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    aspernatur velit beatae unde molestiae porro repellendus reiciendis
                    labore ratione officiis quo sint, odio, quaerat modi libero mollitia
                    et? Rem, expedita!
                </p>
            </div>
        </header>
    );
}
