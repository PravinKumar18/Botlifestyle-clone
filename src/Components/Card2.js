import React from "react";
import "./Css/Card2.css";
import Blog1 from "./Images/Blog1.jpg";
import Blog2 from "./Images/Blog2.jpg";
import Blog3 from "./Images/Blog3.jpg";
import Blog4 from "./Images/Blog4.jpg";

function Card2() {
  return (
    <div className="card2-top">
        <h2 className="card2-heading">bo<span style={{ color:'red'}}>A</span>t Blogs</h2>
    <div className="card2-body">
      <div className="card2-container">
        <img className="card2-img" src={Blog1} />
        <p className="card2-text">
        Aman Gupta boAt (Shark Tank India 2) Age, Net worth, Email ID,
        </p>
      </div>

      <div className="card2-container">
        <img className="card2-img" src={Blog2} />
        <p className="card2-text">
        The Ultimate Smartwatch Guide - Get The World On Your Wrist
        </p>
      </div>

      <div className="card2-container">
        <img className="card2-img" src={Blog3} />
        <p className="card2-text">
        boAt & DC Comics Join Hands
        </p>
      </div>

      <div className="card2-container">
        <img className="card2-img" src={Blog4} />
        <p className="card2-text">
        Into the Bat Cave Secrets
        </p>
      </div>
    </div>
    </div>
  );
}

export default Card2;
