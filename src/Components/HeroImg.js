import "./HeroImgStyle.css";

import React from 'react'
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">

      </div>
      <div className="content">
        <p>Hi, I'm FULL STACK DEVELOPER</p>
        </div>
        <div className="title">
        <h1>MERN Developer</h1>
        </div>
        <div>
        <div className="buttons">
        <Link to="/project"
            className="btn btn-light1"
            >Project</Link>
            <Link to="/contact"
            className="btn btn-light"
            >Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg
