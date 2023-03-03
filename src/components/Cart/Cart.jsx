import '../Cart/Cart.scss';

import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import Popup from '../Popup/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct  } from '../../actions/cartActions';

function Cart() {
  const [showPopup, setShowPopup] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  //calculate total price
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
  //total items in cart
  const totalItems = cart.reduce((acc, product) => {
    return acc + (product.quantity ? product.quantity : 1);
  }, 0);

  function handleClick(product) {
    dispatch(deleteProduct(product))
    console.log(id)
  }

  return (
    <div className="cart">
      <button className="cart__button" onClick={togglePopup}>
        <BsBag />
        <div className='cart__item-count'>{totalItems}</div>
      </button>
      {showPopup && (
        <Popup order='' totalAmount={totalPrice} closePopup={togglePopup}>
          {cart.map((product) => (
            
            
            <React.Fragment key={product.name}>
              {console.log(product)}
              <section className='cart__total'>
                <p className='cart__name'>{product.name}</p>
                <div className="horizontal-dotted-line" />
                <button className='cart__add'
                onClick={() => dispatch(addProduct(product))}>+</button>
                <p className='amount'>{product.quantity}</p>
                <button className='cart__delete'
                onClick={() => handleClick(product)}>-</button>
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
