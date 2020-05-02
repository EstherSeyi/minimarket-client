import React from 'react';
import Root from './Root';
import {useAuth} from './context/AuthContext';
import Loading from './components/loading';

const App: React.FC = () => {
  const {auth, confirmAuthStatus} = useAuth();

  React.useEffect(() => {
    confirmAuthStatus();
  }, [confirmAuthStatus]);

  if (auth.authenticated === null) {
    return <Loading />;
  }

  return <Root />;
};

export default App;
