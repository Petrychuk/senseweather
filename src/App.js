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
          This project was coded by Nataliia (Sense Power Digital).
          <a href="https://github.com/Petrychuk/senseweather" target="_blank" rel="noreferrer">Open-soursed on GitHub.</a>
        </footer>
      </div>
    </div>
  );
}
