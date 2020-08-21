import React from 'react';

const KontaktPodaci = ({contactInfo, handleContactInfo, prevStep, nextStep}) => {
  return (
    <>
      <h3 className="step-title">Korak 3. Vaši kontakt podaci</h3>
      <form className="kontakt-forma">
        <label className="kontakt-option"><input type="text" placeholder="Ime i prezime*" name="ime" value={contactInfo.ime}onChange={handleContactInfo}/></label>
        <label className="kontakt-option"><input type="text" placeholder="Broj telefona*" name="telefon" value={contactInfo.telefon} onChange={handleContactInfo}/></label>
        <label className="kontakt-option"><input type="text" placeholder="Email adresa*" name="email" value={contactInfo.email} onChange={handleContactInfo}/></label>
        <label className="kontakt-option"><input type="text" placeholder="Napomena (opcionalno)" style={{height: "100px"}}/></label>
      </form>
      <div className="navigation-buttons">
        <button className="navigation-button" onClick={prevStep}>Nazad</button>
        {contactInfo.ime && contactInfo.telefon && contactInfo.email ? <button className="navigation-button" onClick={nextStep}>Dalje</button> : 
        <button className="unclickable-button">Dalje</button>
        }
      </div>
    </>
  );
}

export default KontaktPodaci;

