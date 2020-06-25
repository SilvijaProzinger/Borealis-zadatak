import React, { useState } from 'react';
import Modal from './components/Modal.js';
import useModal from './components/useModal.js';
import './App.css';

function App() {
  const { isOpen, toggle } = useModal()
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" alt="" src="https://www.tokic.hr/wp-content/uploads/2018/09/tokic-logo.jpg"/>
        <div className="header-text">
          <h2>Konfigurator servisa</h2>
          <h3>Izračunajte trošak servisa</h3>
        </div>
      </header>
      <div className="central-content">
        <p>Pritisnite gumb niže kako biste pokrenuli konfigurator</p>
        <button className="run-button" onClick={toggle}>Pokreni konfigurator</button>
      </div>
      <Modal
        isOpen={isOpen}
        hide={toggle}
      />
    </div>
  );
}

export default App;
