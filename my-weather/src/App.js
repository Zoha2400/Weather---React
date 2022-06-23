import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Add from './Components/Add/Add';

function App() {
  return (
    <div className="App">
        <div className='Container'>
        <Header/>
        <Add/>
        </div>
    </div>
  );
}

export default App;
