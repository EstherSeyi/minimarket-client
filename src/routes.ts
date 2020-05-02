const LogOut = lazy(() => import('./components/logout/'));
const Login = lazy(() => import('./pages/login'));
  {path: '/logout', component: LogOut, ispublic: true},
  {path: '/login', component: Login, ispublic: true},
