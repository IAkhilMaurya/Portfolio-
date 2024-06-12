import "./AboutContentStyles.css";
import corner from "../assets/corner.jpg";
import book from "../assets/book.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
      <h1>Who I am?</h1>
      <p>I'm a FULL STACK DEVELOPER. I create responsive websites and currently searching for the job.</p>
      <Link to="/Contact">
        <button className="btn">Contact</button>
      </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={book} className="imgstacktop" alt="true"/>
                <img src={corner} className="imgstackbottom" alt="true"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent;
