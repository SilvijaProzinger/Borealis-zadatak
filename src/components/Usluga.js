import React from 'react';

const usluge = [
  { 'usluga': 'Zamjena ulja i filtera', 'cijena': 500, 'key': 0 },
  { 'usluga': 'Promjena pakni', 'cijena': 450, 'key': 1 },
  { 'usluga': 'Promjena guma', 'cijena': 100, 'key': 2 },
  { 'usluga': 'Servis klima uređaja', 'cijena': 299, 'key': 3 },
  { 'usluga': 'Balansiranje guma', 'cijena': 50, 'key': 4 },
  { 'usluga': 'Zamjena ulja u kočnicama', 'cijena': 229, 'key': 5 }
]

const Usluga = ({ checkedOption, handleCheckbox, nextStep, prevStep, cijena, kuponInput, openKuponInput, kuponValue, handleKuponChange, checkKuponValue, kuponAlert }) => {
  
  return (
    <>
    <div>
      <h3 className="step-title">Korak 2. Odaberite jednu ili više usluga</h3>
      <div className="usluga-forma">
        {usluge.map(function(usluga){
          return <label className="usluga-option" key={usluga.key}>
          <input type="checkbox"
            value={usluga.cijena}
            name={usluga.usluga}
            onClick={handleCheckbox}
          /> {usluga.usluga} ({usluga.cijena} kn)</label>
        })}
      </div>
      <div className="kupon">
      {kuponInput ? 
        <label className="kupon-input"><input type="text" placeholder="Unesite kupon ovdje" value={kuponValue} onChange={handleKuponChange}/><button className="navigation-button" onClick={checkKuponValue}>Primjeni</button></label> : 
        <a className="open-kupon" href="#" onClick={openKuponInput}>Imam kupon</a>
      }
      <h3>{kuponAlert}</h3>
      </div>
      <h3 className="cijena">UKUPNO: {cijena} kn</h3>
    </div> 
    <div className="navigation-buttons">
      <button className="navigation-button" onClick={prevStep}>Nazad</button>
      {cijena !== 0 ? <button className="navigation-button" onClick={nextStep}>Dalje</button> : 
      <button className="unclickable-button">Dalje</button>
      }
    </div>
    </>
  )
}

export default Usluga;