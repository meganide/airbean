import '../Cart/Cart.scss';

import React, { useEffect, useState } from 'react';
import { addProduct, clearCart, deleteProduct } from '../../actions/cartActions';
import { httpCreateOrder, httpUserToken } from '../../utils/requests';
import { useDispatch, useSelector } from 'react-redux';

import { BsBag } from 'react-icons/bs';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setError('');
  }, [cart]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  //calculate total price
  const totalPrice = cart.reduce((acc, product) => acc + product.quantity * product.price, 0);

  //total items in cart
  const totalItems = cart.reduce((acc, product) => {
    return acc + (product.quantity ? product.quantity : 1);
  }, 0);

  function handleClick(product) {
    dispatch(deleteProduct(product));
  }

  async function handleCreateOrder() {
    setError('');
    const details = { details: { order: cart } };

    try {
      const userToken = await httpUserToken();
      const isLoggedIn = userToken ? userToken.success :  false;

      console.log('isLoggedIn', isLoggedIn);

      const createOrder = await httpCreateOrder(isLoggedIn, details);
      if (createOrder.eta) {
        togglePopup();
        dispatch(clearCart());
        navigate('/status', { state: { orderNumber: createOrder.orderNr } });
      } else {
        setError(createOrder.errors[0].msg);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="cart">
      <button className="cart__button" onClick={togglePopup}>
        <BsBag />
        <div className="cart__item-count">{totalItems}</div>
      </button>
      {showPopup && (
        <Popup totalAmount={totalPrice} closePopup={togglePopup} handleCreateOrder={handleCreateOrder} error={error}>
          {cart.map((product) => (
            <React.Fragment key={product.name}>
              <section className="cart__total">
                <p className="cart__name">{product.name}</p>
                <div className="horizontal-dotted-line" />
                <button className="cart__add" onClick={() => dispatch(addProduct(product))}>
                  +
                </button>
                <p className="amount">{product.quantity}</p>
                <button className="cart__delete" onClick={() => handleClick(product)}>
                  -
                </button>
              </section>
              <p className="cart__price">{product.price}</p>
            </React.Fragment>
          ))}
        </Popup>
      )}
    </div>
  );
}

export default Cart;
