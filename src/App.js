import React from 'react';
import Header from './components/Header'
import Weather from './components/Weather'
import './sass/app.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Weather apiKey='f49ab69788385465860411f295879340' />

    </div>
  );
}

export default App;
