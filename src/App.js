import React from "react";
import { UnitProvider } from "./UnitContext";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <div className="container">
        <UnitProvider>
          <Weather defaultCity="London" defaultCountryCode="GB"/>
        </UnitProvider>
        <footer>
          <a href="https://github.com/Hezaa123/weather-app-react" target="_blank" rel="noreferrer">Open-source code </a>
          by 
          <a href="https://www.linkedin.com/in/heather-kirwan-581a4580/" target="_blank" rel="noreferrer"> Heather Kirwan</a>
        </footer>
      </div>
    </div>
  );
}
