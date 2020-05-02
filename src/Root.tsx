import React, {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Loading from './components/loading/Loading';
import routes from './routes';
import PrivateRoute from './components/private-routes';

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((route, idx) =>
          route.ispublic ? (
            <Route exact path={route.path} key={idx}>
              <route.component />
            </Route>
          ) : (
            <PrivateRoute
              exact
              path={route.path}
              component={route.component}
              key={idx}
            />
          ),
        )}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
