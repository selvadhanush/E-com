import React from 'react'
import "./NewsLetter.css";
function NewLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your E-mail</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type='email' placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter
