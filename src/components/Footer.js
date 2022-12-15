import React from 'react'
import './Footer.css'
import { IconContext } from 'react-icons'
import { SiLinkedin, SiGithub, SiInstagram, SiFacebook } from 'react-icons/si'

function Footer() {
    return (
        <div className="footer">
            <IconContext.Provider value={{ className: "react-icons-footer" }}>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/joseph-pogue-591442178/">
                        <SiLinkedin />
                    </a>
                    <a href="https://github.com/josephpogue">
                        <SiGithub />
                    </a>
                    <a href="https://www.instagram.com/josephpogue/">
                        <SiInstagram />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100003108423212">
                        <SiFacebook />
                    </a>
                </div>
            </IconContext.Provider>
            <div className="copyright-container">
                <p className="copyright-text">
                    Copyright 2022 Joseph Pogue Website
                </p>
            </div>
        </div>
    )
}

export default Footer