import React from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './Component/Course/Course';
import Header from './Component/Header/Header';



function App() {   
  return (
    <div className="App">      
      <Header></Header>
      <Course></Course>
    </div>
  );
}

export default App;
