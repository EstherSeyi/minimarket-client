import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import {loadToken} from '../../utils/storage';
import {useAuth} from '../../context/AuthContext';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const token = loadToken();

const PrivateRoute = (props: PrivateRouteProps) => {
  const {auth} = useAuth();
  const {component: Component, ...rest} = props;

  return (
    <Route
      {...rest}
      render={props =>
        token && auth.token !== '' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/logout" />
        )
      }
    />
  );
};

export default PrivateRoute;
