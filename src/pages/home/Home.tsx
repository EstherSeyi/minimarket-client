import React from 'react';
import {Tooltip} from 'antd';
import {MdLocationOn} from 'react-icons/md';
import {BsArrowDown} from 'react-icons/bs';
import {Link} from 'react-scroll';
import {Link as RouteLink} from 'react-router-dom';

import {Container} from '../../components/container';
import {FormModal} from './modal';
import dummy from '../../static/images/dummy.jpg';
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
              <FormModal btnText="find a market" />
              <FormModal btnText="get nearest market" />
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
            className="animated infinite heartBeat arrow"
          >
            <BsArrowDown style={{color: '#fff'}} />
          </Link>
        </Container>
      </section>
      <section>
        <Container>
          <h1 id="markets" className="markets-title">
            All Markets
          </h1>
          <section className="market-grid">
            {new Array(10).fill(0).map((_, index) => (
              <RouteLink key={index} to="#">
                <div className="market">
                  <div className="market-image">
                    <img src={dummy} alt="" />
                  </div>
                  <div className="market-body">
                    <div className="title">Lorem ipsum dolor sit</div>
                    <div className="market-footer">
                      <div>Category</div>
                      <div>
                        <Tooltip title="Location" trigger={['click', 'hover']}>
                          <MdLocationOn
                            style={{fontSize: '1.5rem', color: '#227c9d'}}
                          />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </RouteLink>
            ))}
          </section>
        </Container>
      </section>
    </>
  );
};

export default Home;
