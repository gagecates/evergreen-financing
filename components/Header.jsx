import React from 'react';

import STYLES from '../styles/Header.module.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Header = () => (
  <header className={getClassName('Header')}>
    <a href="/">
      <span className={getClassName('Header__hidden-text')}>Skyscanner</span>
      <img
        className={getClassName('Header__logo-image')}
        alt="Skyscanner"
        src='./logo.svg'
      />
    </a>
  </header>
);

export default Header;
