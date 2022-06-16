import "./aboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/aj-7.png";
import React2 from "../assets/aj-5.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>I am a Junior Fullstack Developer, I enjoy more on front-end</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="LOGO" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} alt="LOGO" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent