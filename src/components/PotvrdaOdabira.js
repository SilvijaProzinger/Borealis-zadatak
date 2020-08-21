import React from 'react';

const PotvrdaOdabira = ({prevStep, nextStep}) => {
  return (
    <>
      <h3 className="step-title">Korak 4. Pregled i potvrda vašeg odabira</h3>
      <h4 className="explanation">Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neke od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis.</h4>
      <div className="navigation-buttons">
        <button className="navigation-button" onClick={prevStep}>Nazad</button>
      </div>
    </>
  );
}

export default PotvrdaOdabira;
