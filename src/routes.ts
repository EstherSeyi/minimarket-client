import {lazy} from 'react';

const Sample = lazy(() => import('./components/sample/Sample'));
const LogOut = lazy(() => import('./components/logout/'));
const Login = lazy(() => import('./pages/login'));

const routes = [
  {path: '/', component: Sample, ispublic: true},
  {path: '/logout', component: LogOut, ispublic: true},
  {path: '/login', component: Login, ispublic: true},
];

export default routes;
