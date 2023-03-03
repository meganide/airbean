import "./Status.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Status() {
  const navigate = useNavigate();
  const [eta, setEta] = useState(null);
  const [error, setError] = useState(null);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const BASE_URL = "https://airbean.awesomo.dev/api/beans/order/";
    const token = "token";

    async function getStatus() {
      try {
        const response = await fetch(`${BASE_URL}status/${orderNumber}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (data.eta !== undefined) {
          setEta(data.eta);
        } else {
          setEta(0);
        }
        setOrderNumber(data.orderNr);
      } catch (error) {
        setError(error.message);
      }
    }

    if (orderNumber !== "") {
      getStatus();
    }
  }, [orderNumber]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="status">
      {orderNumber !== "" && (
        <>
          <p className="status__paragraph">Ordernummer #{orderNumber}</p>
          <section className="status__drone">
            <img src="./assets/pictures/drone.png" alt="Drone" />
            <img
              className="status__cup"
              src="./assets/pictures/cup.png"
              alt="Cup"
            />
          </section>
          <section className="status__section">
            {eta !== null && (
              <>
                <h1>Din beställning är på väg!</h1>
                <p>
                  <span>{eta} </span>
                  {eta === 1 ? "minut" : "minuter"}
                </p>
              </>
            )}
            {eta === null && <h1>Laddar...</h1>}
            {eta === 0 && <h1>Ingen aktiv beställning</h1>}
          </section>
          <button
            className="status__button"
            onClick={() => handleNavigation("/menu")}
          >
            Ok, cool!
          </button>
        </>
      )}
    </div>
  );
}

export default Status;
