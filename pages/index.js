import React from 'react';
import BpkText from 'bpk-component-text';

import Header from '../components/Header';
import Itineraries from '../conponents/Itineraries'

import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

export default function Home() {
  return (
    <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <BpkText tagName="p">Over to you...</BpkText>
      {/* TODO: Add a component to display results here */}
      <Itineraries/>
    </main>
  </div>
  )
}
