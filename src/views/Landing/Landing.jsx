import './landing.scss';

import React, { useEffect } from 'react';

import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     // navigate('/menu');
  //   }, 2000);
  // }, []);



  return (
    <header className="landing">
      <img className="landing__bg" src="./assets/pictures/header_left.svg" alt="" />
      <img className="landing__bg landing__bg--right" src="./assets/pictures/header_right.svg" alt="" />
      <Logo />
      <h1 className="landing__heading">AIR BEAN</h1>
      <h2 className="landing__slogan">DRONEDELIVERED COFFEE</h2>
    </header>
  );
}

export default Landing;
