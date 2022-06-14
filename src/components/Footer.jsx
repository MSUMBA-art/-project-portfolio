import "./footer.css";

import React from "react";
import { FaHome, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "white",
                marginRight: "2rem",
              }}
            />
            <div>
              <p>4th Avenue</p>
              <p>Retreat, Cape Town, 7945</p>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{
                    color: "white",
                    marginRight: "2rem",
                  }}
                />
                +27 82 666 1222
              </h4>
            </div>
            {/* <div className="email">
              <h4>
                <FaMail
                  size={20}
                  style={{
                    color: "white",
                    marginRight: "2rem",
                  }}
                />
                msumba83@gmail.com
              </h4>
            </div> */}
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
