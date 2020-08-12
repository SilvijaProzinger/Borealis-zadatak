import React from 'react';

const proizvodjaci = ['Peugeot', 'Volkswagen', 'Citroen', 'Audi', 'BMW', 'Seat', 'Alfa Romeo', 'Kia', 'Hyundai', 'Honda', 'Toyota']

const Proizvodjac = ({ handleOptionChange, selectedOption, prevStep, nextStep }) => {
  return (
    <>
    <h3 className="step-title">Korak 1. Odaberite proizvođača vašeg vozila</h3>
    <div className="proizvodjac-forma">
    {/* map through proizvodjaci array and create radio buttons */ }
      {proizvodjaci.map(function(proizvodjac){
        return <label className="proizvodjac-option" key={proizvodjac}>
          <input type="radio"
            value={proizvodjac}
            name="proizvodjaci"
            key={proizvodjac}
            onChange={handleOptionChange}
          />
          {proizvodjac}
        </label> 
      },this)}
    </div>
    <div className="navigation-buttons">
      {selectedOption ? <button className="navigation-button" onClick={nextStep}>Dalje</button> : 
      <button className="unclickable-button">Dalje</button>
      }
    </div>
    </>
  );
}

export default Proizvodjac;