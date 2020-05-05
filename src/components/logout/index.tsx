import React, {useEffect} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {signout} from '../../redux/actions/login.action';

const Logout = ({history}: RouteComponentProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signout());
    history.push('/login');
  }, [history, dispatch]);
  return (
    <React.Fragment>
      <h1>&nbsp;</h1>
    </React.Fragment>
  );
};

export default withRouter(Logout);
