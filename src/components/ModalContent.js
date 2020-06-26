import React, { useState } from 'react';
import Proizvodjac from './Proizvodjac.js'

function ModalContent() {
 const [ step, setStep ] = useState(1)

 const nextStep = () => {
    setStep(step + 1)
    console.log(step)
 }

 const prevStep = () => {
    setStep(step - 1)
    console.log(step)
 }

  return (
    <div>
      <Proizvodjac />
      <div className="navigation-buttons">
        <button className="navigation-button" onClick={nextStep}>Nazad</button>
        <button className="navigation-button" onClick={nextStep}>Dalje</button>
      </div>
    </div>
  );
}

export default ModalContent;