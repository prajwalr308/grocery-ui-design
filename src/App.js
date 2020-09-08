
import React from 'react';
import './App.css';
import ham from'./images/Shape.png';
import exit from './images/exit.svg';
import logo from './images/Logo.png'
import Banner from './components/banner/banner';
import Moreinfo from './components/moreinfo/moreinfo';
import QuickSearch from './components/QuickSearches/QuickSearch';
import Working from './components/working/Working';
import About from './components/about/About';
import Footer from './components/footer/Footer';


function App() {
  const openMenu =()=>{
  document.getElementById('nav').classList.toggle('hide-mobile');
  
}
const exitMenu =(e)=>{
  document.getElementById('nav').classList.add('hide-mobile');
 
}
  return (
    <div>
      <div className="header">
<img src={logo} className="logo"/>
<div className="nav">
      
    <a href="#" className="hide-desktop" onClick={openMenu}>
      <img src={ham} alt="toggle menu" className="menu" id="menu"  />
    </a>
    <ul className="show-desktop hide-mobile" id="nav">
      <li id="exit" className="exit-btn hide-desktop">
        <img src={exit} alt="exit" onClick={exitMenu} className="exit" />
      </li>
       <li>
        <a href="#login">login</a>
      </li>
      <li>
        <a href="#signup">signup</a>
      </li>
   
    </ul>
  </div>
  
    </div>
   
    <Banner />
    <Moreinfo />
    <QuickSearch />
    <Working />
    <About />
    <Footer />
    </div>
    
    
   
   
  )
}

export default App
