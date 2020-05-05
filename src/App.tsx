import React from 'react';

import {Provider} from 'react-redux';

import Root from './Root';
import ErrorBoundary from './ErrorBoundary';
import store from './store';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Root />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
