import "./Menu.scss";
import { useEffect, useState } from "react";

import Products from "../../components/Products/Products";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const BASE_URL = "https://airbean.awesomo.dev/api/beans/";
    async function getMenu() {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setMenu(data.menu);
      } catch (error) {
        console.log(error);
      }
    }
    getMenu();
  }, []);

  console.log(menu);

  return (
    <article className="menu">
      <img
        className="menu__image"
        src="../../public/header.svg"
        alt="colored leafs"
      />
      <h1 className="menu__title">Meny</h1>
      <Products menu={menu} />
      <img
        className="menu__image menu__image-rotated"
        src="../../public/header.svg"
        alt="colored leafs"
      />
    </article>
  );
}

export default Menu;
