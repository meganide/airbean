import React from "react";
import "./OrderHistory.scss";
import AuthLayout from "../AuthLayout/AuthLayout";

function OrderHistory() {
  return (
    <AuthLayout>
      <section className="orderHistory__profile">
        <img src="/Public/Profile.svg" />
        <h1>Sixten Kaffelövér</h1>
        <p className="orderHistory__emailAddress">sixten.kaffelover@zocom.se</p>
      </section>
      <section className="orderHistory__ordersContainer">
        <h2>Orderhistorik</h2>
        <div className="orderHistory__orderItem">
          <article>
            <h3>#AB1123282323Z</h3>
            <p>total ordersumma</p>
          </article>
          <article>
            <h3>20/03/06</h3>
            <p className="orderHistory__price">442 kr</p>
          </article>
        </div>
        <div className="orderHistory__underLine"></div>
        <div className="orderHistory__orderItem">
          <article>
            <h3>#AB1128382323X</h3>
            <p>total ordersumma</p>
          </article>
          <article>
            <h3>20/03/06</h3>
            <p className="orderHistory__price">333 kr</p>
          </article>
        </div>
        <div className="orderHistory__underLine"></div>
        <div className="orderHistory__orderItem">
          <article>
            <h3>#AB1444482323X</h3>
            <p>total ordersumma</p>
          </article>
          <article>
            <h3>20/03/06</h3>
            <p className="orderHistory__price">893 kr</p>
          </article>
        </div>
        <div className="orderHistory__underLine bold"></div>
        <div className="orderHistory__orderItem">
          <article>
            <h3 className="orderHistory__summary">Totalt spenderat</h3>
          </article>
          <article>
            <h3 className="orderHistory__summary">1669 kr</h3>
          </article>
        </div>
      </section>
    </AuthLayout>
  );
}

export default OrderHistory;
