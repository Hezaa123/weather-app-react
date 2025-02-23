import React from "react";
import { UnitProvider } from "./UnitContext";
import { AppContainer, Footer } from "./app.styles";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  //UnitProvider wraps all the logic for handling & and updating the state, then pushes the different values out to the children
  return (
    <AppContainer>
      <div className="container">
        <UnitProvider>
          <Weather defaultCity="London" defaultCountryCode="GB"/>
        </UnitProvider>
        <Footer>
          <a href="https://github.com/Hezaa123/weather-app-react" target="_blank" rel="noreferrer">Open-source code </a>
          by 
          <a href="https://www.linkedin.com/in/heather-kirwan-581a4580/" target="_blank" rel="noreferrer"> Heather Kirwan</a>
        </Footer>
      </div>
    </AppContainer>
  );
}
