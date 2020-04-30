import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loading from './components/loading/Loading';

const Sample = lazy(() => import('./components/sample/Sample'));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/">
          <Sample />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
