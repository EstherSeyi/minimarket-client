import React from 'react';
import {ArrowDownOutlined} from '@ant-design/icons';
import {Link} from 'react-scroll';

import {Container} from '../../components/container';
import 'animate.css';
import './home.css';

const Home: React.FC = () => {
  return (
    <>
      <section className="hero hero-image">
        <div className="overlay"></div>
        <Container>
          <main className="main-section">
            <h1 className="heading">Mini Market</h1>
            <p className="sub-heading">Search for markets around you</p>
            <p className="action">
              <button className="btn btn-primary">find a market</button>
              <button className="btn btn-primary">get nearest market</button>
            </p>
          </main>
          <Link
            to="markets"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            delay={0}
            activeClass="arrow-active"
            className="animated infinite bounce arrow"
          >
            <ArrowDownOutlined style={{color: '#fff'}} />
          </Link>
        </Container>
      </section>
      <section>
        <Container>
          <section id="markets" className="market-grid">
            <h1 className="title">All Markets</h1>
            <div className="market"></div>
            <div className="market"></div>
            <div className="market"></div>
            <div className="market"></div>
            <div className="market"></div>
            <div className="market"></div>
            <div className="market"></div>
            <div className="market"></div>
            <div className="market"></div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Home;
