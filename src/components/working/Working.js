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
            <img src={phone} alt="ph" /><div></div>
            <img src={digit} alt="digit" />

            <div>
                <h3>Request in the app</h3>
                <h5>Set your delivery location, Choose your groceries from a wide range of 5000+ products.</h5>
                
            </div>
            <img src={apple} alt="apple" />
            <img src={google} alt="google" className="google"/> <div></div>
            <div className="reverseflex">
            <img src={schedule} alt="schedule" className="schedule" /><div></div>
           

                <div>
                <img src={digit2} alt="di2" />
                    <h3>Schedule and Pay</h3>
                    <h5>Schedule the delivery at your convenient time and pay digitally</h5>
    
                </div>
            </div>
            
           <div className="rateflex"> 
           <img src={rate} className="rate" alt="rate" /><div></div>
            

            <div className="ratetext">
            <img src={digit3} alt="di3" />
                <h3>It’s delivered and Rate us</h3>
                <h5>Collect groceries at your doorstep and tell us about our service</h5>
                
            </div>
           </div>
           
            
            
        </div>
    )
}

export default Working
