import './authform.scss';

import { changeName } from '../../actions/userActions';
import { httpAuth } from '../../utils/requests';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function AuthForm(props) {
  const { formInfo, showLogin, setShowLogin, isTokenValid } = props;

  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });

  function handleAuth(e) {
    e.preventDefault();
    setError('');

    if (showLogin) {
      login(userCredentials);
    } else {
      signup(userCredentials);
    }
  }

  async function signup(userInfo) {
    const signup = await httpAuth(userInfo, false);

    if (signup.success) {
      setUserCredentials({
        username: '',
        password: '',
      });
      setShowLogin(true);
    } else {
      setError(signup.message);
    }
  }

  async function login(userInfo) {
    const login = await httpAuth(userInfo);

    if (login.success) {
      sessionStorage.setItem('token', login.token);
      dispatch(changeName(userInfo.username));
      isTokenValid();
    } else {
      setError(login.message);
    }
  }

  function handleNavigate() {
    setError('');
    setUserCredentials({
      username: '',
      password: '',
    });
    setShowLogin(!showLogin);
  }

  function handleOnChange(e) {
    setUserCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="authform">
      <header className="authform__header">
        <img src="./assets/pictures/Logo.svg" alt="" />
        <h1>{formInfo.heading}</h1>
        <p>{formInfo.text}</p>
      </header>
      <form className="authform__form" onSubmit={handleAuth}>
        <section className="authform__input">
          <label htmlFor="username">Namn</label>
          <input type="text" name="username" value={userCredentials.username} onChange={handleOnChange} />
        </section>
        <section className="authform__input">
          <label htmlFor="password">Lösenord</label>
          <input type="password" name="password" value={userCredentials.password} onChange={handleOnChange} />
        </section>
        <p className="authform__redirect">
          {formInfo.redirectText}
          <span onClick={handleNavigate}>här</span>
        </p>
        <p className="authform__error">{error}</p>
        <button className="authform__button">{formInfo.btnText}</button>
      </form>
    </section>
  );
}

export default AuthForm;
