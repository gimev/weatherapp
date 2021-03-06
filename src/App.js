import React, { Component } from 'react';
import './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import WeatherLocation from './components/WeatherLocation';
import {purple, pink} from '@material-ui/core/colors';
import { light } from '@material-ui/core/styles/createPalette';

//funcion q me va a permitir crear themes
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: pink,
  },
  typography:{
    useNextVariants:true
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
        <nav className="navbar-top">
          The Weather App
        </nav>
        <div className="container">
         <WeatherLocation
         city="Salta"
         currentTemp={30}
         maxTemp={20}
         minTemp={15}
         />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
