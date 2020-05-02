import React from 'react';
import Root from './Root';

import ErrorBoundary from './ErrorBoundary';
import {AuthContextProvider} from './context/AuthContext';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </ErrorBoundary>
  );
};

export default App;
