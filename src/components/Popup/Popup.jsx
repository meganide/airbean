import "./popup.scss"

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>Din beställning</h1>
        {props.children}
        <p> Totalt: {props.totalAmount}</p>
      </div>

    </div>
  );
}

export default Popup