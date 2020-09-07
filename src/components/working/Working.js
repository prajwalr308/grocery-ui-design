import React from 'react';
import phone from './images/illustration.png';
import digit from "./images/Group 18.png";
import apple from './images/apple.png';
import google from './images/google play.png'
import schedule from './images/illustration2.png'
import rate from './images/illustration3.png'
import digit2 from './images/two.png'
import digit3 from './images/three.png'
import './work.css';

function Working() {
    return (
        <div className="working">
           <div>
                <p>Get delivered in 3 easy steps</p>
                <h1 className="worktext">Here's how it works</h1>

            </div>
            <img src={phone} /><div></div>
            <img src={digit} />

            <div>
                <h2>Request in the app</h2>
                <h4>Set your delivery location, Choose your groceries from a wide range of 5000+ products.</h4>
                
            </div>
            <img src={apple} />
            <img src={google} className="google"/> <div></div>
            <div className="reverseflex">
            <img src={schedule} className="schedule" /><div></div>
           

                <div>
                <img src={digit2} />
                    <h2>It’s delivered and Rate us</h2>
                    <h4>Collect groceries at your doorstep and tell us about our service</h4>
    
                </div>
            </div>
            
           <div className="rateflex"> 
           <img src={rate} className="rate" /><div></div>
            

            <div className="ratetext">
            <img src={digit3} />
                <h2>It’s delivered and Rate us</h2>
                <h4>Collect groceries at your doorstep and tell us about our service</h4>
                
            </div>
           </div>
           
            
            
        </div>
    )
}

export default Working
