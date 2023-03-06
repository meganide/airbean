import './Status.scss';

import { httpGetOrderStatus, httpUserToken } from '../../utils/requests';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Status() {
  const navigate = useNavigate();
  const [eta, setEta] = useState(null);
  const [error, setError] = useState('');

  const orderNumber = useSelector((state) => state.user.orderNr);

  useEffect(() => {
    async function getOrderStatus() {
      setError('');

      const userToken = await httpUserToken();
      const isLoggedIn = userToken ? userToken.success : false;
      const orderStatus = await httpGetOrderStatus(isLoggedIn, orderNumber);

      if (orderStatus.eta) {
        setEta(orderStatus.eta);
      }

      if (!orderStatus.success) {
        setError(orderStatus.message);
      }
    }

    if (orderNumber) {
      getOrderStatus();
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="status">
      <>
        <p className="status__paragraph">Ordernummer #{orderNumber}</p>
        <section className="status__drone">
          <img src="./assets/pictures/drone.png" alt="Drone" />
          <img className="status__cup" src="./assets/pictures/cup.png" alt="Cup" />
        </section>
        <section className="status__section">
          {eta !== null && (
            <>
              <h1>Din beställning är på väg!</h1>
              <p>
                <span>{eta} </span>
                {eta === 1 ? 'minut' : 'minuter'}
              </p>
            </>
          )}
          {!eta && <h1>Ingen aktiv beställning</h1>}
          {error && <p>{error}</p>}
        </section>
        <button className="status__button" onClick={() => handleNavigation('/menu')}>
          Ok, cool!
        </button>
      </>
    </div>
  );
}

export default Status;
