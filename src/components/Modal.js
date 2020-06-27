import React from 'react';
import ReactDOM from 'react-dom';
import ModalContent from './ModalContent.js';

const Modal = ({ isOpen, hide }) => isOpen ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h2>Konfigurator servisa</h2>
          <button className="close-button" onClick={hide}>X</button>
        </div>
        <ModalContent />
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;