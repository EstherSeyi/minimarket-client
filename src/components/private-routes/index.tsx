import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import {useSelector} from 'react-redux';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const {authentication} = useSelector(
    (authentication: {authentication: {token: string}}) => authentication,
  );

  const {component: Component, ...rest} = props;

  return (
    <Route
      {...rest}
      render={props =>
        authentication.token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/logout" />
        )
      }
    />
  );
};

export default PrivateRoute;
