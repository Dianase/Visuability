import React from 'react';
import Visuability_Logo from '../../assets/img/Visuability_Logo';

import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Visuability_Logo} className="App-logo" alt="logo of an eye looking up makes up the V for visuability and megaphone at the end of word" />
        <p>
        <code>Visuability</code> 
        </p>
      </header>
    </div>
  );
};

export default Popup;
