import React from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import "./sass/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Weather apiKey={process.env.REACT_APP_OWM_KEY} query="Kyoto" />
    </div>
  );
}

export default App;
