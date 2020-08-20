import React from 'react';

const KontaktPodaci = ({contactInfo, prevStep, nextStep}) => {
  return (
    <>
      <h3 className="step-title">Korak 3. Vaši kontakt podaci</h3>
      <form className="kontakt-forma">
        <label className="kontakt-option"><input type="text" placeholder="Ime i prezime*"/></label>
        <label className="kontakt-option"><input type="text" placeholder="Broj telefona*"/></label>
        <label className="kontakt-option"><input type="text" placeholder="Email adresa*"/></label>
        <label className="kontakt-option"><input type="text" placeholder="Napomena (opcionalno)"/></label>
      </form>
      <div className="navigation-buttons">
        {contactInfo ? <button className="navigation-button" onClick={nextStep}>Dalje</button> : 
        <button className="unclickable-button">Dalje</button>
        }
      </div>
    </>
  );
}

export default KontaktPodaci;