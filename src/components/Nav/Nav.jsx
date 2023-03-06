import './Nav.scss';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="nav" style={{ backgroundColor: isOpen ? '#2f2926' : '', width: isOpen ? 'inherit' : 'auto' }}>
      <button onClick={toggleMenu}>
        {isOpen ? (
          <img className="nav__close" src="./assets/pictures/close.png" />
        ) : (
          <img className="nav__icon" src="./assets/pictures/navicon.png" />
        )}
      </button>
      {isOpen && (
        <section className="nav__container">
          <h1 onClick={() => handleNavigation('/menu')}>Meny</h1>
          <div className="nav__underline"></div>
          <h1 onClick={() => handleNavigation('/about')}>Vårt kaffe</h1>
          <div className="nav__underline"></div>
          <h1 onClick={() => handleNavigation('/profile')}>Min profil</h1>
          <div className="nav__underline"></div>
          <h1 onClick={() => handleNavigation('/status')}>Orderstatus</h1>
          <div className="nav__underline"></div>
        </section>
      )}
    </section>
  );
}

export default Nav;
