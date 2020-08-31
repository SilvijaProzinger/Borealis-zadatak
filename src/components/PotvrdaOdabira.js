import React from 'react';

const PotvrdaOdabira = ({ prevStep, nextStep, step, goToStep, selectedOption, checkedOption, cijena }) => {
  return (
    <>
      <h3 className="step-title">Korak 4. Pregled i potvrda vašeg odabira</h3>
      <h4 className="explanation" style={{textAlign: 'justify'}}>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neke od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis.</h4>
      <div className="edit-forma">
        <div>
          <h3>MODEL VOZILA</h3><button className="navigation-button" onClick={() => goToStep(1)}>Edit</button>
          <p>{selectedOption.proizvodjac}</p>
        </div>
        <div>
          <h3>ODABRANE USLUGE</h3><button className="navigation-button" onClick={() => goToStep(2)}>Edit</button>
          <div className="edit-usluge">
            <div>
              {selectedOption.checked.map(function(usluga){
                return <div key={usluga}><h4>{usluga}</h4></div>
              })}
            </div>
            <div>
              {checkedOption.map(function(price){
                return <div style={{textAlign: 'right'}} key={price}><h4>{price}</h4></div>
              })}
              <div style={{textAlign: 'right'}}>
              {selectedOption.kuponValue ? 
                <div><p>Popust (30%): {cijena * 30 / 100}</p><p>UKUPNO: {selectedOption.cijena}</p></div>
                : <p style={{fontWeight: 'bold'}}>UKUPNO: {selectedOption.cijena}</p>
              }
            </div>
            </div>
         </div>
        </div>
      </div>
      <div className="edit-kontakt">
        <h3>KONTAKT PODACI</h3><button className="navigation-button" onClick={() => goToStep(3)}>Edit</button>
        <div className="edit-podaci">
          <p><h4>Ime i prezime:</h4> {selectedOption.ime}</p>
          <p><h4>Broj telefona:</h4> {selectedOption.telefon}</p>
          <p><h4>Email adresa:</h4> {selectedOption.email}</p>
          <p><h4>Napomena:</h4> {selectedOption.napomena}</p>
        </div>
      </div>
      <div className="navigation-buttons">
        <button className="navigation-button" onClick={prevStep}>Nazad</button>
        <button className="navigation-button" onClick={nextStep}>Pošalji</button>
      </div>
    </>
  );
}

export default PotvrdaOdabira;
