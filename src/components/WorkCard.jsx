import "./workCard.css";

import React from "react";
//import pro1 from "../assets/aj-8.png";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="logo" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to="adsAfrica.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
