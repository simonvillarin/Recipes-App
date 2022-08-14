import React from 'react';
import American from '../components/American.js';
import Chinese from '../components/Chinese.js';
import French from '../components/French.js';
import Indian from '../components/Indian.js';
import Italian from '../components/Italian.js';
import Japanese from '../components/Japanese.js';
import SouthEast from '../components/SouthEast.js';

function Home() {
  return (
    <>
      <div className="container">
        <American />
        <Chinese />
        <French />
        <Indian />
        <Italian />
        <Japanese />
        <SouthEast />
      </div>
    </>
  );
}

export default Home;
