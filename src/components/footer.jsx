import React from "react";
import log from "../image/music.png";
import twitter from "../image/twitter.png";
import instagram from "../image/instagram.png";
import facebook from "../image/facebook.png";
import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-log">
                <img src={log} alt="Logo" />
                <h1>HEADPHONES</h1>
            </div>
            <div className="footer-icons">
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />


            </div>
            <div className="footer-copy">
                <p>© 2025 HEADPHONES. All rights reserved.</p>
            </div>

        </footer>
    )
}