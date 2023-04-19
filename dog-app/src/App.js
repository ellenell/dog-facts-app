import React, { useState, useEffect } from 'react'
import './App.css';
import DogFactContainer from "./DogFactContainer.js"
import DogFactDisplay from './components/DogFactDisplay.js';

const App = () => {


  return (
    <div className="App">
      <DogFactContainer />
    </div>
  );
}

export default App;
