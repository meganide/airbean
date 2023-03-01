import React from "react";
import "./OrderHistory.scss";
import AuthLayout from "../AuthLayout/AuthLayout";

function OrderHistory() {
  return (
    <AuthLayout>
      <section className="order-history">
        <section className="order-history__profile">
          <img src="/Public/Profile.svg" />
          <h1>Sixten Kaffelövér</h1>
        </section>
        <section className="order-history__orders-container">
          <h2>Orderhistorik</h2>
          <div className="order-history__order-item">
            <article>
              <h3>#AB1123282323Z</h3>
              <p>total ordersumma</p>
            </article>
            <article>
              <h3>20/03/06</h3>
              <p className="order-history__price">442 kr</p>
            </article>
          </div>
          <div className="order-history__under-line"></div>
          <div className="order-history__order-item">
            <article>
              <h3>#AB1128382323X</h3>
              <p>total ordersumma</p>
            </article>
            <article>
              <h3>20/03/06</h3>
              <p className="order-history__price">333 kr</p>
            </article>
          </div>
          <div className="order-history__under-line"></div>
          <div className="order-history__order-item">
            <article>
              <h3>#AB1444482323X</h3>
              <p>total ordersumma</p>
            </article>
            <article>
              <h3>20/03/06</h3>
              <p className="order-history__price">893 kr</p>
            </article>
          </div>
          <div className="order-history__under-line order-history__under-line--bold"></div>
          <div className="order-history__order-item">
            <article>
              <h3 className="order-history__summary">Totalt spenderat</h3>
            </article>
            <article>
              <h3 className="order-history__summary">1669 kr</h3>
            </article>
          </div>
        </section>
      </section>
    </AuthLayout>
  );
}

export default OrderHistory;
