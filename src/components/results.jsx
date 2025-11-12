import React from "react";
import back from "../image/back.png";
import "./results.css";

export default function Results() {
    return (
        <section
            className="result"
            style={{ backgroundImage: `url(${back})` }}
        >
            <div className="result-overlay">
                <h2>Our Results Speak for Themselves</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis sunt similique natus quisquam accusantium! A perspiciatis fuga fugit tempora eaque optio praesentium ipsa. Itaque ex cum sit facilis dolorum.
                </p>

                <div className="stats">
                    <div className="stat">
                        <h3>95%</h3>
                        <p>Customer Satisfaction</p>
                    </div>
                    <div className="stat">
                        <h3>85%</h3>
                        <p>Noise Reduction Efficiency</p>
                    </div>
                    <div className="stat">
                        <h3>90%</h3>
                        <p>Sound Clarity Rating</p>
                    </div>
                    <div className="stat">
                        <h3>80%</h3>
                        <p>Repeat Purchases</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
