import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Add from './Components/Add/Add';
import DailyVideos from './Components/DailyVideos/DailyVideos';

function App() {
  return (
    <div className="App">
          <Header/>
          <Add/>
          <DailyVideos/>
        </div>
  );
}

export default App;
