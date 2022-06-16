import "./pricingCards.css";

import React from 'react'
import { Link } from "react-router-dom";

const PricingCards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>-- DIAMOND --</h3>
          <span className="bar"></span>
          <p className="btc">R 1000</p>
          <p>-- 3 Days --</p>
          <p>Three Pages</p>
          <p>Featured</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-- SILVER --</h3>
          <span className="bar"></span>
          <p className="btc">R 1000</p>
          <p>-- 3 Days --</p>
          <p>Three Pages</p>
          <p>Featured</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-- GOLD --</h3>
          <span className="bar"></span>
          <p className="btc">R 1000</p>
          <p>-- 3 Days --</p>
          <p>Three Pages</p>
          <p>Featured</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCards