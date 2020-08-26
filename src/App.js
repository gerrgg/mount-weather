import React from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import "./sass/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Weather apiKey={process.env.REACT_APP_OWM_KEY} query="Petoskey" />
      <Footer />
    </div>
  );
}

export default App;
