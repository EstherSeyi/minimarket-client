import {lazy} from 'react';

const Homepage = lazy(() => import('./pages/home/'));
const LogOut = lazy(() => import('./components/logout/'));
const Login = lazy(() => import('./pages/login'));
const MarketView = lazy(() => import('./pages/market-view'));
const SingleMarketVie = lazy(() => import('./pages/single-market'));
const SearchResult = lazy(() => import('./pages/searches'));

const routes = [
  //Public Routes
  {path: '/', component: Homepage, ispublic: true},
  {path: '/logout', component: LogOut, ispublic: true},
  {path: '/login', component: Login, ispublic: true},
  {path: '/market', component: SingleMarketVie, ispublic: true},
  {path: '/search', component: SearchResult, ispublic: true},

  //Private Routes
  {path: '/view', component: MarketView, ispublic: false},
];

export default routes;
