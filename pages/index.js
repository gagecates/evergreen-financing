import React from 'react';
import Header from '../components/Header';
import Itineraries from '../components/Itineraries'

import STYLES from '../styles/App.module.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

export default function Home() {
  return (
    <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <Itineraries/>
    </main>
  </div>
  )
}
