import React from "react";
import "./Css/Footer.css";
import boatlogo from "./Images/boatlogo.jpg";
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  const handleRoute = ()=>{
    navigate('/')
  }
  return (
    <div className="footer-container">
      <div className="block1">
        <img src={boatlogo} />
        <p >Subscribe to email alerts. we promise not to spam <br/>your inbox.</p>
        <input className="inputfield" placeholder="Email Address"/> <button   onClick={handleRoute} className="input-button">Subscribe</button>
        
      </div>
      <div className="block2">
         <h3>Shop</h3>
         <p>Smart Watches</p>
         <p>Wired Headphone</p>
         <p>Wireless Speaker</p>
         <p>Mobile Accessries</p>
         <p>Gift Card</p>
         <p>Earn Rs.100</p>

      </div>
      <div className="block3">
          <h3>Help</h3>
          <p>Track Your Order</p>
          <p>Return Policy</p>
          <p>Bulc Orders</p>
          <p>Warranty & Support</p>
          <p>FAQs</p>
      </div>
      <div className="block4">
        <h3>Company</h3>
        <p>About Boat</p>
        <p>News</p>
        <p>Read Our Blog</p>
        <p>Careers</p>
        <p>Terms Of Service</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
