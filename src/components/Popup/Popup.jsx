import './popup.scss';

function Popup(props) {
  const { totalAmount, children, handleCreateOrder, error, ifDiscount } = props;

  return (
    <div className="popup">
      <div className="arrow"></div>
      <div className="popup-inner">
        <h1>Din beställning</h1>
        {children}
        {ifDiscount && <p className="popup__kampanj">Grattis! Du har aktiverat vårt 400 års jubileumkampanj på 49 kr! hehe</p>}
        <section className="total">
          <p className="sum">Totalt</p>
          <div className="horizontal-dotted-line" />
          <p>{`${totalAmount}Kr`}</p>
        </section>
        <p className="moms">inkl moms + drönarleverans</p>
      </div>
      {error.length > 0 && <p className="popup__error">🚨🚨{error}🚨🚨</p>}
      <button className="takeMyMoney" onClick={handleCreateOrder}>
        Take my money!
      </button>
    </div>
  );
}

export default Popup;
