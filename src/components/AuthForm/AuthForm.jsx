import './authform.scss';

function AuthForm(props) {
  return (
    <section className="authform">
      <header className="authform__header">
        <img src="./assets/pictures/Logo.svg" alt="" />
        <h1>{props.formInfo.heading}</h1>
        <p>{props.formInfo.text}</p>
      </header>
      <form className="authform__form">
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
