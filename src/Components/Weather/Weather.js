import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css";

export default function Weather() {
   
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                       <input type="search" 
                        placeholder="Find your city..."
                        className="form-control" />
                    </div>
                    <div className="col-3">
                       <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <h1>Sydney, NSW, Australia</h1>
            <ul>
                <li>Wednesday 2:00 pm</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" />
                    16°C | °F
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 9%</li>
                        <li>Humidity: 68%</li>
                        <li>Wind: 26 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}