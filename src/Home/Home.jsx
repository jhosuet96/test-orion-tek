import React from 'react';
import logo from '../Home/logo.svg';
import  '../Home/App.css'; 

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color:'black'}}> 
         Prueba Orion Teck
        </p>
        <a
          className="App-link"
          href="https://www.oriontek.do/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
