import React from 'react'
import "./Offer.css";
import exclusive_img from "../Assets/Frontend_Assets/exclusive_image.png";
function Offer() {
  return (
    <div className='offers'> 
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_img} alt="Exclusive Offer" />
        </div>
    </div>
  )
}

export default Offer
