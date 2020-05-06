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

        <div className="main-text">
          {/* THE MAP */}

          <h2 className="section-title">{"We're really great guys"}</h2>
          <p>
            We grew up in downtown Chicago, and we used to play in a band. Jake
            loves fried chicken, and Elwood loves dry white toast.
          </p>
          <p>
            While the band didnt make it, the hard work we put in trying to
            promote it sure did. Like a lot of people, we needed a website, and
            we needed to rank. The experts didnt seem to know what they were
            talking about, so we figured it out on our own.
          </p>
          <h2 className="section-title">We can do all sorts of great stuff</h2>
          <p>
            Honestly most people in this industry seem to be full of crap. We
            dont care what youve heard, or what others have told you, we get
            results and at the end of the day, what else matters?
          </p>
          <p>
            So sure, maybe were a bit different from what youd expect, but if
            you want to rank, market, and build your way to the top, were the
            brothers for you.
          </p>
        </div>
      </main>
    </Container>
  );
};

export default App;
