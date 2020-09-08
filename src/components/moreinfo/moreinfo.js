import React from 'react'
import './moreinfo.css'
import button from './images/Button.png'
import illustration from './images/illustration.png'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'

function Moreinfo() {
    return (
        <div >
            <div className="moreinfo">
            <div className="flex">
                <div className="items">
                <p className="safety">#GroceryDeliveredSafetly</p>
            <h1 className="hygene">Hygenically</h1>
            <h1 className="packed">packed,</h1>
            <img src={button} alt="button" className="button" />
                </div>
          
        
            
           
           <img src={illustration} alt="illust" className="illustration" />
            </div>
            
            <div className="art">

            <img src={one} alt="one" />
            <img src={two} alt="two" className="two"/>
            <img src={three} alt="three" className="three" />
            </div>
            

            </div>
            
            
        </div>
    )
}

export default Moreinfo
