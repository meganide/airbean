import "./Status.scss";

function Status() {
  return (
    <div className="status">
      <p className="status__paragraph">Ordernummer #12DV23F</p>
      <section className="status__drone">
        <img src="/Public/drone.png" />
        <img className="status__cup" src="/Public/cup.png" />
      </section>
      <section className="status__section">
        <h1>Din beställning är på väg!</h1>
        <p>
          <span>13</span> mintuer
        </p>
      </section>
      <button className="status__button">Ok, cool!</button>
    </div>
  );
}

export default Status;
