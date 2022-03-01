import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Washington DC" />
        <footer>
          <a
            href="https://github.com/mburucuya24/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>{" "}
          by Pauline Hwang
        </footer>
      </div>
    </div>
  );
}

export default App;
