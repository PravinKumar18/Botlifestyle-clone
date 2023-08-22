import React from "react";
import boatlogo from "./Images/boatlogo.jpg";
import "./Css/Header.css";
import cart from "./Images/cart.png";
import user from "./Images/user.png";



function Header() {


  return (
    <div className="seven">
      <header className="one">
        <img className="two" src={boatlogo} />
        <nav className="three">
          <ul className="four">
            <li className="five">
              <a className="link" href="#">
                CATEORIES
              </a>
            </li>
            <li className="five">
              <a className="link" href="#rock">
                ROCK IN INDIA
              </a>
            </li>
            <li className="five">
              <a className="link" href="#">
                GIFT WITH BOAT
              </a>
            </li>
            <li className="five">
              <a  className="link" href="#"  >
              MORE 
              </a>
            
            </li>
          </ul>
        </nav>
        <input className="eight" placeholder="Serch Item" />
        <div className="nine">
          <img className="six" src={user} />
          <img className="six" src={cart} />
        </div>
      </header>
    </div>
  );
}

export default Header;
