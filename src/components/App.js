import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

// klucz do API: 
const APIkey = '995f07ec53007d3b26c951d21ce9c543';

class App extends Component {
  state = {
    value: "",
    icon: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    wind: "",
    pressure: "",
    timezone: "",
    err: false,
  }



  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok === true) {
          return response
        } throw Error("Nie udało się pobrać danych. Spróbuj ponownie póżniej...")
      })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          err: false,
          city: prevState.value,
          icon: data.weather[0].icon,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          wind: data.wind.speed,
          pressure: data.main.pressure,
          timezone: data.timezone,
          value: "",
        }))

      })
      .catch(err => {
        console.log(err);

        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <h1>Aplikacja Pogodowa</h1>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weatherData={this.state} />
      </div>
    );
  }
}

export default App;
