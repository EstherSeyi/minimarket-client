import React from 'react';
import {Link} from 'react-router-dom';

import {Container} from '../../components/container/';
import Carousel from './Carousel';

import './style.css';

const App = () => {
  return (
    <Container>
      <Link to="/" style={{color: '#33cc99'}}>
        <small>Minimarket</small>
      </Link>
      <main className="main-grid main-text">
        <h1 className="page-title">Market Name</h1>
        <Carousel />

        <div className="main-text">{/* THE MAP */}</div>
      </main>
    </Container>
  );
};

export default App;
