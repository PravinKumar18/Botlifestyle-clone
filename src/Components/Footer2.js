import React from 'react'
import './Css/Footer2.css'
import playstore from './Images/playstore.jpg'
import Playstore2 from './Images/Playstore2.jpg'
import visa from './Images/visa.jpg'
import phonepe from './Images/phonepe.jpg'
import gpay from './Images/gpay.jpg'
import upi from './Images/upi.jpg'
import rupay from './Images/rupay.jpg'


function Footer2() {
  return (
    <div className='footer2-top'>
     <div className='footer2-container1'>
        <h3>
           Download the App
        </h3>
        <div className='footer2-img'>
           <img className='footer2-img' src={playstore} />
           <img className='footer2-img' src={Playstore2} />
        </div>
     </div>

     <div className='footer2-container2'>
        <h3>
           We Accept
        </h3>
        <div className='footer2-img'>
           <img src={visa} />
       
        </div>
     </div>
    </div>
  )
}

export default Footer2