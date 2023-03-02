import './OrderHistory.scss';

import React, { useEffect, useState } from 'react';

import OrderItem from '../Order/OrderItem';
import { httpUserToken } from '../../utils/requests';
import { useSelector } from 'react-redux';

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const name = useSelector((state) => state.user);

  useEffect(() => {
    async function getUserHistory() {
      const userOrderHistory = await httpUserToken(true);
      if (userOrderHistory) {
        setOrders(userOrderHistory.orderHistory);
      }
    }

    getUserHistory();
  }, []);

  function getTotalSpent() {
    if (orders.length > 0) {
      return orders.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.total;
      }, 0);
    }

    return 0;
  }

  return (
    <section className="order-history">
      <section className="order-history__profile">
        <img src="./assets/pictures/Profile.svg" />
        <h1>{name}</h1>
      </section>
      <section className="order-history__orders-container">
        <h2>Orderhistorik</h2>
        {orders && orders.length > 0 ? (
          orders.map((order, index) => {
            return <OrderItem key={index} order={order} index={index} orderLength={orders.length} />;
          })
        ) : (
          <p className="order-history__info">Oops, här var det knapert!</p>
        )}
        <section className="order-history__order-item">
          <article className="order-history__summary">
            <h3>Totalt spenderat</h3>
            <h3>{orders && orders.length > 0 ? getTotalSpent() : 0} kr</h3>
          </article>
        </section>
      </section>
    </section>
  );
}

export default OrderHistory;
