import React from "react";
import "./Css/Card1.css";
import earbud131 from "./Images/earbud131.jpg";
import wavelite from "./Images/wavelite.jpg";
import earbud161 from "./Images/earbud161.jpg";
import watch from "./Images/watch.jpg";
import rockerz from "./Images/rockerz.jpg";
import headphone1 from "./Images/headphone1.jpg";

function Card1() {
  return (
    <div className="card-top" id="rock">
      <div className="card-top-header">
        <h2> ROCK IN INDIA</h2>
        <button className="card-button-top">Sale Ending In 5 Days</button>
      </div>
      <div className="card-body">
        <div className="card1-container">
          <div className="inside-card1">
            <img className="cardimg" src={earbud131} />
          </div>
          <div className="card-details">
            <h3>Airdopes 131</h3>
            <p>
              ₹ 999 <br /> Free Shipping Available
            </p>

            <button className="card-button"> ADD TO CART</button>
          </div>
        </div>

        <div className="card1-container">
          <div className="inside-card1">
            <img className="cardimg" src={wavelite} />
          </div>
          <div className="card-details">
            <h3>Wavelite</h3>
            <p>
              ₹ 1499 <br /> Free Shipping Available
            </p>

            <button className="card-button"> ADD TO CART</button>
          </div>
        </div>

        <div className="card1-container">
          <div className="inside-card1">
            <img className="cardimg" src={headphone1} />
          </div>
          <div className="card-details">
            <h3>Rockerz 450</h3>
            <p>
              ₹ 1999 <br /> Free Shipping Available
            </p>

            <button className="card-button"> ADD TO CART</button>
          </div>
        </div>

        <div className="card1-container">
          <div className="inside-card1">
            <img className="cardimg" src={watch} />
          </div>
          <div className="card-details">
            <h3>Watch Flash</h3>
            <p>
              ₹ 1799 <br /> Free Shipping Available
            </p>

            <button className="card-button"> ADD TO CART</button>
          </div>
        </div>

        <div className="card1-container">
          <div className="inside-card1">
            <img className="cardimg" src={rockerz} />
          </div>
          <div className="card-details">
            <h3>Rockerz 255F</h3>
            <p>
              ₹ 799 <br /> Free Shipping Available
            </p>

            <button className="card-button"> ADD TO CART</button>
          </div>
        </div>

        <div className="card1-container">
          <div className="inside-card1">
            <img className="cardimg" src={earbud161} />
          </div>
          <div className="card-details">
            <h3>Airdopes 161</h3>
            <p>
              ₹ 1299 <br /> Free Shipping Available
            </p>

            <button className="card-button"> ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
