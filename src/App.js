import React from 'react';
import './style.css';
import { Weather } from './Weather';


function App() {
  return (
    <div className="container">
      <h1 className="title"> Weather App </h1>
      <Weather />      
    </div>
  );
}

export default App;
