import "./popup.scss";

function Popup(props) {
  const { totalAmount, children } = props;

  return (
    <div className="popup">
      <div className="arrow"></div>
      <div className="popup-inner">
        <h1>Din beställning</h1>
        {children}
        <section className="total">
          <p className="sum">Totalt</p>
          <div className="horizontal-dotted-line" />
          <p>{`${totalAmount}Kr`}</p>
        </section>
        <p className="moms">inkl moms + drönarleverans</p>
      </div>
      <button className="takeMyMoney">Take my money!</button>
    </div>
  );
}

export default Popup;
