import React from "react";
import Sound from "../image/11.png";
import Sportfy from "../image/12.png";
import Music from "../image/13.png";
import Guiter from "../image/14.png";
import "./main.css";

export default function Mains() {
    return (
        <main>
            <section className="brand">
                <div className="brand-text">
                    <h2>What we do...</h2>
                    <p>
                        We design headphones that deliver high-quality sound and unmatched
                        comfort — perfect for music lovers, gamers, and creators.
                    </p>
                </div>

                <div className="brand-blocks">
                    <div className="brand-block">
                        <img src={Sound} alt="Sound Wave" />
                        <h3>Sound Wave</h3>
                        <p>Experience clear and powerful sound.</p>
                    </div>

                    <div className="brand-block">
                        <img src={Sportfy} alt="Bass Boost" />
                        <h3>Bass Boost</h3>
                        <p>Deep bass that moves with your rhythm.</p>
                    </div>

                    <div className="brand-block">
                        <img src={Music} alt="Noise Canceling" />
                        <h3>Noise Canceling</h3>
                        <p>Block the noise, feel the music.</p>
                    </div>

                    <div className="brand-block">
                        <img src={Guiter} alt="Crystal Clarity" />
                        <h3>Crystal Clarity</h3>
                        <p>Hear every detail of your favorite track.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
