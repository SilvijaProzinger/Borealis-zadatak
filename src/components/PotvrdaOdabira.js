import React from 'react';

const PotvrdaOdabira = ({ prevStep, nextStep, step, selectedOption }) => {
  const { go } = step
  return (
    <>
      <h3 className="step-title">Korak 4. Pregled i potvrda vašeg odabira</h3>
      <h4 className="explanation">Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neke od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis.</h4>
      <div className="edit-forma">
        <div>
          <h3>MODEL VOZILA</h3>
          <p>{selectedOption.proizvodjac}</p>
        </div>
        <div>
          <h3>ODABRANE USLUGE</h3>
          <div className="edit-usluge">
            <p>{selectedOption.checked}</p>
            <p>{selectedOption.cijena}</p>
            <p>Popust (30%): -250 kn</p>
            <p>UKUPNO: {selectedOption.cijena}</p>
          </div>
        </div>
      </div>
      <div>
        <h3>KONTAKT PODACI</h3>
        <div className="edit-podaci">
          <p>Ime i prezime: {selectedOption.ime}</p>
          <p>Broj telefona: {selectedOption.telefon}</p>
          <p>Email adresa: {selectedOption.email}</p>
          <p>Napomena: {selectedOption.napomena}</p>
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
