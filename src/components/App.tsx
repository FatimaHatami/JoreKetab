import React from 'react';
import './App.scss';
import Header from './header/Header';
import logo from '../assets/images/Logo.png';
import ScrollUpButtton from './buttons/ScrollUpButton';

function App() {
  return (
    <div className="App">
      <Header Logo={logo}/>
      <ScrollUpButtton/>
    </div>
  );
}

export default App;
