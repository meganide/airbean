import '../Cart/Cart.scss';

import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import Popup from '../Popup/Popup';
import { useSelector } from 'react-redux';

function Cart() {
  const [showPopup, setShowPopup] = useState(false);
  const order = '';

  const cart = useSelector((state) => state);
  console.log(cart);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  //calculate total price
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
  //array with product names and quantities
  const groupProducts = cart.reduce((acc, product) => {
    const existingProduct = acc.find((p) => p.name === product.name);
    if(existingProduct) {
      existingProduct.quantity += 1;
    }else {
      acc.push({name: product.name, quantity: 1, price: product.price});
    }
    return acc;
  }, []);

  return (
    <div className="cart">
      <button className="cart__button" onClick={togglePopup}>
        <BsBag />{' '}
      </button>
      {showPopup && (
        <Popup order={order} totalAmount={totalPrice} closePopup={togglePopup}>
          {groupProducts.map((product) => {
            return (
              <>
                <section className='cart__total'>
                  <p className='cart__name'>{product.name}</p>
                  <div class="horizontal-dotted-line"></div>
                  <div className='cart__add'>+</div>
                  <p className='amount'>{product.quantity}</p>
                  <div className='cart__delete'>-</div>
                </section>
                <p className='cart__price'>{product.price}</p>
              </>
            );
          })}
        </Popup>
      )}
    </div>
  );
}

export default Cart;
