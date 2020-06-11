import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Display } from './components/display.components.jsx';
import {Header} from './components/header.components.jsx';

class App extends React.Component {
  state = {
    coords: {
      latitude: 19,
      longitude: 72
    },
    weatherdata: {},
    searchField:''
  }

  componentDidMount() {
    //get device location
    if (navigator.geolocation) {
      console.log("supported");
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.setState({ coords: newCoords });
        const url = `http://api.weatherstack.com/current?access_key=919f4781318438f28a95f2d32a6df769&query=${this.state.coords.latitude},${this.state.coords.longitude}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            let weatherinfo = {
              location: data.location.name,
              country: data.location.country,
              region: data.location.region,
              temperature: data.current.temperature,
              description: data.current.weather_descriptions[0],
              wind_speed: data.current.wind_speed,
              pressure: data.current.pressure,
              humidity: data.current.humidity,
              precip: data.current.precip,

            }
            this.setState({ weatherdata: weatherinfo });
          }

          )
      }

      )
    }
    else {
      console.log("not supported");
    }
  }
   handleChange=(input)=>{
    this.setState({searchField:input});
   

  }

  changeWeather=(e)=>{
    e.preventDefault();
    const url = `http://api.weatherstack.com/current?access_key=919f4781318438f28a95f2d32a6df769&query=${this.state.searchField}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let weatherinfo = {
          location: data.location.name,
          country: data.location.country,
          region: data.location.region,
          temperature: data.current.temperature,
          description: data.current.weather_descriptions[0],
          wind_speed: data.current.wind_speed,
          pressure: data.current.pressure,
          humidity: data.current.humidity,
          precip: data.current.precip,

        }
        this.setState({ weatherdata: weatherinfo });
      }

      )
  }


  render() {
    
    
    
    return (
      <div className="App">
          <Header handleChange={(e)=>this.handleChange(e.target.value)} changeWeather={this.changeWeather}/>
          <Display weatherdata={this.state.weatherdata} />
        </div>
    );
  }

}

export default App;
