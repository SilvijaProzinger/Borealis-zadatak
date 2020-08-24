import React from 'react';

const KontaktPodaci = ({ selectedOption, handleContactInfo, prevStep, nextStep }) => {
  return (
    <>
      <h3 className="step-title">Korak 3. Vaši kontakt podaci</h3>
      <form className="kontakt-forma">
        <label className="kontakt-option"><input type="text" placeholder="Ime i prezime*" name="ime" value={selectedOption.ime}onChange={handleContactInfo}/></label>
        <label className="kontakt-option"><input type="text" placeholder="Broj telefona*" name="telefon" value={selectedOption.telefon} onChange={handleContactInfo}/></label>
        <label className="kontakt-option"><input type="text" placeholder="Email adresa*" name="email" value={selectedOption.email} onChange={handleContactInfo}/></label>
        <label className="kontakt-option"><input type="text" placeholder="Napomena (opcionalno)" name="napomena" value={selectedOption.napomena} onChange={handleContactInfo} style={{height: "100px"}}/></label>
      </form>
      <div className="navigation-buttons">
        <button className="navigation-button" onClick={prevStep}>Nazad</button>
        {selectedOption.ime && selectedOption.telefon && selectedOption.email ? <button className="navigation-button" onClick={nextStep}>Dalje</button> : 
        <button className="unclickable-button">Dalje</button>
        }
      </div>
    </>
  );
}

export default KontaktPodaci;

