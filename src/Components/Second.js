import React from "react";
import "./Css/Second.css";
import charger from "./Images/charger.jpg";
import smartwatch from "./Images/smartwatch.jpg";
import headphone from "./Images/headphone.jpg";
import trimmer from "./Images/trimmer.jpg";
import earbud from "./Images/earbud.jpg";

function Second() {
  return (
    <div>
      <div className="fifteen">
        <h2>SHOP BY CATEGORIES</h2>
      </div>
      <div className="fourteen">
        <div className="twelve">
          <div className="eleven">
            <img className="thirteen" src={earbud} />
            <h3>Earbud</h3>
          </div>
          <div className="eleven">
            <img className="thirteen" src={smartwatch} />
            <h3>smartwatch</h3>
          </div>
          <div className="eleven">
            <img className="thirteen" src={headphone} />
            <h3>headphone</h3>
          </div>
          <div className="eleven">
            <img className="thirteen" src={trimmer} />
            <h3>Trimmer</h3>
          </div>
          <div className="eleven">
            <img className="thirteen" src={charger} />
            <h3>Charger</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
