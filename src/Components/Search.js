import React, { useState } from "react";
import Temperature from "./Temperature";

export default function Search() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setSubmittedCity(city);
    } else {
      alert("Enter your city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search">
        <input
          type="search"
          placeholder="Search for a city.."
          onChange={updateCity}
          autoFocus={true}
          autoComplete="off"
        />
        <input type="submit" value="Search" />
      </form>
      <br />
      {submittedCity && (
        <div className="result">
          <strong>Forecast in {submittedCity} are:</strong>
          <Temperature city={submittedCity} />
        </div>
      )}
    </div>
  );
}