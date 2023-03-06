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
  const [ifDiscount, setIfDiscount] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setError('');
    setIfDiscount(false);
    setTotalPrice(cart.reduce((acc, product) => acc + product.quantity * product.price, 0));
    discount();
  }, [cart]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  console.log(cart);

  function discount() {
    const bryggkaffeInCart = cart.find((product) => product.name === 'Bryggkaffe');
    const adolfsbakelseInCart = cart.find((product) => product.name === 'Gustav Adolfsbakelse');

    if (bryggkaffeInCart && adolfsbakelseInCart) {
      setIfDiscount(true)
      setTotalPrice((prev) => prev - 49);
    }
  }

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
      const isLoggedIn = userToken ? userToken.success : false;

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
        <Popup totalAmount={totalPrice} closePopup={togglePopup} handleCreateOrder={handleCreateOrder} error={error} ifDiscount={ifDiscount}>
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
