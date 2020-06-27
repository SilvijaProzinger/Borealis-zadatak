import React from 'react';

const usluge = [
  { 'usluga': 'Zamjena ulja i filtera', 'cijena': 500 },
  { 'usluga': 'Promjena pakni', 'cijena': 450},
  { 'usluga': 'Promjena guma', 'cijena': 100},
  { 'usluga': 'Servis klima uređaja', 'cijena': 299 },
  { 'usluga': 'Balansiranje guma', 'cijena': 50},
  { 'usluga': 'Zamjena ulja u kočnicama', 'cijena': 229}
]

const Usluga = () => {
  return (
    <div>
      <h3 className="step-title">Korak 2. Odaberite jednu ili više usluga</h3>
    </div> 
  )
}

export default Usluga;