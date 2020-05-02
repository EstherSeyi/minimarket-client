import React, {useEffect} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

const Logout = ({history}: RouteComponentProps) => {
  const {logOut} = useAuth();

  useEffect(() => {
    logOut();
    history.push('/login');
  }, [history, logOut]);

  return (
    <React.Fragment>
      <h1>&nbsp;</h1>
    </React.Fragment>
  );
};

export default withRouter(Logout);
