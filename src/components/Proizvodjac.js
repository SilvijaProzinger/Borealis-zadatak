import React, { useState } from 'react';

function Proizvodjac() {
  return (
    <div className="proizvodjac-forma">
      <form>
        <div className="form-check">
          <label>
          <input
            type="radio"
            name="proizvodjac-name"
            value="option1"
            className="form-check-input"
            onChange=''/>
            BMW
          </label>
        </div>
      <div className="form-group">
        <button className="btn btn-primary mt-2" type="submit">Save</button>
      </div>
      </form>
    </div>
  );
}

export default Proizvodjac;