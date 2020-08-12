import React, { useState, useEffect } from 'react';
import Proizvodjac from './Proizvodjac.js';
import Usluga from './Usluga.js';

function ModalContent() {
 const [step, setStep] = useState(1)
 const [selectedOption, setOption] = useState()

 const [total, setTotal] = useState({ cijena: 0, checked: [] })
 const { cijena, checked } = total
 const [checkedOption, setChecked] = useState([])

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

 const handleCheckbox = (event) => {
 	//get value of checked box
	let value = parseInt(event.target.value, 10)
 	console.log(value)

 	//save all checked values and find index of selected/unselected checkbox in values array
 	let values  = [ checkedOption ] 	
 	let index = values.indexOf(value)
 	console.log(index)

 	//if the value is selected add it or if it's unselected subtract it from total object
	if (event.target.type === 'checkbox' && event.target.checked){
		setTotal({ cijena: cijena + parseInt(value), checked: [...checked, value] })
		setChecked(values => [...values, value])
	} else {
		setTotal({ cijena: cijena - parseInt(value), checked: checked.filter(id => id !== index) })
		setChecked(values => [...values, value])
	}
 }

 //log out the value of selected option since setOption is async operation
  useEffect(() => {
    console.log(selectedOption, checkedOption, cijena); 
  }, [selectedOption, checkedOption, cijena]);

 const props = {  nextStep, prevStep, handleOptionChange, selectedOption, handleCheckbox, checkedOption, cijena }

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