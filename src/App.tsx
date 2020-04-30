import React from 'react';
import Root from './Root';
import ErrorBoundary from './ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <Root />
      </div>
    </ErrorBoundary>
  );
};

export default App;
