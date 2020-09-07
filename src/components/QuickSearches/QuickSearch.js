import React from 'react'
import './quick.css'
import grocery from "./images/1_Grocery & Staples.png";
import vegetables from "./images/2_Vegetables & Fruits.png";
import care from "./images/3_Personal Care.png";
import home from "./images/4_Home & Kitchen.png";
import bevarage from "./images/5_Beverages.png";


function QuickSearch() {
    return (
        <div className="quick">
            <div className="needsText">
            <div >Here’s what you need</div>
            <h1 className="quicks">Quick Searches</h1>
            </div>
            
            <div className="flexsearch">
            <img src={grocery} className="grocery"/><div></div>
            <img src={vegetables} className="vegetables"/><div></div>
            <img src={care} className="care"/><div></div>
            <img src={home} className="home"/><div></div>
            <img src={bevarage} className="bevarage" /><div></div>
            </div>
           
            
            
        </div>
    )
}

export default QuickSearch
