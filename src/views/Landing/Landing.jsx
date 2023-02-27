import './landing.scss';

import React, { useEffect } from 'react';

import Logo from '../../components/Logo/Logo';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/menu');
    }, 2800);
  }, []);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 2.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <motion.header
      className="landing"
      initial={{ backgroundColor: '#000000' }}
      animate={{ backgroundColor: '#38846d' }}
      transition={{ duration: 2, delay: 1.2 }}
    >
      <motion.img
        animate={{ x: '0%' }}
        initial={{ x: '-100%' }}
        transition={{ type: 'just', duration: 0.75, delay: 1.2 }}
        className="landing__bg"
        src="./assets/pictures/header_left.svg"
        alt=""
      />
      <motion.img
        className="landing__bg landing__bg--right"
        src="./assets/pictures/header_right.svg"
        alt=""
        animate={{ x: '0%' }}
        initial={{ x: '100%' }}
        transition={{ type: 'just', duration: 0.75, delay: 1.2 }}
      />
      <motion.svg
        className="landing__loading"
        width="150px"
        height="150px"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.circle cx="25%" cy="25%" r="100%" variants={draw} custom={1} />
      </motion.svg>
      <Logo />
      <motion.section
        className="landing__hero"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1, delay: 1.5 }}
      >
        <h1 className="landing__heading">AIR BEAN</h1>
        <h2 className="landing__slogan">DRONEDELIVERED COFFEE</h2>
      </motion.section>
    </motion.header>
  );
}

export default Landing;
