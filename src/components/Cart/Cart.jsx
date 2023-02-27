import "./Cart.scss";
import React from "react";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__heading">
        <h1>Din beställning</h1>
      </div>
      <div className="cart__list">
        <ul>
          <li>kaffe</li>
        </ul>
      </div>
    </div>
  );
}


export default Cart;