import React from "react";
import Weather from "./Components/Weather/Weather";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />
        <footer>
          This project was coded by Nataliia Petrychuk (Sense Power Digital).
          <a href="https://github.com/Petrychuk/senseweather" target="_blank" rel="noreferrer">Open-soursed on GitHub.</a>
          and <a href="https://sense-weather.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}
