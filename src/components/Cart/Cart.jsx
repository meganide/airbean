import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Cart/Cart.scss"

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Your Order</h2>
        <p>Order: {props.order}</p>
        <p>Total Amount: {props.totalAmount}</p>
      </div>
    </div>
  );
}

function Cart() {
  const [showPopup, setShowPopup] = useState(false);
  const order = "Example Order";
  const totalAmount = 100;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div className="app">
      <button className='cart__button' onClick={togglePopup}></button>
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
