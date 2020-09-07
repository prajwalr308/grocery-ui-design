import React from 'react';
import flogo from './images/Logo.png'
import './footer.css';
import apple from './images/apple.png';
import google from './images/google play.png';
import insta from './images/instagram.png';
import facebook from './images/facebook (2).png';
import twitter from './images/twitter.png';
import you from './images/Shape.png';


function Footer() {
    return (
        <div className="footer">
            <div className="footerflex">
            <div>
            <img src={flogo} />
            <div> <a href="#"> Help Center </a></div>
            <div><a href="#">Engdivsh (International)</a></div>
            </div>
        <div><h2><a href="#">About us</a></h2>
            
            <div><a href="#">My Account</a></div>
            <div><a href="#">Categories</a></div>
            <div><a href="#">Cities</a></div>
            <div><a href="#">Become a Partner</a></div>
            <div><a href="#">Blog</a></div>
            <div><a href="#">Careers</a></div></div>
            
          <div>
          <h2>Questions?</h2>
            
            <div><a href="#">Frequently Asked Questions</a></div>
            <div><a href="#">Contact Us</a></div>
           
        
        <img src={apple} />
        <img src={google} className="g" /><div></div>
        <img src={insta} className="i" />
        <img src={facebook} className="f" />
        <img src={twitter} className="t" />
        <img src={you} className="y" />
          </div>

            </div>
            
            <div className="finalflex">
            <div><a href="#">Privacy</a></div>
                <div><a href="#">Accessibility</a></div>
                <div><a href="#">Terms</a></div>
        
            
                <div><a href="#">© 2020 Appening Infotech Pvt Ltd</a></div>
            </div>
           

            
        </div>
    )
}

export default Footer
