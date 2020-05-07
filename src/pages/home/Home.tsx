import React, {useEffect, useState} from 'react';
import Tooltip from 'antd/lib/tooltip';
import {MdLocationOn} from 'react-icons/md';
import {BsArrowDown} from 'react-icons/bs';
import {Link} from 'react-scroll';
import {Link as RouteLink} from 'react-router-dom';
import Truncate from 'react-truncate';
import {connect, useSelector, useDispatch} from 'react-redux';
import Pagination from 'antd/lib/pagination';

import {Container} from '../../components/container';
import getMarkets from '../../redux/actions/market.action';
import {FormModal} from './Modal';
import FindMarketForm from './FindMarketForm';
import GetNearestForm from './GetNearestForm';
import {setMarketId} from '../../redux/actions/market.action';

import 'animate.css';
import './home.css';

const Home = (props: {getMarkets: any}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    props.getMarkets();
  }, [props]);

  const {markets} = useSelector(
    (markets: {markets: {loading: boolean; data: any}}) => markets,
  );

  const {data} = markets;

  const [page, setPage] = useState({
    minValue: 0,
    maxValue: 6,
  });

  const handleChange = (value: any) => {
    if (value <= 1) {
      setPage(prevState => ({...prevState, minValue: 0, maxValue: 6}));
    } else {
      setPage(prevState => ({
        ...prevState,
        minValue: page.maxValue,
        maxValue: value * 6,
      }));
    }
  };

  const handleClick = (id: string) => {
    dispatch(setMarketId(id));
  };

  return (
    <>
      <section className="hero hero-image">
        <div className="overlay"></div>
        <Container>
          <main className="main-section">
            <h1 className="heading">Mini Market</h1>
            <p className="sub-heading">Search for markets around you</p>
            <p className="action">
              <FormModal btnText="find a market">
                <FindMarketForm />
              </FormModal>
              <FormModal btnText="get nearest market">
                <GetNearestForm />
              </FormModal>
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
            {data &&
              data.length > 0 &&
              data.slice(page.minValue, page.maxValue).map((market: any) => (
                <RouteLink
                  key={market._id}
                  to="/market"
                  onClick={() => handleClick(market._id)}
                >
                  <div className="market">
                    <div className="market-image">
                      <img src={market.images[0]} alt={`${market.name}`} />
                    </div>
                    <div className="market-body">
                      <div className="title">
                        <Tooltip
                          title={`${market.name}`}
                          trigger={['click', 'hover']}
                        >
                          <Truncate
                            lines={1}
                            ellipsis={<span>... </span>}
                            width={200}
                          >
                            {`${market.name}`}
                          </Truncate>
                        </Tooltip>
                      </div>
                      <div className="market-footer">
                        <div className="food-cat">{market.foodCategory}</div>
                        <div>
                          <Tooltip
                            title={`${market.address}`}
                            trigger={['click', 'hover']}
                          >
                            <MdLocationOn
                              style={{fontSize: '1rem', color: '#227c9d'}}
                            />
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                </RouteLink>
              ))}
            <Pagination
              className="pagination"
              defaultCurrent={1}
              defaultPageSize={6}
              onChange={handleChange}
              total={data.length}
              showQuickJumper
            />
          </section>
        </Container>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  getMarkets,
};

export default connect(null, mapDispatchToProps)(Home);
