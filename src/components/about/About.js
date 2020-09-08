import React from 'react'
import './about.css';
import box from "./images/1_Icon.png";
import track from "./images/2_Icon.png";
import bike from "./images/3_Icon.png";
import people from './images/Images.png';
import partner from './images/Button.png'



function About() {
    return (
        <div className="about">
            <p>Why Choose Fresh Grocery</p>
            <h3>Because we are in it together</h3>
            <div className="aboutflex">
                <div><img src={box} alt="box" /><div></div>
           

           <div>
               <h4>No Minimum Order</h4>
               <p>No order value restrictions, Order for yourself or your group</p>
               
           </div></div>
            <div>
            <img src={track} alt="track" /><div></div>
          

          <div>
              <h4>Live Order Tracking</h4>
              <p>Track your order anytime from the store to your doorstep</p>
              
          </div>
            </div>
          <div>
          <img src={bike} alt="bike" /><div></div>
          

          <div>
              <h4>24 x 7 delivery</h4>
              <p>Order anytime, anywhere. We will get you delivered</p>
              
          </div>
          </div>
           
            </div>
            
            <div className="roundbox">
            <img src={people} alt="people" /><div></div>
           

           <div className="rtext">
               <h4>Become a Partner and start earning!</h4>
               <p>You can login and logout whenever you want! No mandatory timings!</p>
               <img src={partner} alt="partner" className="partner" />
               
           </div>
            </div>
           
        </div>
    )
}

export default About
