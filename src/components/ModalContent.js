import React, { useState, useEffect } from 'react';
import Proizvodjac from './Proizvodjac.js';
import Usluga from './Usluga.js';
import KontaktPodaci from './KontaktPodaci.js';
import PotvrdaOdabira from './PotvrdaOdabira.js';
import PrijavaPoslana from './PrijavaPoslana.js';

function ModalContent() {
 const [step, setStep] = useState(1)
 const [selectedOption, setOption] = useState({ 
 	proizvodjac: '', 
 	//radioButton: '',
 	cijena: 0, 
 	checked: [], 
 	//checkBoxes: [],
 	kuponValue: '', 
 	ime: '', 
 	telefon: '', 
 	email: '', 
 	napomena: ''
 })

 const { cijena, checked } = selectedOption
 const [checkedOption, setChecked] = useState([])

 const [kuponInput, setInput] = useState(false)
 const [kuponAlert, setKuponAlert] = useState('')


 const nextStep = () => {
    setStep(step + 1)
    console.log(step)
 }

 const prevStep = () => {
    setStep(step - 1)
    console.log(step)
 }

 const goToStep = (section) => {
 	setStep(section)
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

 	//if the value is selected add it or if it's unselected subtract it from total object
	if (event.target.type === 'checkbox' && event.target.checked){
		setOption(selectedOption => ({
			...selectedOption, 
			cijena: cijena + parseInt(value), 
			checked: [...checked, usluga]
		}))
		setChecked([...checkedOption, value])
	} else {
		setOption(selectedOption => ({
			...selectedOption, 
			cijena: cijena - parseInt(value), 
			checked: checked.filter(item => item !== usluga)
		}))
		setChecked(checkedOption.filter(item => item !== value))
	}
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
    console.log(selectedOption, 'checked prices:', checkedOption, 'checked services:', checked ); 
  }, [selectedOption, checkedOption, checked]);

 const props = {  step, nextStep, prevStep, handleOptionChange, selectedOption, checkedOption, handleCheckbox, cijena, kuponInput, openKuponInput, handleKuponChange, checkKuponValue, kuponAlert, handleContactInfo, goToStep }

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
 	case 5: 
 		return <PrijavaPoslana />
 	default:
 		return null
 }

}

export default ModalContent;