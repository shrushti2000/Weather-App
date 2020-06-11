import React from 'react';
import './header.styles.css';
export const Header =(props)=>{
    return(
        <div className="header">
        <p className="heading">Weather App</p>
        <form onSubmit={(e)=>{props.changeWeather(e)}}>
        <input className="input" text="search" onChange={props.handleChange} placeholder="Search place.."></input>
      
        </form>
          </div>
    )
}