import '../Cart/Cart.scss';

import React, { useState } from 'react';

import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup';
import { cartReducer } from '../../reducers/cartReducer';
import { useSelector } from 'react-redux';

function Cart() {
  const [showPopup, setShowPopup] = useState(false);
  const order = 'Bryggkaffe';
  const totalAmount = 0;

  const cart = useSelector((state) => state);
  console.log(cart);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="cart">
      <button className="cart__button" onClick={togglePopup}>
        <BsBag />{' '}
      </button>
      {showPopup && (
        <Popup order={order} totalAmount={totalAmount} closePopup={togglePopup}>
          {cart.map((product) => {
            return (
              <>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
              </>
            );
          })}
        </Popup>
      )}
    </div>
  );
}

export default Cart;
