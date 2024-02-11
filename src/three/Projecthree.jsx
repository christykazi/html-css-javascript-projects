import React from 'react'
import "./projecthree.css"
import LOGO from "./../images/logo.png"
import CARTT from "./../images/cart.png"
import ARROW from "./../images/back-arrow.png"
import NEXT from "./../images/next-arrow.png"
import GIRL from "./../images/img.png"


const Projecthree = () => {
  return (
    <div className='container'>
    <div className="navba">
      <img src={LOGO}  className='logo' alt='water'/>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Collections</a></li>
          <li><a href="">Category</a></li>
        </ul>
      </nav>
      <img src={CARTT}  className='cart' alt='wat'/> 
    </div>
    <div className="conten">
      <a href="" className='btn'>2023 collections</a>
      <h1>I always feel pretty</h1>
      <p>Feeling good is a good business. you are what you believe that you are.</p>
<p>feeling </p>
      <div className="arrow-icons">
        <img src={ARROW} alt="" />
        <img src={NEXT} alt="" />
      </div>
    </div>
    <img src={GIRL} className='feature-img' />
    <div className="social-link">
      <a href="">FACEBOOK</a>
      <a href="">INSTAGRAM</a>
      <a href="">TWITTER</a>
<div className="div facebook">
  welcome
</div>
    </div>
    </div>
  )
}

export default Projecthree