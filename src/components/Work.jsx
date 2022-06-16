

// import "./workCard.css";
// import WorkCard from "./WorkCard";
// import WorkCardData from "./WorkCardData"

// import React from "react";
// import pro1 from "../assets/aj-bg.jpg";
// import { NavLink } from "react-router-dom";

// const Work = () => {
//   return (
//     <div className="project-card">
//       <img src={pro1} alt="logo" />
//       <h2 className="project-title">Project Title</h2>
//       <div className="pro-details">
//         <p>This is text</p>
//         <div className="pro-btn">
//           <NavLink to="adsAfrica.com" className="btn">
//             View
//           </NavLink>
//           <NavLink to="adsAfrica.com" className="btn">
//             Source
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;




















import "./workCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"

import React from "react";
// import pro1 from "../assets/aj-8.png";
// import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Work;
