import React from "react";
import MarvelImg from '../media/187551-captain-america-1440x829.jpg'
import MarvelLogo from '../media/logo.jpg'
import { Cards } from "./Cards";




export const Main = () => {
  return (
    <>
    
    <div className="header">
      
      <div className="py">
        <img src={MarvelImg} alt="" />
      </div>
      <div className="search-bar">
        <img src={MarvelLogo} alt="logo"/>
        <input type="search" placeholder="Search Information" 
        className="search"/>
      </div>

      <div className="content">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />

      </div>

      
    </div>
    

    
    </>
  );
}