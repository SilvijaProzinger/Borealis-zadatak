import React, { useState, useEffect } from 'react';
import Proizvodjac from './Proizvodjac.js';
import Usluga from './Usluga.js';
import KontaktPodaci from './KontaktPodaci.js';
import PotvrdaOdabira from './PotvrdaOdabira.js';

function ModalContent() {
 const [step, setStep] = useState(1)
 const [selectedOption, setOption] = useState({ proizvodjac: '', cijena: 0, checked: [], kuponValue: '', ime: '', telefon: '', email: '', napomena: ''})

 //const [total, setTotal] = useState({ cijena: 0, checked: [] })
 const { cijena, checked } = selectedOption
 const [checkedOption, setChecked] = useState([])

 const [kuponInput, setInput] = useState(false)
 //const [kuponValue, setKuponValue] = useState('')
 const [kuponAlert, setKuponAlert] = useState('')

 //const [contactInfo, setContactInfo] = useState({ ime: '', telefon: '', email: ''})

 const nextStep = () => {
    setStep(step + 1)
    console.log(step)
 }

 const prevStep = () => {
    setStep(step - 1)
    console.log(step)
 }

 //update selected option to be the value of event target
 const handleOptionChange = event => {
 	let value = event.target.value
	setOption({...selectedOption, proizvodjac: value});
 }

 const handleCheckbox = event => {
 	//get value of checked box
	let value = parseInt(event.target.value, 10)
	let usluga = event.target.name
 	console.log(value)

 	//save all checked values and find index of selected/unselected checkbox in values array
 	let values  = [ checkedOption ] 	
 	let index = values.indexOf(usluga)
 	console.log(index)

 	//if the value is selected add it or if it's unselected subtract it from total object
	if (event.target.type === 'checkbox' && event.target.checked){
		setOption({ ...selectedOption, cijena: cijena + parseInt(value), checked: [...checked, usluga] })
		setChecked(values => [...values, value])
	} else {
		setOption({ ...selectedOption, cijena: cijena - parseInt(value), checked: checked.filter(id => id !== index) })
		setChecked(values => [...values, value])
	}

 	/*if (event.target.type === 'checkbox' && event.target.checked){
 		setChecked(values => [...values, value])
 	} else {
 		let index = values.indexOf(value)
 		if (index > -1){
 			values.splice(index, 1)
 			setChecked({checkedOption: values})
 		}
 		//totalVal -= parseInt(value, 10)
 	}
 	let reducer = (total, amount) => total + amount
 	let totalVal = values.reduce(reducer)
 	console.log('total:', totalVal)
 	setTotal({total: totalVal})
 	*/
 }

const openKuponInput = event => {
	setInput(true)
}

const handleKuponChange = event => {
	setOption({ ...selectedOption, kuponValue: event.target.value})
}

const checkKuponValue = event => {
	if (selectedOption.kuponValue === 'Tokic123'){
		setOption({ ...selectedOption, cijena: cijena - (cijena * 30 / 100)})
		setKuponAlert('Čestitamo! Ostvarili ste 30% popusta!')
		setInput(false)
	} else {
		setKuponAlert('Molimo unesite ispravni kupon!')
		setOption({...selectedOption, kuponValue: ''})
	}
}

const handleContactInfo = event => {
	let value = event.target.value
	setOption({
		...selectedOption,
		[event.target.name]: value
	})
}

 //log out the value of selected option since setOption is async operation
  useEffect(() => {
    console.log(selectedOption, selectedOption.checked); 
  }, [selectedOption, selectedOption.checked]);

 const props = {  step, nextStep, prevStep, handleOptionChange, selectedOption, handleCheckbox, cijena, kuponInput, openKuponInput, handleKuponChange, checkKuponValue, kuponAlert, handleContactInfo }

 {/* conditional switch statement will let us render the modal content step by step */}
 switch(step) {
 	case 1: 
 		return <Proizvodjac {...props} />
 	case 2: 
 		return <Usluga {...props} />
 	case 3:
 		return <KontaktPodaci {...props} />
 	case 4:
 		return <PotvrdaOdabira {...props} />
 	default:
 		return null
 }

}

export default ModalContent;