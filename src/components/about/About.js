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
            <h1>Because we are in it together</h1>
            <div className="aboutflex">
                <div><img src={box} /><div></div>
           

           <div>
               <h2>It’s delivered and Rate us</h2>
               <h4>Collect groceries at your doorstep and tell us about our service</h4>
               
           </div></div>
            <div>
            <img src={track} /><div></div>
          

          <div>
              <h2>It’s delivered and Rate us</h2>
              <h4>Collect groceries at your doorstep and tell us about our service</h4>
              
          </div>
            </div>
          <div>
          <img src={bike} /><div></div>
          

          <div>
              <h2>It’s delivered and Rate us</h2>
              <h4>Collect groceries at your doorstep and tell us about our service</h4>
              
          </div>
          </div>
           
            </div>
            
            <div className="roundbox">
            <img src={people} /><div></div>
           

           <div className="rtext">
               <h2>Become a Partner and start earning!</h2>
               <h4>You can login and logout whenever you want! No mandatory timings!</h4>
               <img src={partner} />
               
           </div>
            </div>
           
        </div>
    )
}

export default About
