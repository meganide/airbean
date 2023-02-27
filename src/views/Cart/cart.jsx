import { Route } from 'react-router-dom';
import { CartCheckout } from './cart.jsx';
import styles from './cart.scss';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className={styles.cart}>
      {/* ...other routes */}
      <Route path="/" component={CartCheckout} />
    </div>
  );
}

function CartCheckout() {
  return (
    <div className={styles.overlay}>
      <div className={styles.checkoutForm}>
        {/**...checkout form elements  */}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* ...other routes */}
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

export { Cart, CartCheckout, App };
