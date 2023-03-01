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
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ name: product.name, quantity: 1, price: product.price });
    }
    return acc;
  }, []);
  //total items in cart
  const totalItems = cart.reduce((acc, product) => {
    return acc + (product.quantity ? product.quantity : 1);
  }, 0);


  return (
    <div className="cart">
      <button className="cart__button" onClick={togglePopup}>
        <BsBag />
        <div className='cart__item-count'>{totalItems}</div>
      </button>
      {showPopup && (
        <Popup order='' totalAmount={totalPrice} closePopup={togglePopup}>
          {groupProducts.map(product => (
            <React.Fragment key={product.name}>
              <section className='cart__total'>
                <p className='cart__name'>{product.name}</p>
                <div className="horizontal-dotted-line" />
                <div className='cart__add'>+</div>
                <p className='amount'>{product.quantity}</p>
                <div className='cart__delete'>-</div>
              </section>
              <p className='cart__price'>{product.price}</p>
            </React.Fragment>
          ))}
        </Popup>
      )}
    </div>
  );
}


export default Cart;
