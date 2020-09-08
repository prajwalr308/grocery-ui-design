import React from 'react';
import bg from './images/BG.png';
import './banner.css';
import loc from "./images/loc.png";
import loc2 from "./images/loc2.png";

function Banner() {
    return (
        <div>
            <div className="banner">
             
           <img src={bg} alt="bg" className="bg" />
          
           <h1 className="title">Stay Home  We’ll Deliver </h1>
           <p className="subtitle">Get your groceries delivered in less than an hour</p>
           <div className="s">
           <input className="search" placeholder="Search for a location"></input>
           </div>
           
           <img src={loc} alt="loc" className="location" />
           <img src={loc2} alt="loc2" className="location2" />

           </div>
           

           
              
                 
              
           
        </div>
    )
}

export default Banner
