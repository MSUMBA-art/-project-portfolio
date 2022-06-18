import "./footer.css";
import React from "react";
import {
  FaMobileAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import {SiGmail} from "react-icons/si"

// import { AiOutlineMail } from "react-icons/ai";
// import {AiOutlineWhatsApp} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <ImLocation
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>4th Avenue</p>
              <p>Retreat</p>
              <p>Cape Town, 7945</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaMobileAlt
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +27 82 666 1222
            </h4>
          </div>
          <div className="email">
            <h4>
              <SiGmail
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              msumba83@gmail
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About - Alexander</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare
            sagittis erat, tempor dignissim nibh pharetra quis. Donec eu diam in
            lorem condimentum tempor in non risus. Curabitur imperdiet mi.
          </p>
          <div className="social">
            <FaGithub
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-container">
//         <div className="left">
//           <div className="location">
//

//             <div>

//               <p>4th Avenue</p>
//               <p>Retreat, Cape Town, 7945</p>
//             </div>
//             <div className="phone">
//               <h4>
//                 <FaPhone
//                   size={20}
//                   style={{
//                     color: "white",
//                     marginRight: "2rem",
//                   }}
//                 />
//                 +27 82 666 1222
//               </h4>
//               <h4>
//                 <AiOutlineWhatsApp
//                   size={20}
//                   style={{
//                     color: "white",
//                     marginRight: "2rem",
//                   }}
//                 />
//                 +27 82 666 1222
//               </h4>
//             </div>
//             <div className="email">
//               <h4>
//                 <AiOutlineMail
//                   size={20}
//                   style={{
//                     color: "white",
//                     marginRight: "2rem",
//                   }}
//                 />
//                 msumba83@gmail.com
//               </h4>
//             </div>
//           </div>
//         </div>
//         <div className="right">
//           <h4>About Alexander</h4>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa
//             dolor, volutpat vel augue in. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit.</p>
//           <p>Morbi massa dolor, volutpat vel augue
//             in.
//           </p>
//         <div className="social">
//           <FaLinkedin
//             size={30}
//             style={{
//               color: "white",
//               marginRight: "1rem",
//             }}
//           />
//           <FaGithub
//             size={30}
//             style={{
//               color: "white",
//               marginRight: "1rem",
//             }}
//           />
//           <FaFacebook
//             size={30}
//             style={{
//               color: "white",
//               marginRight: "1rem",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

export default Footer;
