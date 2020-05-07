import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import notification from 'antd/lib/notification';
import {RadiusBottomrightOutlined} from '@ant-design/icons';

import {Container} from '../../components/container/';
import Carousel from './Carousel';
import MapContainer from './Map';
import {getSingleMarket} from '../../redux/actions/market.action';

import './style.css';

const App = (props: {
  getSingleMarket: any;

  data?: any;
  id?: string;
  cordinates?: any;
}) => {
  const {getSingleMarket, data, id, cordinates} = props;

  const openNotification = (placement: any, mess: string) => {
    notification.info({
      message: 'Error!',
      description: mess,
      placement,
    });
  };
  useEffect(() => {
    getSingleMarket(id, openNotification);
  }, [getSingleMarket, id]);

  return (
    <>
      {data.name ? (
        <Container>
          <RadiusBottomrightOutlined />
          <Link to="/" style={{color: '#33cc99'}}>
            <small>Back to Home</small>
          </Link>

          {data && (
            <main className="main-grid main-text">
              <h1 className="page-title">{data.name}</h1>
              <p className="subtitle">{data.address}</p>
              <Carousel images={data.images} />

              {/* THE MAP */}

              <div className="main-text map">
                <MapContainer
                  lat={cordinates.lat}
                  lng={cordinates.lng}
                  title={data.name}
                />
              </div>

              <div className="main-text desc">
                <h2 className="section-title">Description</h2>
                <p>{data.description}</p>
              </div>
            </main>
          )}
        </Container>
      ) : null}
    </>
  );
};

const mapDispatchToProps = {
  getSingleMarket,
};

const mapStateToProps = (state: any) => {
  const {market} = state;
  return {
    data: market.data,
    id: market.id,
    cordinates: market.cordinates,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
