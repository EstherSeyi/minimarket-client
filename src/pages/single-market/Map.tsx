import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

import Loading from '../../components/loading';

function MapContainer(props: any) {
  return (
    <Map
      google={props.google}
      zoom={7}
      initialCenter={{lat: 9.072264, lng: 7.491302}}
      style={{maxWidth: '500px', height: '50vh'}}
    >
      {
        <Marker
          title={props.title}
          position={{
            lat: props.lat,
            lng: props.lng,
          }}
        />
      }
    </Map>
  );
}

const Loader = () => {
  return <Loading />;
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA07GndmjKVUdC_QXZpZmGunXvq53Zj-aI',
  LoadingContainer: Loader,
})(MapContainer);
