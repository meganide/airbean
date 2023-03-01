import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Cart/Cart.scss"
import { BsBag } from 'react-icons/bs';


function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>Din beställning</h1>
        <p> {props.order}</p>
        <p> Totalt: {props.totalAmount}</p>
      </div>
    </div>
  );
}

function Cart() {
  const [showPopup, setShowPopup] = useState(false);
  const order = "Bryggkaffe";
  const totalAmount = 0;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div className="app">
      <button className='cart__button' onClick={togglePopup}><BsBag /> </button>
      {showPopup && 
        <Popup 
          order={order} 
          totalAmount={totalAmount} 
          closePopup={togglePopup}
        />
      }
    </div>
  );
}

export default Cart;






