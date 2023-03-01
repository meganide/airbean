import "./popup.scss"


function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>Din beställning</h1>        
        {props.children}
        <section className="total">
        <p className="sum">Totalt</p>  
        <div class="horizontal-dotted-line"></div>
        <p> {props.totalAmount}Kr</p>
        </section>
        <p className="moms">inkl moms + drönarleverans</p>
      </div>
      <button className="takeMyMoney">Take my money!</button>
    </div>
  );
}

export default Popup

