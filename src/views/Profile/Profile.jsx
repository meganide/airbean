import { useEffect, useState } from 'react';

import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLayout from '../../components/AuthLayout/AuthLayout';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    // TODO: check if isloggedin via token
  }, []);

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

  return (
    <AuthLayout>
      <AuthForm formInfo={formInfo} showLogin={showLogin} setShowLogin={setShowLogin} />
    </AuthLayout>
  );
}

export default Profile;
