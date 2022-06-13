import "./heroImg.css";
import React from 'react'
import IntroImg from "../assets/aj-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
      <div className="hero">
          <div className="mask">
              <img className="intro-img" alt="Logo" src={IntroImg} />
              <div className="content">
                  <p>Hi, I'M ALEXANDER</p> 
                  <h1>FULLSTACK DEVELOPER</h1>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="contact" className="btn-light">Contact</Link>
              </div>
       </div>   
    </div>
  )
}

export default HeroImg;