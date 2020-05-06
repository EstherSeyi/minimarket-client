import React, {useState} from 'react';
import Tooltip from 'antd/lib/tooltip';
import Pagination from 'antd/lib/pagination';
import Truncate from 'react-truncate';
import {connect} from 'react-redux';
import {MdLocationOn} from 'react-icons/md';

import {Container} from '../../components/container';
import {Link as RouteLink} from 'react-router-dom';
import '../home/home.css';

const App = ({searches, loading}: {searches?: any; loading?: any}) => {
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

  return (
    <section>
      <Container>
        <RouteLink to="/" style={{color: '#33cc99'}}>
          <small>Minimarket</small>
        </RouteLink>
        <h1 id="markets" className="markets-title">
          Search Results
        </h1>
        <section className="market-grid">
          {searches &&
            searches.length > 0 &&
            searches.slice(page.minValue, page.maxValue).map((market: any) => (
              <RouteLink key={market._id} to="#">
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
                            style={{fontSize: '1.5rem', color: '#227c9d'}}
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
            total={searches.length}
            showQuickJumper
          />
        </section>
      </Container>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);

  const {markets} = state;
  return {
    loading: markets.loading,
    searches: markets.searches,
  };
};

export default connect(mapStateToProps, null)(App);
