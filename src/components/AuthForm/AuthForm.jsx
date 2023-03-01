import './authform.scss';

import { httpSignup } from '../../utils/requests';

function AuthForm(props) {
  async function handleAuth(e) {
    e.preventDefault();

    let username = e.target.namn.value;
    let password = e.target.password.value;

    const signup = await httpSignup({ username, password });

    if (signup.success) {
      e.target.namn.value = '';
      e.target.password.value = '';
      props.setShowLogin(true);
    } else {
      // show error: signup.message
    }
  }

  return (
    <section className="authform">
      <header className="authform__header">
        <img src="./assets/pictures/Logo.svg" alt="" />
        <h1>{props.formInfo.heading}</h1>
        <p>{props.formInfo.text}</p>
      </header>
      <form className="authform__form" onSubmit={handleAuth}>
        <section className="authform__input">
          <label htmlFor="namn">Namn</label>
          <input type="text" name="namn" />
        </section>
        <section className="authform__input">
          <label htmlFor="password">Lösenord</label>
          <input type="password" name="password" />
        </section>
        <p className="authform__redirect">
          {props.formInfo.redirectText}
          <span onClick={() => props.setShowLogin(!props.showLogin)}>här</span>
        </p>
        <button className="authform__button">{props.formInfo.btnText}</button>
      </form>
    </section>
  );
}

export default AuthForm;
