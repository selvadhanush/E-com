import React from 'react'
import "./Hero.css";
import hand_icon from "../Assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../Assets/Frontend_Assets/arrow.png";
import hero_img from "../Assets/Frontend_Assets/hero_image.png";

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="New Arrival" />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
      <div className="hero-right">
        <img src={hero_img} alt="Hero"/>
      </div>
    </div>
  )
}

export default Hero
