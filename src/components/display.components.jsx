import React from 'react';
import './display.styles.css';
export const Display=(props)=>{
    console.log(props);
    const {location,country,region,temperature,description,wind_speed,pressure,humidity,precip}=props.weatherdata;
    
       return(
        <div>
          <div className="major-info">
            <p className="temp">{  temperature} °C , {description}</p>
            <h1>{location}</h1>
            <p className="country-region">{region} , {country}</p>
            
          </div>


           <div className="minor-info">
              
              <h2>Wind Speed <br></br> {wind_speed}   </h2> 
              <h2>Pressure  <br></br> {pressure}   </h2> 
              <h2>Humidity  <br></br> {humidity}  </h2> 
              <h2>Precip <br></br> {precip}  </h2>           
           </div>
        </div>
          
       )
    
    
    
    
    
    }
