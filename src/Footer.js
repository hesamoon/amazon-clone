import React from 'react'
import './styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div id='fc1' className='footer__contents'>
          <h4>Get to Know Us</h4>
          <div className='footer__accessibility'>
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
          </div>
        </div>

        <div id='fc2' className='footer__contents'>
          <h4>Make Money with Us</h4>
          <div className='footer__accessibility'>
            <p>Sell products on Amazon</p>
            <p>Sell on Amazon Business</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
          </div>
        </div>
        
        <div id='fc3' className='footer__contents'>
          <h4>Amazon Payment Products</h4>
          <div className='footer__accessibility'>
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
          </div>
        </div>
        
        <div id='fc4' className='footer__contents'>
          <h4>Let Us Help You</h4>
          <div className='footer__accessibility'>
            <p>Amazon and COVID-19</p>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
          </div>
        </div>
      </div>

      <div className='footer__copyright'>
        <h5>© Amazon 2023</h5>
      </div>
    </div>
  )
}

export default Footer
