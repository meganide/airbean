import './orderItem.scss';

function OrderItem(props) {
  const { order, index, orderLength } = props;

  return (
    <section className="order">
      <section className="order__item">
        <article className="order__top">
          <h3>{order.orderNr}</h3>
          <p>total ordersumma</p>
        </article>
        <article>
          <h3>{order.orderDate}</h3>
          <p className="order__price">{order.total}</p>
        </article>
      </section>
      <div className={`order__under-line ${orderLength - 1 === index && 'order__under-line--bold'}`}></div>
    </section>
  );
}

export default OrderItem;
