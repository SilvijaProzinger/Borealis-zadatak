import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, hide }) => isOpen ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h3>Konfigurator servisa</h3>
          <button className="close-button" onClick={hide}>X</button>
        </div>
        <h4>
          Korak 1. Odaberite proizvođača vašeg vozila
        </h4>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;