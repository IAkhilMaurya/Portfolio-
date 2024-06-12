import "./FooterStyles.css";
import { Link } from "react-router-dom";

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                    <FaHome  size={20} style={{ color: "rgb(234, 105, 6)", marginRight: "2vh"}} />
                    <p>123 Housing Society  </p>
                    <p> (Ayodhya) </p>
                    </div>
                    <div className="phone">
                    <h4><FaPhone  size={20} style={{ color: "rgb(234, 105, 6)", marginRight: "2vh"}}
                     />9876543210</h4>
                    </div>
                    <div className="email">
                    <h4><FaMailBulk  size={20} style={{ color: "rgb(234, 105, 6)", marginRight: "2vh"}}
                     />infoakm116@gmail.com</h4>   
                    </div>
                    </div>
                    <div>
                <div className="right">
                <h4>About me :-</h4>
                <p>Hey I'm Akhil Kumar Maurya. I'm a FULL STACK MERN DEVELOPER.</p>
                <div className="social">
                <FaFacebook  size={20}  style={{ color: "rgb(234, 105, 6)", marginRight: "2vh"}} /> 
                <FaLinkedin size={20}  style={{ color: "rgb(234, 105, 6)", marginRight: "2vh"}} />  
                <FaGithub  size={20} href="https://github.com/IAkhilMaurya" style={{ color: "rgb(234, 105, 6)", marginRight: "2vh"}} />   
                </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
