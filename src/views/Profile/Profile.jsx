import { useEffect, useState } from 'react';

import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import OrderHistory from '../../components/OrderHistory/OrderHistory';
import { httpUserToken } from '../../utils/requests';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  let formInfo;

  if (showLogin) {
    formInfo = {
      heading: 'Välkommen till AirBean-familjen!',
      text: 'Logga in nedan för att se din orderhistorik.',
      btnText: 'Logga in',
      redirectText: 'Inget konto? Skapa ett ',
    };
  } else {
    formInfo = {
      heading: 'Välkommen till AirBean-familjen!',
      text: 'Genom att skapa ett konto nedan kan du spara och se din orderhistorik.',
      btnText: 'Skapa konto',
      redirectText: 'Redan medlem? Logga in ',
    };
  }

  async function isTokenValid() {
    const tokenStatus = await httpUserToken();

    if (tokenStatus && tokenStatus.success) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    isTokenValid();
  }, []);

  return (
    <AuthLayout>
      {isLoggedIn ? (
        <OrderHistory />
      ) : (
        <AuthForm
          formInfo={formInfo}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          isTokenValid={isTokenValid}
        />
      )}
    </AuthLayout>
  );
}

export default Profile;
