import React, { useState, useEffect } from 'react';
import Proizvodjac from './Proizvodjac.js';
import Usluga from './Usluga.js';

function ModalContent() {
 const [ step, setStep ] = useState(1)
 const [ selectedOption, setOption ] = useState()

 const nextStep = () => {
    setStep(step + 1)
    console.log(step)
 }

 const prevStep = () => {
    setStep(step - 1)
    console.log(step)
 }

 //update selected option to be the value of event target
 const handleOptionChange = (event) => {
 	let value = event.target.value
	setOption({selectedOption: value});
 }

 //log out the value of selected option since setOption is async operation
  useEffect(() => {
    console.log(selectedOption); 
  }, [selectedOption]);

 const props = {  nextStep, prevStep, handleOptionChange, selectedOption }

 {/* conditional switch statement will let us render the modal content step by step */}
 switch(step) {
 	case 1: 
 		return <Proizvodjac {...props} />
 	case 2: 
 		return <Usluga {...props} />
 	default:
 		return null
 }

}

export default ModalContent;